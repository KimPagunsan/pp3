document.addEventListener('DOMContentLoaded', function() {
    // Get all "Buy" buttons
    const buyButtons = document.querySelectorAll('.btn-primary');
  
    buyButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        // Prevent default button action (typically form submission)
        event.preventDefault();
  
        const card = button.parentElement.parentElement;
        const image = card.querySelector('img').src;
        const title = card.querySelector('.card-title').textContent.trim();
        const description = card.querySelector('.card-text').textContent.trim();
  
        // Create modal content
        const modalBody = document.createElement('div');
        modalBody.classList.add('modal-body');
        modalBody.innerHTML = `<h3>${title}</h3>${image}<p>${description}</p>`;
  
        // Create modal instance using Bootstrap (assuming Bootstrap is included)
        const modal = new bootstrap.Modal(document.getElementById('productPreviewModal'));
  
        // Set modal body content
        modal.body = modalBody;
  
        // Show the modal
        modal.show();
      });
    });
  });
  