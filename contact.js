// Form validation and submission handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form');
    const nameInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    const messageInput = document.querySelector('textarea');

    // Add loading state to button
    const submitButton = document.querySelector('.btn-submit');
    let originalButtonText = submitButton.innerHTML;

    // Simple email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Form submission handler
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Basic validation
        if (!nameInput.value.trim()) {
            showAlert('Please enter your name', 'danger');
            nameInput.focus();
            return;
        }

        if (!isValidEmail(emailInput.value.trim())) {
            showAlert('Please enter a valid email address', 'danger');
            emailInput.focus();
            return;
        }

        if (!messageInput.value.trim()) {
            showAlert('Please enter your message', 'danger');
            messageInput.focus();
            return;
        }

        // Show loading state
        submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';
        submitButton.disabled = true;

        try {
            // Simulate API call (replace with your actual API endpoint)
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Success message
            showAlert('Thank you! Your message has been sent successfully.', 'success');
            contactForm.reset();

        } catch (error) {
            showAlert('Sorry, there was an error sending your message. Please try again.', 'danger');
        } finally {
            // Reset button state
            submitButton.innerHTML = originalButtonText;
            submitButton.disabled = false;
        }
    });

    // Create and show alert message
    function showAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show mt-3`;
        alertDiv.role = 'alert';
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;

        // Insert alert before the form
        contactForm.parentNode.insertBefore(alertDiv, contactForm);

        // Auto dismiss after 5 seconds
        setTimeout(() => {
            alertDiv.classList.remove('show');
            setTimeout(() => alertDiv.remove(), 150);
        }, 5000);
    }

    // Add animation effects to address cards
    const addressCards = document.querySelectorAll('.address-card');
    addressCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * (index + 1));
    });
}); 