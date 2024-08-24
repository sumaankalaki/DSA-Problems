
const vertices = ['A','B','C','D','E','F'];

const vertexIndices={
    'A':0,
    'B':1,
    'C':2,
    'D':3,
    'E':4,
    'F':5
}

const adjacencyMatrix = [
    [0,1,0,0,0,1],
    [1,0,1,0,0,1],
    [0,1,0,1,1,0],
    [0,0,1,0,1,0],
    [0,0,1,1,0,1],
    [1,1,0,0,1,0]
]

const travBfs = function (graph,start){
    const output = [];
    const visited = {};
    const queue = [start];
    visited[start]= true;
    let current,currentIdx;
    while(queue.length>0){
        current = queue.shift();
        output.push(current);
        currentIdx = vertexIndices[current];
        const neighbours = graph[currentIdx];
        for(let i=0;i<neighbours.length; i++)
        {
            if(neighbours[i]===1 && !visited[vertices[i]]){
                queue.push(vertices[i]);
                visited[vertices[i]] = true;
            }
        }
    }
    return output;
}

travBfs( adjacencyMatrix, 'A');


// RECURSIVE DFS using ADJACENCY MATRIX
//using queue

