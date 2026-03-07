// document.querySelector('#search').addEventListener('input', (e) => {
//     console.log(e.target.value);
// });
//isme kya hora na hatho hath action perform hora aur ye me nahi chahta 

function debounce(func, delay) {
    let timeout;
    return function(...args) {
      console.log("hi");
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          console.log("hi");
          func.apply(this, args)
        }, delay);
    };
}

document.querySelector('#search').addEventListener('input', debounce((e) => {
    console.log(e.target.value);
}, 500));
