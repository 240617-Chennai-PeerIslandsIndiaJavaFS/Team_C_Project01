document.getElementById('resetPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const oldPassword = document.getElementById('oldPassword').value.trim();
    const newPassword = document.getElementById('newPassword').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    if (!oldPassword || !newPassword || !confirmPassword) {
        alert('All fields are required!');
        return;
    }

    if (newPassword !== confirmPassword) {
        alert('New password and confirm password should be match!');
        return;
    }

    alert('Password has been reset successfully!');
});
