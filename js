document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo');
    const loginButton = document.getElementById('loginButton');
    const formContainer = document.getElementById('formContainer');
    const loginForm = document.querySelector('.login');
    const registerForm = document.querySelector('.register');
    const toggleForms = document.querySelectorAll('.toggle-form');
    const container = document.querySelector('.container');
    
    loginButton.addEventListener('click', () => {
        loginButton.style.opacity = '0';
        loginButton.style.pointerEvents = 'none';
        
        container.style.justifyContent = 'flex-start';
        
        logo.style.transition = 'all 4s ease';
        logo.style.transform = 'translateY(-100vh)';
        
        setTimeout(() => {
            formContainer.style.display = 'flex';
            formContainer.style.opacity = '0';
            formContainer.classList.add('show');
            
            setTimeout(() => {
                formContainer.style.opacity = '1';
                loginForm.classList.add('active');
            }, 50);
        }, 2000);
    });
    
    toggleForms.forEach(toggle => {
        toggle.addEventListener('click', () => {
            loginForm.classList.toggle('active');
            registerForm.classList.toggle('active');
        });
    });
});
