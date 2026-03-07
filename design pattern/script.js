// module pattern

// Module Pattern ek design pattern hai jisme hum apna code ek self
// executing function (IIFE) ke andar likhte hain, taki variables aur
// functions private rahen.

// Iske andar se hum sirf wahi cheezein return karte hain jo bahar use
// karni hain.

// Is pattern ka main fayda hai data hiding (encapsulation) aur clean
// structure, taaki code secure, reusable aur manageable ban sake.


//immediate invoked function expression
// let fun=(function modulePattern() {
// let bankbalance =12000;      
//   // public methods and properties
//     function checkbalnace(){
//       console.log(bankbalance);
//     }
// function setBalance(amount){
//   bankbalance = amount;
// }
// function withdraw(amount){
//   if(amount > bankbalance){
//     console.log("Insufficient balance");
//     return;
//   }
//   bankbalance -= amount;
// }

//     return {
//       checkbalnace,
//       setBalance,
//       withdraw
//     };
// })();
// // refiling module pattern
// let fun=(function modulePattern() {
// let bankbalance =12000;      
//   // public methods and properties
//     function checkbalnace(){
//       console.log(bankbalance);
//     }
// function setBalance(amount){
//   bankbalance = amount;
// }
// function withdraw(amount){
//   if(amount > bankbalance){
//     console.log("Insufficient balance");
//     return;
//   }
//   bankbalance -= amount;
// }

//     return {
//     check: checkbalnace,
//       set: setBalance,
//       withdraw
//     };
// })();

// Factory Function Pattern
// Ek function banate ho jo objects create karta hai (factory = object
// banane ki machine)

// Factory Function Pattern ek aisa design pattern hai jisme hum ek
// simple function likhte hain jo naye objects बनाकर return karta hai,
// bina class ya new keyword use kiye.

// Is pattern ka main idea hai -> object creation ko ek function ke
// through control karna.

// Har baar jab tum factory function call karte ho, tumhe ek naya object
// milta hai jisme apne methods aur (agar chaho to) private data ho sakte
// hai.

function createProduct(name, price) {

  let stock=10;
    return {
        name,
        price,
        buy(qty){
            if(qty > stock){
                console.log("Insufficient stock");
                return;
            }
            stock -= qty;
            console.log(`${qty} ${this.name} bought`);
        },
        refill(qty){
            stock += qty;
            console.log(`${qty} ${this.name} refilled`);
        },
        display: function() {
            console.log(`${this.name} - $${this.price}`);
        },
        status: function() {
            console.log(`${this.name} - Stock: ${stock}`);
        }
    };
}

// Usage
const product1 = createProduct("Laptop", 999);
const product2 = createProduct("Phone", 599);

// product1.display(); // Laptop - $999
// product2.display(); // Phone - $599