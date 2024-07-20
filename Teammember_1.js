document.addEventListener('DOMContentLoaded', function() {
    var tasks = [
        {
            id: 1,
            name: 'Task 1',
            description: 'Description for Task 1.',
            startDate: '2024-07-17',
            dueDate: '2024-07-31',
            status: 'To Do'
        },
        {
            id: 2,
            name: 'Task 2',
            description: 'Description for Task 2.',
            startDate: '2024-07-18',
            dueDate: '2024-08-01',
            status: 'In Progress'
        },
        {
            id: 3,
            name: 'Task 3',
            description: 'Description for Task 3.',
            startDate: '2024-07-19',
            dueDate: '2024-08-02',
            status: 'Development'
        },
        {
            id: 4,
            name: 'Task 4',
            description: 'Description for Task 4.',
            startDate: '2024-07-20',
            dueDate: '2024-08-03',
            status: 'Testing'
        },
        {
            id: 5,
            name: 'Task 5',
            description: 'Description for Task 5.',
            startDate: '2024-07-21',
            dueDate: '2024-08-04',
            status: 'Review'
        },
        {
            id: 6,
            name: 'Task 6',
            description: 'Description for Task 6.',
            startDate: '2024-07-22',
            dueDate: '2024-08-05',
            status: 'Deployment'
        }
    ];

    function initializeTasks() {
        tasks.forEach(function(task) {
            var phaseId = getPhaseIdFromStatus(task.status);
            if (phaseId !== null) {
                var phaseList = document.getElementById(phaseId);
                var newTaskId = phaseList.querySelectorAll('.task-item').length + 1;

                var newTaskItem = document.createElement('li');
                newTaskItem.className = 'list-group-item task-item draggable';
                newTaskItem.setAttribute('data-task-id', newTaskId);
                newTaskItem.innerHTML = '<span class="task-name">' + task.name + '</span>';

                var taskCard = document.createElement('div');
                taskCard.className = 'task-card';
                taskCard.innerHTML = '<p>' + task.description + '</p>';
                newTaskItem.appendChild(taskCard);

                phaseList.querySelector('.add-task-link').before(newTaskItem);

                newTaskItem.setAttribute('draggable', 'true');
                newTaskItem.addEventListener('dragstart', handleDragStart);
                newTaskItem.addEventListener('dragover', handleDragOver);
                newTaskItem.addEventListener('dragenter', handleDragEnter);
                newTaskItem.addEventListener('dragleave', handleDragLeave);
                newTaskItem.addEventListener('drop', handleDrop);
                newTaskItem.addEventListener('dragend', handleDragEnd);
            }
        });
    }

    initializeTasks();

    function handleDragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.getAttribute('data-task-id'));
        event.target.classList.add('dragging');
    }

    function handleDragOver(event) {
        event.preventDefault();
    }

    function handleDragEnter(event) {
        event.preventDefault();
        event.target.classList.add('drag-over');
    }

    function handleDragLeave(event) {
        event.target.classList.remove('drag-over');
    }

    function handleDrop(event) {
        event.preventDefault();
        var taskId = event.dataTransfer.getData('text/plain');
        var newPhaseId = event.currentTarget.parentNode.id;
        var newStatus = getStatusFromPhaseId(newPhaseId);

        var taskToUpdate = tasks.find(function(task) {
            return task.id === parseInt(taskId);
        });
        taskToUpdate.status = newStatus;

        console.log('Task moved to ' + newStatus);

        event.target.classList.remove('drag-over');
        event.currentTarget.appendChild(document.querySelector('[data-task-id="' + taskId + '"]'));
    }

    function handleDragEnd(event) {
        event.target.classList.remove('dragging');
    }

    function getPhaseIdFromStatus(status) {
        switch (status) {
            case 'To Do':
                return 'todo';
            case 'In Progress':
                return 'inprogress';
            case 'Development':
                return 'development';
            case 'Testing':
                return 'testing';
            case 'Review':
                return 'review';
            case 'Deployment':
                return 'deployment';
            default:
                return null;
        }
    }

    function getStatusFromPhaseId(phaseId) {
        switch (phaseId) {
            case 'todo':
                return 'To Do';
            case 'inprogress':
                return 'In Progress';
            case 'development':
                return 'Development';
            case 'testing':
                return 'Testing';
            case 'review':
                return 'Review';
            case 'deployment':
                return 'Deployment';
            default:
                return null;
        }
    }

    document.querySelectorAll('.task-item').forEach(function(taskItem) {
        taskItem.addEventListener('click', function() {
            var taskName = this.querySelector('.task-name').textContent.trim();
            var taskId = this.getAttribute('data-task-id');
            var taskDetails = tasks.find(function(task) {
                return task.id === parseInt(taskId);
            });

            document.getElementById('taskTitle').value = taskName;
            document.getElementById('taskDescription').value = taskDetails.description;
            document.getElementById('taskStartDate').value = taskDetails.startDate;
            document.getElementById('taskDueDate').value = taskDetails.dueDate;
            document.getElementById('taskStatus').value = taskDetails.status;

            $('#taskDetailsModal').modal('show');
        });
    });

    document.getElementById('editTaskBtn').addEventListener('click', function() {
        document.getElementById('taskTitle').removeAttribute('readonly');
        document.getElementById('taskDescription').removeAttribute('readonly');
        document.getElementById('taskStartDate').removeAttribute('readonly');
        document.getElementById('taskDueDate').removeAttribute('readonly');
        document.getElementById('taskStatus').removeAttribute('readonly');
    });

    document.querySelectorAll('.add-task-link').forEach(function(addTaskLink) {
        addTaskLink.addEventListener('click', function() {
            this.style.display = 'none';
            this.nextElementSibling.style.display = 'block';
        });
    });

    document.querySelectorAll('.add-task-btn').forEach(function(addTaskBtn) {
        addTaskBtn.addEventListener('click', function() {
            var phaseList = this.closest('.droppable');
            var phaseId = phaseList.id;
            var newTaskName = phaseList.querySelector('.task-name-input').value;

            var newTaskId = phaseList.querySelectorAll('.task-item').length + 1;

            var newTaskItem = document.createElement('li');
            newTaskItem.className = 'list-group-item task-item draggable';
            newTaskItem.setAttribute('data-task-id', newTaskId);
            newTaskItem.innerHTML = '<span class="task-name">' + newTaskName + '</span>';

            var taskCard = document.createElement('div');
            taskCard.className = 'task-card';
            taskCard.innerHTML = '<p>Description for ' + newTaskName + '.</p>';
            newTaskItem.appendChild(taskCard);

            phaseList.querySelector('.add-task-form').before(newTaskItem);

            newTaskItem.setAttribute('draggable', 'true');
            newTaskItem.addEventListener('dragstart', handleDragStart);
            newTaskItem.addEventListener('dragover', handleDragOver);
            newTaskItem.addEventListener('dragenter', handleDragEnter);
            newTaskItem.addEventListener('dragleave', handleDragLeave);
            newTaskItem.addEventListener('drop', handleDrop);
            newTaskItem.addEventListener('dragend', handleDragEnd);

            phaseList.querySelector('.task-name-input').value = '';
            phaseList.querySelector('.add-task-form').style.display = 'none';
            phaseList.querySelector('.add-task-link').style.display = 'block';
        });
    });

});
