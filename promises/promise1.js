/**Promise  */

// const p = new Promise((resolve, reject) => {
//   const a = 1 + 2;
//   if (a === 2) {
//     resolve("Success");
//   } else {
//     reject("Failed");
//   }
// });

// p.then(message => {
//   console.log(`This is in the then: ${message}`);
// }).catch(message => {
//   console.log(`This is in the catch: ${message}`);
// });

/**Call Back */

const userLeft = true;
const userWatchingCatMeme = false;

// function watchingTutourialCallback(successCallback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       name: 'User Left',
//       message: ':('
//     });
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: 'User Watching Cat Meme',
//       message: 'WebDevSimplified < Cat'
//     });
//   } else {
//     successCallback('Thumbs up and Subscriobe');
//   }
// }

// watchingTutourialCallback(
//   message => {
//     console.log(`Success: ${message}`);
//   },
//   err => {
//     console.log(`${err.name} ${err.message}`);
//   }
// );

function watchingTutourialPromise() {
  return new Promise((res, rej) => {
    if (userLeft) {
      rej({
        name: 'User Left',
        message: ':('
      });
    } else if (userWatchingCatMeme) {
      rej({
        name: 'User Watching Cat Meme',
        message: 'WebDevSimplified < Cat'
      });
    } else {
      res('Thumbs up and Subscriobe');
    }
  });
}

watchingTutourialPromise()
  .then(message => {
    console.log(`Success: ${message}`);
  })
  .catch(err => {
    console.log(`${err.name} ${err.message}`);
  });
