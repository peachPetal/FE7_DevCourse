// function dfs(node, visited, graph){
//     if(visited.has(node)) return;
//     visited.add(node);
//     console.log(node);

//     for(let neighbor of graph[node]){
//         dfs(neighbor, visited, graph);
//     }
// }

// const graph = {
//     0: [1, 2],
//     1: [0, 3],
//     2: [0],
//     3: [1],
// };

// const visited = new Set();
// dfs(0, visited, graph);

function dfs(node) {
    // 2. 현재 노드가 이미 방문한 노드인 경우 이미 탐색을 했는 노드이므로 return
    if(visited.has(node)) return;

    // 3. 현재 노드가 방문하지 않은 노드인 경우 방문 표시 및 현재 노드 출력
    visited.add(node);
    console.log(node);

    // 4. 현재 노드와 연결되어 있는 인접 노드에 대해 
    //    재귀적으로 함수를 호출하며 탐색 진행
    for(let neighbor of graph[node]){
        dfs(neighbor);
    }
}

const graph = {
    1: [2, 3],
    2: [1, 4],
    3: [1, 5],
    4: [2],
    5: [3]
};

const visited = new Set();

// 1. 루트 노드를 시작으로 함수 호출
dfs(1);
// 출력:
// 1
// 2
// 4
// 3
// 5
