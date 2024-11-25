
// Map setup
const map = L.map('map').setView([60.22, 24.81], 12); // Centered around Espoo
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

// Select form and result elements
const form = document.getElementById('route-form');
const routeDetails = document.getElementById('route-details');

// Target address (Karaportti 2 coordinates)
const karaporttiCoords = [60.21825, 24.81224];

// Event listener for the form submission
form.addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent default form submission
  const address = document.getElementById('address').value;

  try {
    // Get coordinates for the user-defined address
    const userCoords = await getCoordinates(address);

    if (!userCoords) {
      routeDetails.textContent = 'Error: Could not find the specified address.';
      return;
    }

    // Get route from userCoords to Karaportti 2
    const route = await getRoute(userCoords, karaporttiCoords);

    if (route) {
      // Display route on the map
      displayRoute(route);

      // Display start and end times
      const startTime = new Date(route.legs[0].startTime).toLocaleTimeString();
      const endTime = new Date(route.legs[route.legs.length - 1].endTime).toLocaleTimeString();
      routeDetails.innerHTML = `
        <p><strong>Route Details:</strong></p>
        <p>Start Time: ${startTime}</p>
        <p>End Time: ${endTime}</p>
      `;
    } else {
      routeDetails.textContent = 'Error: Could not find a route.';
    }
  } catch (error) {
    console.error(error);
    routeDetails.textContent = 'Error: Unable to calculate the route.';
  }
});

async function getCoordinates(address) {
  const response = await fetch(
    `https://api.digitransit.fi/geocoding/v1/search?text=${encodeURIComponent(address)}`
  );
  if (response.ok) {
    const data = await response.json();
    if (data.features.length > 0) {
      return data.features[0].geometry.coordinates.reverse();
    }
  }
  return null;
}

async function getRoute(startCoords, endCoords) {
  const response = await fetch(
    `https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          {
            plan(
              from: { lat: ${startCoords[0]}, lon: ${startCoords[1]} }
              to: { lat: ${endCoords[0]}, lon: ${endCoords[1]} }
              transportModes: [{ mode: WALK }, { mode: BUS }, { mode: RAIL }]
            ) {
              itineraries {
                legs {
                  startTime
                  endTime
                  mode
                  from { name }
                  to { name }
                }
              }
            }
          }
        `,
      }),
    }
  );

  if (response.ok) {
    const data = await response.json();
    const itineraries = data.data.plan.itineraries;
    if (itineraries.length > 0) {
      return itineraries[0];
    }
  }
  return null;
}

// Function to display the route on the map
function displayRoute(route) {
  // Clear any existing layers
  map.eachLayer(layer => {
    if (layer instanceof L.Polyline) {
      map.removeLayer(layer);
    }
  });

  const coords = [];
  route.legs.forEach(leg => {
    leg.from.name && coords.push([leg.from.lat, leg.from.lon]);
    leg.to.name && coords.push([leg.to.lat, leg.to.lon]);
  });
  L.polyline(coords, { color: 'blue' }).addTo(map);

  map.fitBounds(coords);
}
