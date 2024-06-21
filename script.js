"use strict";

// Registration Form
const registerForm = document.querySelector("#registerForm");

function registerUser(event) {
    event.preventDefault(); // Prevent form submission
    const firstname = document.querySelector("#firstname").value.trim();
    const lastname = document.querySelector("#lastname").value.trim();
    const username = document.querySelector("#username").value.trim();
    const email = document.querySelector("#email").value.trim();
    const age = parseInt(document.querySelector("#age").value);
    const contact = document.querySelector("#contact").value.trim();
    const address = document.querySelector("#address").value.trim();
    const password = document.querySelector("#password").value;

    // Perform validation
    if (!validateEmail(email)) {
        showMessage("Please enter a valid email address.");
    } else if (username === "") {
        showMessage("Please enter a username.");
    } else if (password.length < 8) {
        showMessage("Please enter a password that is at least 8 characters long.");
    } else if (firstname === "" || lastname === "") {
        showMessage("Please enter your full name.");
    } else if (isNaN(age) || age <= 0) {
        showMessage("Please enter a valid age.");
    } else if (contact === "") {
        showMessage("Please enter your contact information.");
    } else if (address === "") {
        showMessage("Please enter your address.");
    } else {
        // Registration successful, you can store user data or perform further actions
        showMessage("Registration successful!");
        setTimeout(() => {
            location.reload();
        }, 1500);
    }
}

if (registerForm) {
    registerForm.addEventListener("submit", registerUser);
}

// Utility function to show messages
function showMessage(message) {
    const messageDiv = document.querySelector("#message");
    messageDiv.textContent = message;
}

// Function to validate email (you can replace this with your own validation logic)
function validateEmail(email) {
    return email.includes('@');
}

// Login Form
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
        // Login successful, redirect to homepage
        showMessage("Login successful!");
        setTimeout(() => {
            localStorage.setItem('username', email.split('@')[0]); // Store username in localStorage
            location.href = "index.html"; // Redirect to homepage
        }, 1500);
    }
}

if (loginForm) {
    loginForm.addEventListener("submit", loginUser);
}

// Update navigation based on login status
document.addEventListener("DOMContentLoaded", () => {
    const user = {
        isLoggedIn: false,
        username: localStorage.getItem('username') || ""
    };

    const loginItem = document.querySelector(".nav-item.login");
    const registerItem = document.querySelector(".nav-item.register");
    const usernameItem = document.querySelector(".nav-item.username");
    const usernameDisplay = document.getElementById("usernameDisplay");
    const logoutItem = document.querySelector(".nav-item.logout");

    function updateNavigation() {
        if (user.username) {
            user.isLoggedIn = true;
        }

        if (user.isLoggedIn) {
            loginItem.style.display = "none";
            registerItem.style.display = "none";
            usernameDisplay.textContent = `Welcome, ${user.username}`;
            usernameItem.style.display = "block";
            logoutItem.style.display = "block";
        } else {
            loginItem.style.display = "block";
            registerItem.style.display = "block";
            usernameItem.style.display = "none";
            logoutItem.style.display = "none";
        }
    }

    updateNavigation();

    document.getElementById("logoutButton").addEventListener("click", () => {
        localStorage.removeItem('username');
        user.isLoggedIn = false;
        user.username = "";
        updateNavigation();
    });
});
