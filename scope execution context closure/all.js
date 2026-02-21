//scope-functional scope,global scope, block

// function scope - ye keval function me use hoga
//global scope-poore code me use hoga 
//block - curly me use hoga {}


//execution content (ye ABSTRACT HAI)- 2js sabse pehle jaise hi aapka pehle function dekhta hai js sabse pehle banta hai execution context, ye ek process hai jo ki do different phase me chalta hai , memory phase and doosre ka naam hai execution phase 

//js me lexical scoping use karte hai dynamic nahi use karte
// lexical scoping - aap kaha pe physically available ho ye batata hai ki aap kya access kar sakte ho
// dynamic scoping not in js- kaha se cll kar rahe ho uspe depend karega ki kya milega 
//dynamic example
let a=12;
function abcd(){
  console.log(a);//js lexical hai toh 12 nahi toh 13 due to dynamic
}
function defg(){
  let a=13;
  abcd();
}
defg();
