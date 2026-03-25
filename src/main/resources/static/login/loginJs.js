document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const submitBtn = loginForm.querySelector('.btn-primary');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Visual feedback
        submitBtn.innerText = 'Signing in...';
        submitBtn.style.opacity = '0.7';
        submitBtn.disabled = true;

        console.log('Form Submitted:', { email, password });

        // Simulate API call
        setTimeout(() => {
            alert('Login attempted! Check console for data.');
            submitBtn.innerText = 'Sign In';
            submitBtn.style.opacity = '1';
            submitBtn.disabled = false;
        }, 1500);
    });
});
