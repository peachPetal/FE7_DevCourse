// function bfs(grid, startX, startY){
//     const rows = grid.length;
//     const cols = grid[0].length;

//     const visited = Array.from({length: rows}, () => Array(cols).fill(false));
//     const queue = [[startX, startY]];
//     visited[startX][startY] = true;

//     const dx = [-1, 1, 0, 0];
//     const dy = [0, 0, -1, 1];

//     while(queue.length > 0){
//         const [x, y] = queue.shift();
//         console.log(`Visited: (${x}, ${y})`);

//         for(let i = 0; i < 4; i++){
//             const nx = x + dx[i];
//             const ny = y + dy[i];

//             if(nx >= 0 && ny >= 0 && nx < rows && ny < cols && !visited[nx][ny] && grid[nx][ny] === 1){
//                 visited[nx][ny] = true;
//                 queue.push([nx, ny]);
//             }
//         }
//     }
// }

// const grid = [
//   [1, 1, 0],
//   [0, 1, 0],
//   [1, 1, 1]
// ];

// bfs(grid, 0, 0);


function bfs(startX, startY, grid){
    const rows = grid.length;
    const cols = grid[0].length;

    const visited = Array.from({ length: rows}, () => Array(cols).fill(false));

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    const queue = [[startX, startY]];
    visited[startX][startY] = true;

    while(queue.length > 0){
        const [ x, y ] = queue.shift();
        console.log(`Visited: [${x}, ${y}]`)

        for(let i = 0; i < 4; i++){
            const nx = x + dx[i];
            const ny = y + dy[i];

            if(nx >= 0 && ny >= 0 && nx < rows && ny < cols && !visited[nx][ny] && grid[nx][ny] === 1){
                visited[nx][ny] = true;
                queue.push([nx, ny]);
            }
        }
    }
}

const grid = [
  [1, 1, 0],
  [0, 1, 0],
  [1, 1, 1]
];

bfs(0, 0, grid);
