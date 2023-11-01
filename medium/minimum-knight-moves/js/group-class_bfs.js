/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function(x, y) {
    
  // Use symmetry of chessboard to consider 
  // only first quadrant by taking absolute values
  return calculateMoves(Math.abs(x), Math.abs(y));
};

// All possible moves a knight can make
const _knightMoves = [ 
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2]];

var calculateMoves = function(x, y) {

  // Start position is (0, 0)
  let start = [0, 0];

  // Initialize a matrix to keep track of visited positions
  let matrix = []
  for (let i = 0; i < 305; i++) {
      matrix[i] = new Array(305).fill(0);
  }

  // Queue for BFS
  let queue = [];
  queue.push(start);

  // Counter for the number of moves
  let steps = 0;

  // BFS loop (explores the graph level by level)
  while(queue[0]) {

      // Process all nodes at the current step
      let size = queue.length;

      for (let i = 0; i < size; i++) {

          // Take the next point from the queue
          const point = queue.shift();

          // If the destination is reached, return the number of moves
          if (point[0] == x && point[1] == y) {
              return steps;
          }

          // Skip if this position is already visited
          if (matrix[point[0] + 2][point[1] + 2] == 1) {
              continue;
          }

          // Explore all possible moves from the current position
          for (let move of _knightMoves) {
              
              let currX = point[0] + move[0]; 
              let currY = point[1] + move[1]; 

               // Skip positions outside the considered range
              if (currX < -2 || currY < -2) {
                  continue;
              }

              // Skip if this position is already visited
              if (matrix[currX + 2][currY + 2] == 1) {
                  continue;
              }

              // Add the new position to the queue
              queue.push([currX, currY]);
          }

          // Mark the current position as visited
          matrix[point[0] + 2][point[1] + 2] = 1;
      }

      // Increment the number of moves
      steps++;
  }
}