document.addEventListener('DOMContentLoaded', function() {
    const users = [
        { userid: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', password: '12345', accesslevel: 'Admin' },
        { userid: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Project Manager', password: '54321', accesslevel: 'Project Manager' },
        { userid: 3, name: 'Bob Brown', email: 'bob@example.com', role: 'Team Member', password: 'password', accesslevel: 'Team Member' },
        { userid: 4, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', password: 'alice123', accesslevel: 'Admin' },
        { userid: 5, name: 'Charlie Davis', email: 'charlie@example.com', role: 'Project Manager', password: 'charlie123', accesslevel: 'Project Manager' },
        { userid: 6, name: 'Diana Evans', email: 'diana@example.com', role: 'Team Member', password: 'diana123', accesslevel: 'Team Member' },
        { userid: 7, name: 'Eve Foster', email: 'eve@example.com', role: 'Admin', password: 'eve123', accesslevel: 'Admin' },
        { userid: 8, name: 'Frank Green', email: 'frank@example.com', role: 'Project Manager', password: 'frank123', accesslevel: 'Project Manager' },
        { userid: 9, name: 'Grace Harris', email: 'grace@example.com', role: 'Team Member', password: 'grace123', accesslevel: 'Team Member' },
        { userid: 10, name: 'Henry Irving', email: 'henry@example.com', role: 'Team Member', password: 'henry123', accesslevel: 'Team Member' }
    ];

    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            console.log(user);
            switch (user.role) {
                case 'Admin':
                    window.location.href = './admin.html';
                    break;
                case 'Project Manager':
                    window.location.href = './project_manager_home_page.html';
                    break;
                case 'Team Member':
                    window.location.href = './user.html';
                    break;
                default:
                    alert('Role not recognized.');
                    break;
            }
        } else {
            alert('Invalid email or password.');
        }
    });
});
