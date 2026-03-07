// module pattern

// Module Pattern ek design pattern hai jisme hum apna code ek self
// executing function (IIFE) ke andar likhte hain, taki variables aur
// functions private rahen.

// Iske andar se hum sirf wahi cheezein return karte hain jo bahar use
// karni hain.

// Is pattern ka main fayda hai data hiding (encapsulation) aur clean
// structure, taaki code secure, reusable aur manageable ban sake.


//immediate invoked function expression
let fun=(function modulePattern() {
let bankbalance =12000;      
  // public methods and properties
    function checkbalnace(){
      console.log(bankbalance);
    }
function setBalance(amount){
  bankbalance = amount;
}
function withdraw(amount){
  if(amount > bankbalance){
    console.log("Insufficient balance");
    return;
  }
  bankbalance -= amount;
}

    return {
      checkbalnace,
      setBalance,
      withdraw
    };
})();
