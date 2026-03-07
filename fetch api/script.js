fetch("https://randomuser.me/api/?results=3")
.then(function(response){
return response.json();
 })
 .then(function(data){
  data.results.forEach(function(user){
    console.log(user);
  })
  console.log(data.results);
 })
.catch(function(error){
  console.log(error);
})