let abcd = document.querySelector("#abcd");
abcd.addEventListener("mouseover",function(){
  abcd.style.backgroundColor="pink";
});
abcd.addEventListener("mouseout",function(){
  abcd.style.backgroundColor="";
});
// let abcd = document.querySelector("#abcd");
// window.addEventListener("mousemove",function(detes){
//   // console.log(detes.clientX,detes.clientY);
//   abcd.style.left = detes.clientX + "px";
//   abcd.style.top = detes.clientY + "px";
// })