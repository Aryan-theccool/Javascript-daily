let form = document.querySelector("form");
let input = document.querySelectorAll("input");
let main =document.querySelector("#main");
if(form) {
  form.addEventListener("submit",function(event){
  event.preventDefault();

  // console.log(input[0].value,
  //   input[1].value,
  //   input[2].value,
  //   input[3].value);
let card = document.createElement("div");
card.classList.add("card");

let profile = document.createElement("div");
profile.classList.add("profile");

let img = document.createElement("img");
img.setAttribute(
  "src",
  input[0].value ||
    "https://images.unsplash.com/photo-1761839259484-4741afbbdcbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
);

let info = document.createElement("div");
info.classList.add("info");

let h5 = document.createElement("h5");
h5.textContent = input[1].value || "Name";

let occupationP = document.createElement("p");
occupationP.textContent = input[2].value || "Occupation";

let infoP = document.createElement("p");
infoP.textContent = input[3].value || "Info";

profile.appendChild(img);
info.appendChild(h5);
info.appendChild(occupationP);
info.appendChild(infoP);

card.appendChild(profile);
card.appendChild(info);

console.log(card);

main.appendChild(card);
input.forEach(function(inp){
  if(inp.type!="submit"){
  inp.value = "";
  }

});
  });
}