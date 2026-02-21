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
//closure hote hai fun jo ki kisi parent fun ke ander ho aur ander wala fun return ho raha ho, and returening fun use kare parent fun ka koi variable

function abcd(){
  let a=12;
  return function(){
    console.log(a);
  }
}
let fun=abcd();
fun();

//fayde nuksan par 
//private variable 
//globalpollutionbn 

//private counter 
function countforme(){
  let c=0;
  return function(){
    c++;
    console.log(c);
  }
}
let save=countforme();
save();
save();

save();

save();
let save2 = countforme();
save2();
save2();

save2();

save2();
// encapsulation with closure
function clicklimiter(){
  let click =0;
  return function(){
    if(click<5){
    click++;
console.log(`clicked :${click} times`)
    }else{
      console.error("limit exceed ")
    }
  }
}
let fuun=clicklimiter();
fuun();
fuun()

fuun()

fuun()
fuun()
fuun()

// // toaster

// function showToast(message, type = 'info', duration = 3000) {
//   const toastContainer = document.getElementById('toast-container');
  
//   const toast = document.createElement('div');
  
//   const bgColor = {
//     'success': 'bg-green-500',
//     'error': 'bg-red-500',
//     'warning': 'bg-yellow-500',
//     'info': 'bg-blue-500'
//   }[type] || 'bg-gray-500';
  
//   const icon = {
//     'success': '✓',
//     'error': '✗',
//     'warning': '⚠',
//     'info': 'ℹ'
//   }[type] || 'ℹ';
  
//   toast.className = `${bgColor} text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 transform transition-all duration-300 translate-x-full`;
//   toast.innerHTML = `
//     <span class="text-lg">${icon}</span>
//     <span>${message}</span>
//   `;
  
//   toastContainer.appendChild(toast);
  
//   setTimeout(() => {
//     toast.classList.remove('translate-x-full');
//     toast.classList.add('translate-x-0');
//   }, 100);
  
//   setTimeout(() => {
//     toast.classList.add('translate-x-full');
//     setTimeout(() => {
//       toastContainer.removeChild(toast);
//     }, 300);
//   }, duration);
// }

// // Example usage:
// showToast('Success message!', 'success');
// showToast('Error occurred!', 'error');
// showToast('Warning!', 'warning');
// showToast('Info message', 'info');




