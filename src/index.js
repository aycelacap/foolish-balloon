// document.addEventListener("DOMContentLoaded", () => {
//   const root = document.getElementById("fred");

// });



async function getData(url = "http://api.stlouisfed.org/fred/category?category_id=125&api_key=901eb0bb728a9e578b8f6234db45f7cf&file_type=json") {
  // const 
const response = await fetch(url, {mode: 'no-cors'});

  console.log(response);

  if (!response.ok) {
    throw new Error("Network response was not OK");
  }

  const data = await response.json()
  return data;
};

getData() 
  .then(data => {
    // If the fetch was successful, here we can manipulate the data we received
    console.log(data);
  })
  .catch(error => {
    // If our fetch was unnsuccessful, here we can handle our error(s)
    console.error('There has been a problem with your fetch operation: ', error);
  }
  );

