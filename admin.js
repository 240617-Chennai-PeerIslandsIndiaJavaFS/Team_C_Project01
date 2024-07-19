let userIDCounter = 1;
let users = [
    { id: userIDCounter++, name: 'Admin', email: 'admin@example.com', password: 'password', role: 'admin' },
];

document.addEventListener('DOMContentLoaded', () => {
    showForm('home');
    populateDropdowns();
    populateClientDropdown('client-name');
    populateUserDropdown('update-user-select');
    populateDeactivateUserDropdown('deactivate-user-select');
    populateAccessLevelsDropdown('access-user-id');
    trackUserActivity();
});

function showForm(formId) {
    const forms = document.querySelectorAll('.form-container');
    forms.forEach(form => {
        form.style.display = form.id === formId ? 'block' : 'none';
    });
}

function populateDropdowns() {
    const dropdownIds = ['update-user-select', 'deactivate-user-select', 'access-user-id'];
    dropdownIds.forEach(dropdownId => {
        const selectElement = document.getElementById(dropdownId);
        selectElement.innerHTML = users.map(user => `<option value="${user.id}">${user.name}</option>`).join('');
    });
}

function populateUserDropdown(dropdownId) {
    const selectElement = document.getElementById(dropdownId);
    selectElement.innerHTML = users.map(user => `<option value="${user.id}">${user.name}</option>`).join('');
    selectElement.addEventListener('change', () => {
        const selectedUserId = parseInt(selectElement.value);
        const selectedUser = users.find(user => user.id === selectedUserId);
        document.getElementById('update-user-name').value = ''; 
        document.getElementById('update-user-email').value = '';
        document.getElementById('update-user-password').value = ''; 
    });
}

function populateDeactivateUserDropdown(dropdownId) {
    const selectElement = document.getElementById(dropdownId);
    selectElement.innerHTML = users.map(user => `<option value="${user.id}">${user.name}</option>`).join('');
}

function populateAccessLevelsDropdown(dropdownId) {
    const selectElement = document.getElementById(dropdownId);
    selectElement.innerHTML = users.map(user => `<option value="${user.id}">${user.name}</option>`).join('');
    selectElement.addEventListener('change', () => {
        const selectedUserId = parseInt(selectElement.value);
        const selectedUser = users.find(user => user.id === selectedUserId);
        document.getElementById('existing-role').value = selectedUser ? selectedUser.role : '';
    });
}

function populateClientDropdown(dropdownId) {
    const clients = [
        { id: 1, name: 'xyz' },
        { id: 2, name: 'abc' },
        { id: 3, name: 'efg' }
    ];
    const selectElement = document.getElementById(dropdownId);
    selectElement.innerHTML = clients.map(client => `<option value="${client.id}">${client.name}</option>`).join('');
}

function createUser(event) {
    event.preventDefault();
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;
    const role = document.getElementById('user-role').value;

    if (name && email && password && role) {
        users.push({
            id: userIDCounter++,
            name,
            email,
            password,
            role
        });

        alert(`User ${name} has been created successfully.`);

        document.getElementById('user-name').value = '';
        document.getElementById('user-email').value = '';
        document.getElementById('user-password').value = '';
        document.getElementById('user-role').value = '';
        populateDropdowns();
    }
}

function updateUser(event) {
    event.preventDefault();
    const userId = parseInt(document.getElementById('update-user-select').value);
    const newName = document.getElementById('update-user-name').value;
    const newEmail = document.getElementById('update-user-email').value;
    const newPassword = document.getElementById('update-user-password').value;

    const user = users.find(user => user.id === userId);
    if (user) {
        user.name = newName;
        user.email = newEmail;
        user.password = newPassword;
        alert(`User ${newName} has been updated successfully.`);
        document.getElementById('update-user-name').value = '';
        document.getElementById('update-user-email').value = '';
        document.getElementById('update-user-password').value = '';
    }
}

function deactivateUser(event) {
    event.preventDefault();
    const userId = parseInt(document.getElementById('deactivate-user-select').value);

    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex > -1) {
        users.splice(userIndex, 1);
        alert('User has been deactivated successfully.');
        populateDropdowns();
    }
}

function createProject(event) {
    event.preventDefault();
    const projectName = document.getElementById('project-name').value;
    const clientName = document.getElementById('client-name').value;
    const projectDescription = document.getElementById('project-description').value;

    alert(`Project '${projectName}' has been created successfully.`);
    document.getElementById('project-name').value = '';
    document.getElementById('client-name').value = '';
    document.getElementById('project-description').value = '';
}

function createClient(event) {
    event.preventDefault();
    const clientName = document.getElementById('client-name').value;
    const clientEmail = document.getElementById('client-email').value;
    const clientDescription = document.getElementById('client-description').value;

    alert(`Client '${clientName}' has been created successfully.`);

    document.getElementById('client-name').value = '';
    document.getElementById('client-email').value = '';
    document.getElementById('client-description').value = '';
}

function assignAccessLevels(event) {
    event.preventDefault();
    const userId = parseInt(document.getElementById('access-user-id').value);
    const existingRole = document.getElementById('existing-role').value;
    const newRole = document.getElementById('new-role').value;

    const user = users.find(user => user.id === userId);
    if (user) {
        user.role = newRole;
        alert(`Role for user ${user.name} has been changed from ${existingRole} to ${newRole}.`);
        document.getElementById('existing-role').value = '';
    }
}

function logout() {
    window.location.href = './login_page.html';
}


document.querySelector('#create-user-form')?.addEventListener('submit', createUser);
document.querySelector('#update-user-form')?.addEventListener('submit', updateUser);
document.querySelector('#deactivate-user-form')?.addEventListener('submit', deactivateUser);
document.querySelector('#create-project-form')?.addEventListener('submit', createProject);
document.querySelector('#create-client-form')?.addEventListener('submit', createClient);
document.querySelector('#assign-access-levels-form')?.addEventListener('submit', assignAccessLevels);
// document.querySelector('#logout')?.addEventListener('click', logout);
