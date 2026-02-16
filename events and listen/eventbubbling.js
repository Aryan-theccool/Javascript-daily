//jispe event aayega agar uspar listener nahi hai to humara event uske parent par listener dhundhega aur aisa karte karte uper ki taraf move karega

// let nav= document.querySelector("#nav");
// nav.addEventListener("click",function(){
//   alert("nav clicked");
// });
let ul= document.querySelector("ul");
ul.addEventListener("click",function(val){
val.target.style.textDecoration = "line-through";
});