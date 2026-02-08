let p=document.querySelector("p");
p.addEventListener("click",function(){
  p.style.color="pink"
    console.log("hiiiiiiiiiiii");
});
let input = document.querySelector("input");

input.addEventListener("input",function(val){
  if(val.data !==null){
console.log(val.data);
  }
});