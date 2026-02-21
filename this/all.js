//global scope 
console.log(this);
//function ke ander
function abcd(){
  console.log(this);
}
abcd();
 
//method
let obj={
  name:"harsh",
  sayname:function(){
    console.log(this);
  }
};
obj.sayname(); 
//eventhadler
document.querySelector("h1").addEventListener("click",function(){
  console.log(this.style.color="red");
  alert();
})

//class
class Aryanthecool{
  constructor(){
    console.log("heyyyy");
    this.a=45;
  }
}
let val= new Aryanthecool(); 