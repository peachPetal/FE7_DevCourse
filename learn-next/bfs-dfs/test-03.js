// https://school.programmers.co.kr/learn/courses/30/lessons/250136

function solution(land) {
  const rows = land.length;
  const pipes = land[0].length;
  const visited = Array.from({ length: rows }, () => Array(pipes).fill(false));

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const oils = Array(pipes).fill(0);

  function isValid(x, y) {
    return x >= 0 && x < rows && y >= 0 && y < pipes;
  }

  function bfs(startRow, startPipe) {
    const queue = [[startRow, startPipe]];
    visited[startRow][startPipe] = true;
    let size = 0;
    const columnSet = new Set();

    while (queue.length > 0) {
      const [row, pipe] = queue.shift();
      size++;
      columnSet.add(pipe);

      for (let i = 0; i < 4; i++) {
        const nx = row + dx[i];
        const ny = pipe + dy[i];

        if (!isValid(nx, ny)) continue;
        if (land[nx][ny] === 1 && !visited[nx][ny]) {
          queue.push([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }

    for (const pipe of columnSet) {
      oils[pipe] += size;
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let pipe = 0; pipe < pipes; pipe++) {
      if (land[row][pipe] === 1 && !visited[row][pipe]) {
        bfs(row, pipe);
      }
    }
  }

  return Math.max(...oils);
}
