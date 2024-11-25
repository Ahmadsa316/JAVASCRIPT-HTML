
// Select form and result container
const form = document.getElementById('search-form');
const resultsContainer = document.getElementById('results');

// Add event listener to handle form submission
form.addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent default form submission

  const query = document.getElementById('query').value; // Get the user's input

  try {
    // Fetch data from the TVMaze API
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error('Failed to fetch data.');

    const data = await response.json();

    // Print the search result to the console
    console.log('Search Results:', data);

    // Display results in the browser
    resultsContainer.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    // Handle errors
    console.error('Error fetching data:', error);
    resultsContainer.textContent = `Error: ${error.message}`;
  }
});
