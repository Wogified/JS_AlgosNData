class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    //   generate the hash value based on the key
    let hash = this._hash(key);
    // if the hash index is undefined, insert an array there
    if (this.keyMap[hash] === undefined) this.keyMap[hash] = [];
    // push in the value at the hash index
    this.keyMap[hash].push([key, value]);
  }

  get(key) {
    //   generate the hash value
    let hash = this._hash(key);
    let n = this.keyMap[hash].length;
    //   if there are values at the has index
    if (this.keyMap[hash]) {
      let subArr = this.keyMap[hash];
      for (let i = 0; i < n; i++) {
        if (subArr[i][0] === key) return subArr[i];
      }
    }
    return undefined;
  }

  keys() {
    // object to keep count of unique keys
    let unique = {};
    // output array
    let output = [];
    // loop through hash table
    for (let i = 0; i < this.keyMap.length; i++) {
      // if the index contains any values, do more stuff
      // otherwise continue
      if (this.keyMap[i]) {
        // loop through the separate chaining
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // grab the key
          let key = this.keyMap[i][j][0];
          // if the key does not exist in the unique list, then add it
          // and push the key into the output array
          if (!unique[key]) {
            unique[key] = 1;
            output.push(key);
          }
        }
      }
    }
    return output;
  }
  values() {
    // object to keep count of unique values
    let unique = {};
    // output array
    let output = [];
    // loop through hash table
    for (let i = 0; i < this.keyMap.length; i++) {
      // if the index contains any values, do more stuff
      // otherwise continue
      if (this.keyMap[i]) {
        // loop through the separate chaining
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // grab the value
          let val = this.keyMap[i][j][1];
          // if the value does not exist in the unique list, then add it
          // and push the value into the output array
          if (!unique[val]) {
            unique[val] = 1;
            output.push(val);
          }
        }
      }
    }
    return output;
  }
}

var a = new HashTable();
console.log(a._hash("blarg"));

console.log(a._hash("blu"));
console.log(a._hash("blog"));

a.set("blu", 12);
a.set("hello", "world");
a.set("tool", "box");
a.set("small", "pox");
a.set("big", "pox");
a.set("blog", 36);
console.log(a.keyMap);
console.log(a.get("blog"));
console.log(a.keys());
console.log(a.values());
