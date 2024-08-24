let adjancency_List = {
    'A' :['B','F'],
    'B' :['A','C'],
    'C' :['B','E','D'],
    'D' :['C','E'],
    'E' :['D','C','F'],
    'F' :['A','E']
}

var dfsIterative = function( graph,start){
let output= [];
let visited = {};
let stack = [];
stack.push(start);
visited[start] = true;

while(stack.length>0)
{
    let current = stack.pop();
    output.push(current);
    const neighbours = graph[current];
    for(let i=0; i<neighbours.length; i++)
    {
        if(!visited[neighbours[i]]){
            stack.push(neighbours[i]);
            visited[neighbours[i]]= true;
        }
    }

}
return output;
}

var value = dfsIterative( adjancency_List,'A');
console.log(value);