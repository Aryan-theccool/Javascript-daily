let btn = document.querySelector("#btn");
let file=document.querySelector("#fileinput");
if(btn && file) {
  btn.addEventListener("click",function(){
    file.click();
  });
  file.addEventListener("change",function(dets){
    let filee=dets.target.files[0];
    if(filee){
      btn.textContent=filee.name;
    }
  })
}