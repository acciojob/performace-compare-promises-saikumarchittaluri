// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
/ Function to fetch data from an API URL and measure the time taken
async function fetchDataAndMeasureTime(url) {
  const startTime = performance.now();
  await fetch(url);
  const endTime = performance.now();
  return endTime - startTime;
}

// Function to display the time taken for Promise.all and Promise.any
async function displayTimeTaken() {
  try {
    const allPromises = apiUrls.map((url) => fetchDataAndMeasureTime(url));
    const anyPromise = Promise.any(allPromises);

    const [allTime, anyTime] = await Promise.all([Promise.all(allPromises), anyPromise]);

    document.getElementById("output-all").textContent = allTime.reduce((acc, time) => acc + time, 0);
    document.getElementById("output-any").textContent = anyTime;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the function to display the time taken
displayTimeTaken();