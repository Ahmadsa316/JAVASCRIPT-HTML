
const form = document.getElementById('search-form');
const resultsContainer = document.getElementById('results');

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const query = document.getElementById('query').value;

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error('Failed to fetch data.');

    const data = await response.json();

    resultsContainer.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    resultsContainer.textContent = `Error: ${error.message}`;
  }
});
