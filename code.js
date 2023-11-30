

var users = []; // Array to store user data

function signup(username, password) {
    // Check if the username is already taken
    if (getUserByUsername(username)) {
        alert('Username already taken. Please choose another.');
        return false;
    }

    // Create a new user object and add it to the array
    var newUser = { username: username, password: password };
    users.push(newUser);
    alert('Account created successfully! You can now log in.');
    return true;
}

function login(username, password) {
    // Get the user by username
    var user = getUserByUsername(username);

    // Check if the user exists and the password is correct
    if (user && user.password === password) {
        return true; // Authentication successful
    } else {
        alert('Invalid username or password. Please try again.');
        return false;
    }
}

function getUserByUsername(username) {
    // Find a user in the array by username
    return users.find(function (user) {
        return user.username === username;
    });
}
function openUserProfile() {
    document.getElementById('user-Profile').style.display = 'flex';
}

function closeUserProfile() {
    document.getElementById('user-Profile').style.display = 'none';
}
function showCart() {
    document.getElementById('cartPopup').style.display = 'block';
}

function closeCart() {
    document.getElementById('cartPopup').style.display = 'none';
}



function redirectToPayment() {
    // Redirect to the payment.html page
    window.location.href = 'check.html';
}


