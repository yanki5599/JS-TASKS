const people = ["Greg", "Mary", "Devon", "James"];

console.log("first print: ", people);

const removeName = (nameToRemove) => {
  let inx = people.indexOf(nameToRemove);
  people.splice(inx, 1);
};

// remove Greg

people.shift();
console.log("deleted Greg: ", people);

// remove James
people.pop();
console.log("deleted James: ", people);

// add Matt to front

people.unshift("Matt");
console.log("adding Matt: ", people);

// add your name to the array
let myName = "Jacob";
people.push(myName);
console.log("adding myNmae to end: ", people);

// copy array
let people2 = people.slice(2);
console.log("copy new array: ", people2);

// index of mary

let maryIdx = people.indexOf("Mary");
console.log("mary's index:", maryIdx);

//index of foo

let idxFoo = people.indexOf("foo");
console.log("index of foo is ", idxFoo);

// redefine
let people3 = ["Greg", "Mary", "Devon", "James"];
console.log("redefine ", people3);

people3.splice(2, 1, "Elizabeth", "Artie");
console.log("adding ", people3);

// 9
console.log("people stat: ", people);
let withBob = people.concat(["Bob"]);
console.log(withBob);
