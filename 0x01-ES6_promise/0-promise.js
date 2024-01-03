export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
      const fakeAPIResponse = { message: 'Hello from the API!' };
      resolve(fakeAPIResponse);
    });
  }
