// Day 11: Promises and async/await


// Activity 1:understanding Promises
//Task 1: CReate a promise that resolve with a message after a 2-second timeout and log the message to the console.
// Creating a promise that resolves after a 2-second timeout


const Task1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds");
  }, 2000);
});
Task1.then(message => {
  console.log(message); 
  
}).catch(error => {
  console.error(error);
});


// Task 2:CReate a promise that reject with an error message after a 2-second timeout and handle the error using .catch
const Task2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise reject after 2 seconds");
  }, 2000);
});
Task2.then(message => {
  console.log(message); 
  
}).catch(error => {
  console.error(error);
});


// Activity 2: Chaining Promises
//Task 3:  Create a sequence of promise that simulate fetching data from the server.chain the promise to log the message in specific order.

const fetchData1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from server 1 fetched");
    }, 1000);
  });
};

const fetchData2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from server 2 fetched");
    }, 2000);
  });
};

const fetchData3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from server 3 fetched");
    }, 1500);
  });
};

fetchData1()
  .then(message1 => {
    console.log(message1); 
    return fetchData2();
  })
  .then(message2 => {
    console.log(message2); 
    return fetchData3();
  })
  .then(message3 => {
    console.log(message3); 
  })
  .catch(error => {
    console.error(error.message); 
  });

//Activity 3: Async/await
// Task 4: Write a async func that waits for a promise to resolve and then log the resolved value

const Task4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds");
  }, 2000);
});
async function logResolvedValue() {
  try {
    const result = await Task4;
    console.log(result); 
  } catch (error) {
    console.error(error); 
  }
}
logResolvedValue();


// Task 5: Write a async func that handles a reject promise using try-catch and then log the error.

const Task5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("handle a reject promise after 2 sec");
  }, 2000);
});
async function logErrorValue() {
  try {
    const result = await Task5;
    console.log(result); 
  } catch (error) {
    console.error(error); 
  }
}
logErrorValue();


//Activity 4: Fetching Data from API
//TAsk 6:Use the fetch API to get data from public API and log the respond data to console using promises.

const apiUrl = 'https://dog.ceo/api/breeds/image/random';
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data); 
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

//TAsk 7:Use the fetch API to get data from public API and log the respond data to console using async/await.
async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    console.log(data); 
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}
fetchData();

//Activity 5: Concurrent Promises
//Task8: Use promise.all to wait for multiple promises to resolve and then log all the values.
Promise.all([Task4, Task5])
  .then(values => {
    console.log(values); 
  })
  .catch(error => {
    console.error('One of the promises rejected:', error);
  });

//Task 9:  Use promise.race to log the value of first promise and then log all the values.

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved after 1 second");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved after 2 seconds");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 resolved after 3 seconds");
  }, 3000);
});
Promise.race([promise1, promise2, promise3])
  .then(value => {
    console.log('First resolved value:', value); 
  })
  .catch(error => {
    console.error('First rejected reason:', error); 
  })
  .finally(() => {
    Promise.all([promise1, promise2, promise3])
      .then(values => {
        console.log('All resolved values:', values); 
      })
      .catch(error => {
        console.error('One of the promises rejected:', error);
      });
  });

//Promise.race is about which promise finishes first.
//Promise.all is about all promises completing.
