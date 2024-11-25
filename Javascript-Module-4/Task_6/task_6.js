// Select the form and the results container
const form = document.getElementById('joke-form');
const resultsContainer = document.getElementById('joke-results');

// Add an event listener for form submission
form.addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent default form submission

  const searchTerm = document.getElementById('search').value; // Get the user's input

  try {
    // Fetch jokes from the API
    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(searchTerm)}`);
    if (!response.ok) throw new Error('Failed to fetch jokes.');

    const data = await response.json();

    // Clear old results
    resultsContainer.innerHTML = '';

    // Check if there are jokes
    if (data.result.length === 0) {
      resultsContainer.innerHTML = '<p>No jokes found. Try another search term.</p>';
      return;
    }

    // Display each joke in an <article> element
    data.result.forEach(joke => {
      const article = document.createElement('article');
      const paragraph = document.createElement('p');
      paragraph.textContent = joke.value;
      article.appendChild(paragraph);
      resultsContainer.appendChild(article);
    });
  } catch (error) {
    // Handle errors
    console.error('Error fetching jokes:', error);
    resultsContainer.innerHTML = `<p>Error: ${error.message}</p>`;
  }
});