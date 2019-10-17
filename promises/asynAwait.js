function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`);
    if (location === 'Google') {
      resolve('Google says hi');
    } else {
      reject('We only talk to Google');
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log('Processing response');
    resolve(`Extra Info ${response}`);
  });
}

// makeRequest('Google')
//   .then(response => {
//     console.log('Response Received');
//     return processRequest(response);
//   })
//   .then(processedResponse => {
//     console.log(processedResponse);
//   })
//   .catch(err => {
//     console.log(err);
//   });

async function doSomething() {
  try {
    const response = await makeRequest('Google');
    console.log('Processing response');
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
}

doSomething();
