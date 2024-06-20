// Question # 1
setTimeout(function fetchGreeting() {
  console.log("greeting");
}, 2000);
// Question # 2
function simulateTask() {
  console.log("Task started");
  setTimeout(function () {
    console.log("Task completed");
  }, 1000);
}
simulateTask();
// Question # 3
function fetchData1() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Data fetched successfully!");
    }, 1000);
  });
}
fetchData1().then(function (message) {
  console.log(message);
});

// Question # 4
function fetchWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let randomNumber = Math.floor(Math.random() * 10);
      console.log(randomNumber);
      const isSuccess = randomNumber > 5;
      if (isSuccess) {
        resolve("Data fetched successfully!");
      } else {
        reject("Data fetch failed!");
      }
    }, 1000);
  });
}

fetchWithError()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

// Question # 5
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 3000);
  });
}

function processData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data is in prossesing...");
    }, 1000);
  });
}

function executeSequentially() {
  fetchData().then((result) => {
    console.log(result);
    return processData();
  });
  processData().then((processedResult) => {
    console.log(processedResult);
  });
}
executeSequentially();
