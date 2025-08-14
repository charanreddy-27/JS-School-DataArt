// Fetch events.json and render
fetch('data/events.json')
  .then(response => response.json())
  .then(events => {
    const timeline = document.getElementById('timeline');

    events.forEach((event, index) => {
      const eventDiv = document.createElement('div');
      eventDiv.classList.add('event');
      eventDiv.innerHTML = `
        <h3>${event.year}</h3>
        <p>${event.title}</p>
      `;
      eventDiv.addEventListener('click', () => openModal(event));
      timeline.appendChild(eventDiv);
    });
  })
  .catch(err => console.error('Error loading events:', err));

// Modal functionality
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');

function openModal(event) {
  document.getElementById('modal-title').textContent = event.title;
  document.getElementById('modal-year').textContent = `Year: ${event.year}`;
  document.getElementById('modal-image').src = event.imageURL;
  document.getElementById('modal-description').textContent = event.description;
  document.getElementById('modal-category').textContent = `Category: ${event.category}`;
  
  modal.style.display = 'block';
}

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});
