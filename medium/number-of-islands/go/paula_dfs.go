//passar por cada localidade do grid
//se for água, ir pra próxima
//se for terra, contabilizar uma ilha e marcar toda a ilha como contabilizada    

func numIslands(grid [][]byte) int {
    width := len(grid[0])
    checked := make([][]bool, len(grid))
    for i := range checked {
        checked[i] = make([]bool, width)
    }
    islands := 0

    for x, row := range grid {
        for y := range row {
            if isWater(grid[x][y]) || checked[x][y] {
                continue
            }
            islands++
            markIslandAsChecked(x, y, grid, checked)
        }
    } 

    return islands
}

func markIslandAsChecked(x int, y int, grid [][]byte, checked[][]bool) {

    if isOutBounds(x, y, len(grid), len(grid[0])) || checked[x][y] || isWater(grid[x][y]){
        return
    }

    checked[x][y] = true

    markIslandAsChecked(x - 1, y, grid, checked)
    markIslandAsChecked(x + 1, y, grid, checked)
    markIslandAsChecked(x, y + 1, grid, checked)
    markIslandAsChecked(x, y - 1, grid, checked)
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
