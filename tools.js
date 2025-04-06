// This is my tools.js file 

// Class demonstrating a simple Counter
export class Counter {
    constructor(initialCount = 0) {
      this.count = initialCount;
    }
  
    increment() {
      this.count++;
    }
  
    decrement() {
      this.count--;
    }
  
    getCount() {
      return this.count;
    }
  }
  
  // Function demonstrating asynchronous programming with Promises
  export function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { message: 'Data collected successfully' };
        resolve(data);
      }, 1000);
    });
  }
  
  // Function showing my use of Map
  export function createUserMap(myusers) {
    const userMap = new Map();
    myusers.forEach(myuser => {
      userMap.set(myuser.id, myuser.name);
    });
    return userMap;
  }
  