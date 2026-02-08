//change event tab chalta hai jab apka input select ya koi text area me koi change hojay

let select = document.querySelector("select");
let h3=document.querySelector("h3");
select.addEventListener("change", function(val){
  console.log(val.target.value);
    h3.textContent = `${  val.target.value} device selected`;
});