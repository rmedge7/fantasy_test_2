document.addEventListener('DOMContentLoaded', function () {

// Make an HTTP GET request to your API endpoint
fetch('https://api.sleeper.app/v1/league/997862686069198848/rosters')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON data
  })
  .then(data => {
// Access the 'data' variable here
    const table = document.getElementById('standings'); // Get the table element

    // Loop through the data and create table rows and cells
    data.forEach(team => {
        const row = table.insertRow(); // Insert a new row

        // Create table cells and populate with data
        const nameCell = row.insertCell(0);
        const winsCell = row.insertCell(1);
        const lossesCell = row.insertCell(2);
        const tiesCell = row.insertCell(3);

        nameCell.innerHTML = team.roster_id; // Replace with your data field name
        winsCell.innerHTML = team.settings.wins; // Replace with your data field name
        lossesCell.innerHTML = team.settings.losses; // Replace with your data field name
        tiesCell.innerHTML = team.settings.ties; // Replace with your data field name
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
});
