// Make an HTTP GET request to your API endpoint
fetch('https://api.sleeper.app/v1/league/997862686069198848/rosters')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON data
  })
  .then(data => {
    // You can work with the 'data' variable here
    console.log(data); // Print the data to the console
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
