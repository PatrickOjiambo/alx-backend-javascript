doSomething(function (result) {
    doSomethingElse(result, function (newResult) {
      doThirdThing(newResult, function (finalResult) {
        console.log(`Got the final result: ${finalResult}`);
      }, failureCallback);
    }, failureCallback);
  }, failureCallback);
  function doSomething() {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Other things to do before completion of the promise
        console.log("Did something");
        // The fulfillment value of the promise
        resolve("https://example.com/");
      }, 200);
    });
  }
  /**
   * Yes, you are correct. In the code snippet you provided, you are using Promises in JavaScript. Each .then() block in the chain represents a step in the asynchronous execution, and the function passed to each .then() block will be called with the resolved value of the previous Promise.

Let me break it down step by step:

    doSomething(): This function returns a Promise. The function passed to the first .then() block will be called with the resolved value when the Promise returned by doSomething() is fulfilled.

    .then(function (result) { return doSomethingElse(result); }): This .then() block receives the result from the previous step and passes it to doSomethingElse(result). The returned value from doSomethingElse(result) will be used to fulfill the Promise returned by this .then() block.

    .then(function (newResult) { return doThirdThing(newResult); }): Similarly, this .then() block receives newResult from the previous step and passes it to doThirdThing(newResult). The returned value from doThirdThing(newResult) will be used to fulfill the Promise returned by this .then() block.

    .then(function (finalResult) { console.log(Got the final result: ${finalResult}); }): Finally, this .then() block receives the finalResult from the previous step and logs it to the console.

So, each .then() block allows you to process the result of the previous step and return a new Promise or a value that will be used in the next step.

If at any point in the chain an error occurs (e.g., an exception is thrown or a Promise is rejected), the control will be transferred to the nearest .catch() block, which is the failureCallback in your code. The .catch() block allows you to handle errors that might occur in any of the preceding steps in the Promise chain.

   */
  doSomething()
  .then(function (result) {
    return doSomethingElse(result);
  })
  .then(function (newResult) {
    return doThirdThing(newResult);
  })
  .then(function (finalResult) {
    console.log(`Got the final result: ${finalResult}`);
  })
  .catch(failureCallback);


  doSomething()
  .then((url) => fetch(url))
  .then((res) => res.json())
  .then((data) => {
    listOfIngredients.push(data);
  })
  .then(() => {
    console.log(listOfIngredients);
  });

async function logIngredients() {
  const url = await doSomething();
  const res = await fetch(url);
  const data = await res.json();
  listOfIngredients.push(data);
  console.log(listOfIngredients);
}


doSomethingCritical()
  .then((result) =>
    doSomethingOptional(result)
      .then((optionalResult) => doSomethingExtraNice(optionalResult))
      .catch((e) => {}),
  ) // Ignore if optional stuff fails; proceed.
  .then(() => moreCriticalStuff())
  .catch((e) => console.error(`Critical failure: ${e.message}`));

  async function main() {
    try {
      const result = await doSomethingCritical();
      try {
        const optionalResult = await doSomethingOptional(result);
        await doSomethingExtraNice(optionalResult);
      } catch (e) {
        // Ignore failures in optional steps and proceed.
      }
      await moreCriticalStuff();
    } catch (e) {
      console.error(`Critical failure: ${e.message}`);
    }
  }
  //chaining after catch
  doSomething()
  .then(() => {
    throw new Error("Something failed");

    console.log("Do this");
  })
  .catch(() => {
    console.error("Do that");
  })
  .then(() => {
    console.log("Do this, no matter what happened before");
  });
