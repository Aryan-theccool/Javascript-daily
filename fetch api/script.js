fetch("https://randomuser.me/api/")
.then(function(response){
  return response.json();
})
.then(function(data){
  console.log(data);
  document.body.innerHTML += `<pre>${JSON.stringify(data, null, 2)}</pre>`;
})
.catch(function(error){
  console.log(error);
})
.catch(function(error){
  console.log(error);
})