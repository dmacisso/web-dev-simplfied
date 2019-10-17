fetch("https://regres.in/api/users")
  .then(res => console.log(res))
  .catch(err => console.log(`This is the message: ${err}`));
