// Select form and results container
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

    // Clear old results
    resultsContainer.innerHTML = '';

    // Iterate through the results and create HTML elements for each show
    data.forEach(tvShow => {
      const { name, url, image, summary } = tvShow.show;

      // Create an article element
      const article = document.createElement('article');

      // Create and append <h2> element for the show name
      const title = document.createElement('h2');
      title.textContent = name;
      article.appendChild(title);

      // Create and append <a> element for the details link
      const link = document.createElement('a');
      link.href = url;
      link.textContent = 'Details';
      link.target = '_blank'; // Open link in a new tab
      article.appendChild(link);

      // Use ternary operator to handle missing images
      const imageUrl = image?.medium ? image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found';
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = name;
      article.appendChild(img);

      // Create and append <div> element for the summary (if available)
      if (summary) {
        const summaryDiv = document.createElement('div');
        summaryDiv.innerHTML = summary; // Use innerHTML to preserve the existing <p> tags
        article.appendChild(summaryDiv);
      }

      // Append the article to the results container
      resultsContainer.appendChild(article);
    });
  } catch (error) {
    // Handle errors
    console.error('Error fetching data:', error);
    resultsContainer.textContent = `Error: ${error.message}`;
  }
});