const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const secretCode = 'prionti'; // Updated secret code
const nextPageUrl = 'http://127.0.0.1:5500/main.html'; // Replace with the URL of the new page

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = codeInput.value.trim();
    console.log('User Input:', userInput); // Debugging line
    if (userInput === secretCode) {
        console.log('Code matched. Redirecting to:', nextPageUrl); // Debugging line
        resultDiv.innerHTML = 'Baby';
        window.location.href = nextPageUrl; // Redirect to new page
    } else {
        console.log('Code did not match.'); // Debugging line
        resultDiv.innerHTML = 'Naa Tum meri baby nhi hoo kon hooo tum kaha hai meri prionti';
    }
});