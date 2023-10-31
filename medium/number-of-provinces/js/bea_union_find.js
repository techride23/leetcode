let _parent;
let _rank;
let _provinces = 0;

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    unionFind(isConnected);
    return _provinces;
};

/**
 * @param {number[][]} cities
 */
var unionFind = function(cities) {

    _parent = new Array(cities.length);
    _rank = new Array(cities.length).fill(0);
    _provinces = cities.length;
    
    for (let i = 0; i < cities.length; i++) {
        _parent[i] = i;
    }

    for (let i = 0; i < cities.length; i++) {
        for (let j = 0; j < cities[i].length; j++) {
            if (cities[i][j] == 1) {
                if (union(i, j)) {
                    _provinces--;
                }
            }
        }
    }
}

/**
 * @param {number} nodeA
 * @param {number} nodeB
 */
var union = function(nodeA, nodeB) {
    const parentA = find(nodeA);
    const parentB = find(nodeB);

    if (parentA == parentB) {
        // can't connect same parent
        return false;
    } 
    
    if (_rank[parentA] < _rank[parentB]) {
        _parent[parentA] = parentB;
    } else if (_rank[parentA] > _rank[parentB]) {
        _parent[parentB] = parentA;
    } else {
        _parent[parentB] = parentA;
        _rank[parentA]++;
    }

    return true;
}

/**
 * find parent node 
 * @param {number} node
 */
var find = function(node) {
    if (_parent[node] == node) {
        // if is parent from itself, there is no parent
        return node;
    } else {
        return _parent[node] = find(_parent[node]); // path compression
    }
}