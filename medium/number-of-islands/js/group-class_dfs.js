/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
  var visited = [grid.length];
  
  for(let i = 0; i < grid.length; i++) {
    visited[i] = new Array(grid[0].length).fill(false);
  }

  // Counter for the number of islands found
  let islands = 0;

  // Iterate over each cell in the grid
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
        // Skip the current cell if it is water or has been visited
        if (isWater(grid[row][col]) || visited[row][col]) {
          continue;
        }

        // Increment the island count and explore the current land
        islands++;
        visitIsland(row, col, grid, visited);
    }
  }

  return islands;
};

// Helper function to mark all cells of an island as visited
var visitIsland = function(row, col, grid, visited) {

  // Return if the current position is out of bounds, already visited, or water
  if (isOutOfBounds(row, grid.length) 
  || isOutOfBounds(col, grid[0].length)
  || visited[row][col]
  || isWater(grid[row][col])) {
    return;
  }

  // Mark the current cell as visited
  visited[row][col] = true;

  // Recursively visit all adjacent cells (up, down, left, right)
  visitIsland(row - 1, col, grid, visited);
  visitIsland(row + 1, col, grid, visited);
  visitIsland(row, col + 1, grid, visited);
  visitIsland(row, col - 1, grid, visited);
}

var isWater = function(location) {
  return location == '0'; // '0' character represents water
}

var isOutOfBounds = function(position, dimensionLength) {
  return position < 0 || position >= dimensionLength;
}
