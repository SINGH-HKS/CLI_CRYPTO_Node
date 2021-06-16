#!/usr/bin/env node

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
 
readline.question('ENTER?', name => {
  console.log(`Hey there ${name}!`);
  readline.close();
});

