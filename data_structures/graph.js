class Node {
  constructor(){
    this.value = value;
    this.adjacents = []; // adjacents values
  }

  addAdjacent(node){
    this.adjacents.push(node);
  }

  removeAdjacent(node){
    const index = this.adjacents.indexOf(node); // finds index value of node in adjacents array
    if(index > -1) {
      this.adjacents.splice(index, 1); // removes the value of adjacent from current node
      return node;
    }
  }

  getAdjacents(){
    return this.adjacents;
  }

  isAdjacent(node){
    return this.adjacents.indexOf(node) > -1;
  }
}

class Graph {
  constructor(edgeDirection = Graph.DIRECTED) {
    this.nodes = new Map(); // new graph structure with Map Data Structure
    this.edgeDirection = edgeDirection;
  }

  addEdge(source, destination){
    const sourceNode = this.addVertex(source);
    const destinationNode = this.addVertex(destination);

    sourceNode.addAdjacent(destinationNode);

    if(this.edgeDirection === Graph.UNDIRECTED) {
      destinationNode.addAdjacent(sourceNode);
    }

    return [sourceNode, destinationNode];
  }

  addVertex(value) {
    if(this.node.has(value)) { // has method on Map Data structure
      return this.nodes.get(value); // get method on Map Data structure
    } else {
      const vertex = new Node(value);
      this.nodes.set(value, vertex);
      return vertex
    }
  }

  removeVertex(value) {
    const current = this.nodes.get(value);
    if(current) {
      for (const node of this.nodes.values()) {
        node.removeAdjacent(current);
      }
    }
    return this.nodes.delete(value);
  }

  removeEdge(source, destination) {
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);

    if(sourceNode && destinationNode) { // runtime = O(n) or O(E) for amount of edges
      sourceNode.removeAdjacent(destinationNode); // calls Graph's removeAdjacent method to remove node

      if(this.edgeDirection === Graph.UNDIRECTED) {
        destinationNode.removeAdjacent(soureNode);
      }
    } 
    return [sourceNode, destinationNode];
  }

}

Graph.UNDIRECTED = Symbol('directed graph'); 
Graph.DIRECTED = Symbol('undirected graph');

const graph = new Graph(Graph.UNDIRECTED); //direction must be declared at each new Graph instantiation
console.log(graph)
