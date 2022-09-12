const password = document.getElementById('password');
const confPassword = document.getElementById('conf-password');
const createBtn = document.querySelector('button');
const span = document.querySelector('.warning');

createBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const passwordValue = password.value;
    const confPasswordValue = confPassword.value;
    
    if (passwordValue !== confPasswordValue) {
        span.style.display = 'block';
        password.style.borderColor = 'red';
        password.style.marginBottom = 0;  
        confPassword.style.borderColor = 'red';
        confPassword.style.marginBottom = 0;
    }
})