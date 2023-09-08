// Define a function to create a card for a post office
function createCard(postOffice) {
  // Create a div for the card
  const card = document.createElement('div');
  card.classList.add('card');
  
  // Create a heading for the post office name
  const name = document.createElement('h2');
  name.textContent = postOffice.Name;
  card.appendChild(name);
  
  // Create a paragraph for the post office details
  const details = document.createElement('p');
  details.textContent = `District: ${postOffice.District}, State: ${postOffice.State}, Pincode: ${postOffice.Pincode}`;
  card.appendChild(details);
  
  // Return the card element
  return card;
}

// Define a function to create cards for all the post offices
function createCards() {
  // Fetch data from the API endpoint
  fetch('https://api.postalpincode.in/pincode/637018')
    .then(response => response.json())
    .then(data => {
      // Loop through the data and create cards for each post office
      const cards = data[0].PostOffice.map(postOffice => createCard(postOffice));
      
      // Add the cards to the container
      const container = document.getElementById('cards-container');
      cards.forEach(card => container.appendChild(card));
    })
    .catch(error => console.error(error));
}

// Call createCards function when the page loads
window.onload = createCards;
