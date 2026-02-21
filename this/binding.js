// call apply bind
//function kko call karte waqt aap set kar sakte ho uski this ki value kya hogi

//call
let obj={
 name: "harsh"
};
function abcd(){
  console.log(this.name);
}//hum chahte ye hai ki ye object ki value is fynction me aajay
abcd.call(obj);
//or
abcd.call(obj,1,2,3);

//apply 
//jab hum ek se jyda parameter bhejre hai function ke toh ek toh obj then baki sari value array ke ander 
abcd.apply(obj,[1,2,3]);

//bind
// ye hota call ki tarah hai per ye chalata nahi hai call ki tarah per ek copy bana deta hai usko apan store kar sakte hai and then call kar sakte hai fun ko 

let fnc=abcd.bind(obj,1,2,3);
fnc();