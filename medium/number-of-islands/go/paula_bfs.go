const (
    VISITED = 2
)

func numIslands(grid [][]byte) int {
    islands := 0

    for x, row := range grid {
        for y := range row {
            if isWater(grid[x][y]) || grid[x][y] == VISITED {
                continue
            }
            islands++
            markIslandAsChecked(x, y, grid)
        }
    } 

    return islands
}

func markIslandAsChecked(x int, y int, grid [][]byte) {
    queue := []int{x, y}

    for len(queue) != 0 {
        x := queue[0] 
        y := queue[1]
        queue = queue[2:]
    
        if isOutBounds(x, y, len(grid), len(grid[0])) || grid[x][y] == VISITED || isWater(grid[x][y]){
            continue
        }
        grid[x][y] = VISITED 
        queue = append(queue, x+1, y, x-1, y, x, y+1, x, y-1)
    }
}

func isOutBounds(x int, y int, heigth int, width int) bool {
    if x < 0 || x >= heigth {
        return true
    }
    if y < 0 || y >= width {
        return true
    }
    return false
}

func isWater(location byte) bool {
    return location - 48 == 0
}
