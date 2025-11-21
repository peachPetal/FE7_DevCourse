function dfs(x, y, visited, grid){
    if(x < 0 || y < 0 || x >= rows || y >= cols || visited[x][y] || grid[x][y] === 0) return;
    
    visited[x][y] = true;
    console.log(`Visited [${x}, ${y}]`);

    for(let i = 0; i < 4; i++){
        const nx = x + dx[i];
        const ny = y + dy[i];

        dfs(nx, ny, visited, grid);
    }
}

const grid = [
  [1, 1, 0],
  [0, 1, 0],
  [1, 1, 1]
];

const rows = grid.length;
const cols = grid[0].length;
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
dfs(0, 0, visited, grid);
