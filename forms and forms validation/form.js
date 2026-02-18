let nm=document.querySelector("#name");
let form=document.querySelector("form");
form.addEventListener("submit",function(e){
      e.preventDefault();

//   if(nm.value.length<=2){
// document.querySelector("#hide").style.display="initial";
//   }else{
//     document.querySelector("#hide").style.display="none";
// regex
const regex=/^[A-Za-z]{2,}(?: [A-Za-z]+)*$/;
regex.test("Aryanthecool");
const email=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
email.test("aryan@123.com");
console.log(regex.test("Arya@@ntheeecool"));
console.log(email.test("aryan@123.com"));
});