function signup() {
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    
    if (!name || !email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    
    alert(`User registered!\nName: ${name}\nEmail: ${email}`);
    
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    if (!email || !password) {
        alert('Please fill in all fields.');
        return;
    }
    alert(`User logged in!\nEmail: ${email}`);
}

function toggleMenu() {
    const navMenu = document.querySelector('nav ul');
    navMenu.classList.toggle('show');
}

function signup() {
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (!isValidEmail(email)){
        alert('Invalid email id');
        return;
    } 
    if( !isValidPassword(password)) {
        alert('Password length must be greater than 6');
        return;
    }

    alert(`User registered!\nName: ${name}\nEmail: ${email}`);
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!isValidEmail(email)){
        alert('Invalid email id');
        return;
    } 
    if( !isValidPassword(password)) {
        alert('Password length must be greater than 6');
        return;
    }

    alert(`User logged in!\nEmail: ${email}`);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    return password.length >= 6;
}