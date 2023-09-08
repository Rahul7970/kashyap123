
function createCards() {
    fetch('https://api.postalpincode.in/pincode/803302')
      .then(response => response.json())
      .then(data => {
       
        data[0].PostOffice.forEach(postOffice => {
          const card = document.createElement('div');
          card.classList.add('card');
          const name = document.createElement('h2');
          name.textContent = postOffice.Name;
          const details = document.createElement('p');
          details.textContent = `District: ${postOffice.District}, State: ${postOffice.State}, Pincode: ${postOffice.Pincode}`;
     
          const button = document.createElement('button');
          button.textContent = 'Show More';
          button.addEventListener('click', () => {
            window.location.href = `postoffice.html?name=${postOffice.Name}&district=${postOffice.District}&state=${postOffice.State}&pincode=${postOffice.Pincode}`;
          });
          card.appendChild(name);
          card.appendChild(details);
          card.appendChild(button);
          document.getElementById('cards-container').appendChild(card);
        });
      })
      .catch(error => console.error(error));
  }
  

  window.onload = createCards;
  