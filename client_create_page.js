document.getElementById('createClientForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const clientName = document.getElementById('clientName').value.trim();
    const clientEmail = document.getElementById('clientEmail').value.trim();
    const clientInfo = document.getElementById('clientInfo').value.trim();
    
    if (!clientName || !clientEmail || !clientInfo) {
        alert('All fields are required!');
        return;
    }
    
    // Handle client creation logic here
    alert('Client has been created successfully!');
});
