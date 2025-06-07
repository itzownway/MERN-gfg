//Function Declaration (Function Statement)

function greet(name) {
  return `Hello, ${name}!`;
}


// Function Expression

const greet = function(name) {
  return `Hello, ${name}!`;
};


// Named Function Expression

const greet = function greetFunc(name) {
  return `Hello, ${name}!`;
};



// Arrow Function Expression

const greet = (name) => {
  return `Hello, ${name}!`;
};

// Shorter version for one-liners:
const greetShort = name => `Hello, ${name}!`;



// Constructor Function

function Person(name) {
  this.name = name;
}

const john = new Person("John");



// Async Function

async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  return response.json();
}



//  Async Arrow Function

const fetchData = async () => {
  const response = await fetch("https://api.example.com/data");
  return response.json();
};

