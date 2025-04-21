document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
    }
    
    // Function to show error message
    function showError(input, message) {
        input.classList.add('is-invalid');
        const feedbackElement = input.nextElementSibling;
        if (feedbackElement && feedbackElement.classList.contains('invalid-feedback')) {
            feedbackElement.textContent = message;
            feedbackElement.style.display = 'block';
        }
    }
    
    // Function to hide error message
    function hideError(input) {
        input.classList.remove('is-invalid');
        const feedbackElement = input.nextElementSibling;
        if (feedbackElement && feedbackElement.classList.contains('invalid-feedback')) {
            feedbackElement.style.display = 'none';
        }
    }
    
    // Validate email on input
    emailInput.addEventListener('input', function() {
        if (this.value.trim() === '') {
            showError(this, 'Email is required');
        } else if (!isValidEmail(this.value)) {
            showError(this, 'Please enter a valid email address');
        } else {
            hideError(this);
        }
    });
    
    // Validate password on input
    passwordInput.addEventListener('input', function() {
        if (this.value.trim() === '') {
            showError(this, 'Password is required');
        } else if (this.value.length < 6) {
            showError(this, 'Password must be at least 6 characters');
        } else {
            hideError(this);
        }
    });
    
    // Form submission handler
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let isValid = true;
        
        // Validate email
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email address');
            isValid = false;
        } else {
            hideError(emailInput);
        }
        
        // Validate password
        if (passwordInput.value.trim() === '') {
            showError(passwordInput, 'Password is required');
            isValid = false;
        } else if (passwordInput.value.length < 6) {
            showError(passwordInput, 'Password must be at least 6 characters');
            isValid = false;
        } else {
            hideError(passwordInput);
        }
        
        // If form is valid, you can submit it or perform other actions
        if (isValid) {
            console.log('Form submitted successfully!');
            // Uncomment the line below to actually submit the form
            // this.submit();
            
            // For demo purposes, let's show an alert
            alert('Login successful!');
        }
    });
    
    // Additional animations or UI enhancements
    const submitBtn = document.querySelector('.submit-btn');
    
    submitBtn.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    submitBtn.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
    
    // Make form elements look interactive
    const formControls = document.querySelectorAll('.form-control');
    
    formControls.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.boxShadow = '0 0 0 3px rgba(0, 123, 255, 0.25)';
        });
        
        input.addEventListener('blur', function() {
            this.style.boxShadow = 'none';
        });
    });
});