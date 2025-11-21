// https://school.programmers.co.kr/learn/courses/30/lessons/154538

function solution(x, y, n) {
    if(x === y) return 0;

    const queue = [[x, 0]];
    const visited = Array(y + 1).fill(false);
    visited[x] = true;
    let index = 0;

    while(index < queue.length){
        const [current, count] = queue[index];
        index++;

        for(const next of [current + n, current * 2, current * 3]){
            if(next === y) return count + 1;
            if(next < y && !visited[next]){
                visited[next] = true;
                queue.push([next, count + 1]);
            }
        }
    }

    return -1;
}