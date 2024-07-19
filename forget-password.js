document.addEventListener('DOMContentLoaded', function() {
    const forgetPasswordForm = document.getElementById('forgetPasswordForm');
    const errorMessage = document.getElementById('errorMessage');

    forgetPasswordForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (newPassword !== confirmPassword) {
            errorMessage.textContent = 'New Password and Confirm Password do not match.';
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
            // Proceed with form submission or further processing
            alert('Password reset successful!');
            // You can add further processing here (e.g., sending data to a server)
        }
    });
});
