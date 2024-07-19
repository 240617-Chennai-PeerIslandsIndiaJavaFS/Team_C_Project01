document.addEventListener('DOMContentLoaded', function() {
    const users = [
        { id: 1, name: 'Alice Johnson' },
        { id: 2, name: 'Bob Smith' },
        { id: 3, name: 'Charlie Brown' }
    ];

    const tasks = [
        {
            userId: 1,
            projectName: 'Project Alpha',
            projectDescription: 'Description of Project Alpha',
            taskName: 'Task 1',
            taskDescription: 'Description of Task 1',
            taskStatus: 'In Progress',
            startDate: '2024-07-01',
            dueDate: '2024-07-10'
        },
        {
            userId: 1,
            projectName: 'Project Beta',
            projectDescription: 'Description of Project Beta',
            taskName: 'Task 2',
            taskDescription: 'Description of Task 2',
            taskStatus: 'To Do',
            startDate: '2024-07-05',
            dueDate: '2024-07-15'
        },
        {
            userId: 2,
            projectName: 'Project Gamma',
            projectDescription: 'Description of Project Gamma',
            taskName: 'Task 3',
            taskDescription: 'Description of Task 3',
            taskStatus: 'Done',
            startDate: '2024-07-03',
            dueDate: '2024-07-12'
        }
    ];

    const userSelect = document.getElementById('userSelect');
    const activityContainer = document.getElementById('activityContainer');

    users.forEach(user => {
        const option = document.createElement('option');
        option.value = user.id;
        option.textContent = user.name;
        userSelect.appendChild(option);
    });

    document.getElementById('trackButton').addEventListener('click', function() {
        const selectedUserId = parseInt(userSelect.value);
        activityContainer.innerHTML = ''; // Clear previous activities

        const userTasks = tasks.filter(task => task.userId === selectedUserId);

        if (userTasks.length === 0) {
            activityContainer.innerHTML = '<p>No activities found for the selected user.</p>';
            return;
        }

        userTasks.forEach(task => {
            const card = document.createElement('div');
            card.classList.add('card');

            const projectName = document.createElement('h3');
            projectName.textContent = task.projectName;
            card.appendChild(projectName);

            const projectDescription = document.createElement('p');
            projectDescription.innerHTML = `<strong>Project Description:</strong> ${task.projectDescription}`;
            card.appendChild(projectDescription);

            const taskName = document.createElement('p');
            taskName.innerHTML = `<strong>Task Name:</strong> ${task.taskName}`;
            card.appendChild(taskName);

            const taskDescription = document.createElement('p');
            taskDescription.innerHTML = `<strong>Task Description:</strong> ${task.taskDescription}`;
            card.appendChild(taskDescription);

            const taskStatus = document.createElement('p');
            taskStatus.innerHTML = `<strong>Task Status:</strong> ${task.taskStatus}`;
            card.appendChild(taskStatus);

            const startDate = document.createElement('p');
            startDate.innerHTML = `<strong>Start Date:</strong> ${task.startDate}`;
            card.appendChild(startDate);

            const dueDate = document.createElement('p');
            dueDate.innerHTML = `<strong>Due Date:</strong> ${task.dueDate}`;
            card.appendChild(dueDate);

            activityContainer.appendChild(card);
        });
    });
});
