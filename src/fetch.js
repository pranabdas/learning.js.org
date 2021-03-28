// fetch is an asynchronous method
// fetch does not work by default with node, we need to install certain packages
// e.g., node-fetch or cross-fetch. Here we will link this code to fetch.html
// and work from browser console.
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

const url = "https://swapi.dev/api/planets/1/";

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data.name))
//   .catch((error) => console.log(error));

fetch(url)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    }
  })
  .then((data) => {
    if (data) {
      console.log(data.name);
    }
  })
  .catch((error) => console.log(error));
