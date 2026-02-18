let a=setTimeout(function(){
    console.log("hello");
},2000);
clearTimeout(a);
let b=setInterval(function(){
    console.log("happp");
},2000);
clearInterval(b);
let count=10;
let c=setInterval(function(){
    console.log(count);
    count--;
    if(count==0){
      clearInterval(c);
    }
},1000);