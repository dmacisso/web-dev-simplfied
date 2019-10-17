const recordVideoOne = new Promise((res, rej) =>{
  res('Video 1 Recorded')
})
const recordVideoTwo = new Promise((res, rej) =>{
  res('Video 2 Recorded')
})
const recordVideoThree = new Promise((res, rej) =>{
  res('Video 3 Recorded')
})

// Promise.all([
//   recordVideoOne,
//   recordVideoTwo,
//   recordVideoThree
// ]).then((mesg) => {
//   console.log(mesg);
// })

Promise.race([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((mesg) => {
  console.log(mesg);
})