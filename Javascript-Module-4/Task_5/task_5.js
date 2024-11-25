// Function to fetch a random Chuck Norris joke
async function fetchRandomJoke() {
    try {
      // Send a request to the API
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      if (!response.ok) throw new Error('Failed to fetch joke.');

      // Parse the JSON response
      const data = await response.json();

      // Print the joke (value property) to the console
      console.log('Random Chuck Norris Joke:', data.value);
    } catch (error) {
      // Handle errors
      console.error('Error fetching joke:', error);
    }
  }

  // Call the function
  fetchRandomJoke();
