document.addEventListener('DOMContentLoaded', function() {
    const forgetPasswordForm = document.getElementById('forgetPasswordForm');
    const errorMessage = document.getElementById('errorMessage');

    forgetPasswordForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (newPassword !== confirmPassword) {
            errorMessage.textContent = 'New Password and Confirm Password do not match.';
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
            alert('Password reset successful!');
        }
    });
});
