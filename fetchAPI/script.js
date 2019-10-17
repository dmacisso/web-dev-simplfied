// fetch("https://regres.in/api/users/23")


// fetch('https://jsonplaceholder.typicode.com/todos/5'

fetch("https://regres.in/api/users/23", {
  // to do more than just get you need to add options
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify({
     name: 'User 1',

   })

})
  .then(res => { 
  return res.json()
  })
  .then(data => console.log(data))
  .catch(err => console.log(`This is the message: ${err}`));
