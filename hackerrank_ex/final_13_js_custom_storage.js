/* 
Implement a custom in-memory storage solution that replicates basic functionalities of localStorage in JavaScript. This solution should support basic CRUD operations and be implemented as a class named CustomStorage. Each method must operate asynchronously using Promises.
Function Description:
Implement the CustomStorage class with the following methods:
get(key): Retrieves the value associated with the given key from the custom storage.
set(key, value): Stores the key-value pair in the custom storage. Overwrites the value if it already exists.
remove(key): Deletes the key-value pair from the custom storage.
clear(): Clears all key-value pairs from the custom storage.
getAllKeys(): Retrieves all keys stored in the custom storage.
Constraints:
0 < Number of operations, n< 16
Key are strings with a maximum length of 10 characters.
Values can be strings or numbers.
Returns:
get(key): Returns a Promise that resolves with the value if the key exists, or null if it does not.
set(key, value): Returns a Promise that resolves when the operation is complete.
remove(key): Returns a Promise that resolves with true if the key existed and was deleted, or false if the key did not exist.
clear(): Returns a Promise that resolves when the operation is complete.
getAllKeys(): Returns a Promise that resolves with an array of keys. 
*/

process.stdin.resume();
process.stdin.setEncoding('utf-8');

const fs = require("fs");
let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}


// Complete the below class
class CustomStorage {
    constructor() {
        this.storage = new Map()
    }

    async get(key) {
        return this.storage.has(key) ? this.storage.get(key) : null
    }

    async set(key, value) {
        this.storage.set(key, value)
        return true
    }

    async remove(key) {
        const exists = this.storage.has(key)
        this.storage.delete(key)
        return exists ? true : false
    }

    async clear() {
        this.storage.clear()
        return true
    }

    async getAllKeys() {
        return Array.from(this.storage.keys())
    }
}
async function main() {
  const ws = fs.createWriteStream(process.env['OUTPUT_PATH']);
  const [n, ...ops] = inputString;

  let content = ''
  const customStorage = new CustomStorage()
  for (let i = 0; i < parseInt(n); i++) {
    const {
      type,
      key,
      value
    } = JSON.parse(ops[i]);
    switch (type) {
      case "get":
        content += await customStorage.get(key) + '\n';
        break;
      case "set":
        await customStorage.set(key, value)
        break;
      case "remove":
        content += await customStorage.remove(key) + '\n';
        break;
      case "clear":
        await customStorage.clear();
        break;
      case "getAllKeys":
        content += JSON.stringify(await customStorage.getAllKeys()) + "\n";
        break;
      default:
        content += 'Invalid type given'
    }
  }

  ws.write(content);
  ws.end();
}