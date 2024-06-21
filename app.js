document.addEventListener('DOMContentLoaded', function() {
  const buyButtons = document.querySelectorAll('.btn-primary');

  buyButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();

      const card = button.parentElement.parentElement;
      const image = card.querySelector('img').src;
      const title = card.querySelector('.card-title').textContent.trim();
      const description = card.querySelector('.card-text').textContent.trim();

      const modalBody = document.createElement('div');
      modalBody.classList.add('modal-body');
      modalBody.innerHTML = `<h3>${title}</h3>${image}<p>${description}</p>`;

      const modal = new bootstrap.Modal(document.getElementById('productPreviewModal'));

      modal.body = modalBody;

      modal.show();
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector("#loginForm");

    function loginUser(event) {
        event.preventDefault(); // Prevent form submission
        const email = document.querySelector("#email").value.trim();
        const password = document.querySelector("#password").value;

        // Perform login validation (you can implement actual login logic here)
        if (!validateEmail(email)) {
            showMessage("Please enter a valid email address.");
        } else if (password.length < 8) {
            showMessage("Please enter a valid password.");
        } else {
            // Mock login validation and set username in local storage
            const username = email.split('@')[0];
            localStorage.setItem('username', username);
            showMessage("Login successful!");
            setTimeout(() => {
                location.href = "index.html"; // Redirect to homepage
            }, 1500);
        }
    }

    loginForm.addEventListener("submit", loginUser);

    // Utility function to show messages
    function showMessage(message) {
        const messageDiv = document.querySelector("#message");
        messageDiv.textContent = message;
    }

    // Function to validate email (you can replace this with your own validation logic)
    function validateEmail(email) {
        // Example validation - check if email contains '@'
        return email.includes('@');
    }

    // Check if user is logged in
    const loggedInUsername = localStorage.getItem('username');
    if (loggedInUsername) {
        const nav = document.querySelector('.navbar-nav');
        const usernameItem = document.createElement('li');
        usernameItem.classList.add('nav-item');
        usernameItem.innerHTML = `<a href="#" class="nav-link">Welcome, ${loggedInUsername}</a>`;
        nav.appendChild(usernameItem);
    }
});

// Your existing JavaScript code here

// Function to handle successful login
function loginUser(event) {
  event.preventDefault(); // Prevent form submission
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value;

  // Perform login validation (you can implement actual login logic here)
  if (!validateEmail(email)) {
      showMessage("Please enter a valid email address.");
  } else if (password.length < 8) {
      showMessage("Please enter a valid password.");
  } else {
      // Mock login validation and set username in local storage
      const username = email.split('@')[0];
      localStorage.setItem('username', username);
      showMessage("Login successful!");
      setTimeout(() => {
          location.href = "index.html"; // Redirect to homepage
      }, 1500);
  }
}

// Event listener for login form submission
loginForm.addEventListener("submit", loginUser);

// Utility function to show messages
function showMessage(message) {
  const messageDiv = document.querySelector("#message");
  messageDiv.textContent = message;
}

// Function to validate email (you can replace this with your own validation logic)
function validateEmail(email) {
  return email.includes('@');
}
