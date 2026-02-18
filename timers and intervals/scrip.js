// let a=setTimeout(function(){
//     console.log("hello");
// },2000);
// clearTimeout(a);
// let b=setInterval(function(){
//     console.log("happp");
// },2000);
// clearInterval(b);
// let count=10;
// let c=setInterval(function(){
//     console.log(count);
//     count--;
//     if(count==0){
//       clearInterval(c);
//     }
// },1000);

// suppose 3 sec me 100% karana therefore 1 percent=30ms
let count =0;
let progress =document.querySelector(".progress-bar");
let percent=document.querySelector("#percentText");
let a=setInterval(function(){
  count++;
  progress.style.width=count+"%";
  percent.textContent=count+"%";
  if(count==100){
    clearInterval(a);
        document.querySelector("h2").textContent="Downloaded";

  }  
  }
,30);
