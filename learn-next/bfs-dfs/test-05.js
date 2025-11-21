// https://school.programmers.co.kr/learn/courses/30/lessons/49994

function solution(dirs) {
  let x = 5, y = 5;
  const visited = new Set();
  const dx = { 'U': -1, 'D': 1, 'L': 0, 'R': 0 };
  const dy = { 'U': 0, 'D': 0, 'L': -1, 'R': 1 };
  let answer = 0;

  for(const dir of dirs){
    const nx = x + dx[dir];
    const ny = y + dy[dir];

    if(nx < 0 || nx > 10 || ny < 0 || ny > 10) continue;

    const path = `${x},${y}-${nx},${ny}`;
    const revPath = `${nx},${ny}-${x},${y}`;
    if(!visited.has(path)){
      visited.add(path);
      visited.add(revPath);
      answer++;
    }

    x = nx;
    y = ny;
  }

  return answer;
}
