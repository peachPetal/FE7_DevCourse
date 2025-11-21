function bfs(start, graph){
    const visited = new Set();
    const queue = [start];
    visited.add(start);

    while(queue.length > 0){
        const node = queue.shift();
        console.log(node);

        for(let neighbor of graph[node]){
            if(!visited.has(neighbor)){
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}

const graph = {
    0: [1, 2],
    1: [0, 3],
    2: [0],
    3: [1]
};

bfs(0, graph);