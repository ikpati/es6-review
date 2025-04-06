// This is my index.js file

import { Counter, fetchData, createUserMap } from './tools.js';

// Test of the Counter class
const counter = new Counter();
console.log('Initial count:', counter.getCount()); 
counter.increment();
console.log('After increment:', counter.getCount()); 

// Test of  the fetchData function (async programming with Promises)
fetchData().then(data => {
  console.log(data.message); 
}).catch(error => {
  console.error('Error fetching data:', error);
});

// Test of the createUserMap function (using Map)
const myusers = [
  { id: 1, name: 'victor' },
  { id: 2, name: 'ikpati' },
];
const userMap = createUserMap(myusers);
console.log(userMap.get(1)); // it Should log: victor
console.log(userMap.get(2)); // it Should log: ikpati
