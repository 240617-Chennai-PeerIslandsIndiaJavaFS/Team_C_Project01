$(document).ready(function() {
  
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

   
    tasks.forEach(function(task) {
        var phaseId = getPhaseIdFromStatus(task.status);
        if (phaseId !== null) {
            var phaseList = $('#' + phaseId);
            var newTaskId = phaseList.find('.task-item').length + 1; 
            var newTaskItem = $('<li class="list-group-item task-item draggable" data-task-id="' + newTaskId + '"><span class="task-name">' + task.name + '</span></li>');
            newTaskItem.append('<div class="task-card"><p>' + task.description + '</p></div>');

          
            phaseList.find('.add-task-link').before(newTaskItem);

        
            newTaskItem.draggable({
                revert: true,
                helper: 'clone'
            });
        }
    });

    $('.droppable').sortable({
        connectWith: '.connectedSortable',
        update: function(event, ui) {
            var taskId = ui.item.attr('data-task-id');
            var newPhaseId = $(this).attr('id');
            var newStatus = getStatusFromPhaseId(newPhaseId);

        
            var taskToUpdate = tasks.find(function(task) {
                return task.id === parseInt(taskId);
            });
            taskToUpdate.status = newStatus;

        
            console.log('Task moved to ' + newStatus);
        }
    });

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

    
    $(document).on('click', '.task-item', function() {
        var taskName = $(this).find('.task-name').text().trim();
        var taskId = $(this).attr('data-task-id');


        var taskDetails = tasks.find(function(task) {
            return task.id === parseInt(taskId);
        });

       
        $('#taskTitle').val(taskName);
        $('#taskDescription').val(taskDetails.description);
        $('#taskStartDate').val(taskDetails.startDate);
        $('#taskDueDate').val(taskDetails.dueDate);
        $('#taskStatus').val(taskDetails.status);

        
        $('#taskDetailsModal').modal('show');
    });

 
    $('#editTaskBtn').click(function() {
        $('#taskTitle').removeAttr('readonly');
        $('#taskDescription').removeAttr('readonly');
        $('#taskStartDate').removeAttr('readonly');
        $('#taskDueDate').removeAttr('readonly');
        $('#taskStatus').removeAttr('readonly');
    });


    $('.add-task-link').click(function() {
        $(this).hide();
        $(this).siblings('.add-task-form').show();
    });

    $('.add-task-btn').click(function() {
        var phaseList = $(this).closest('.droppable');
        var phaseId = phaseList.attr('id');
        var newTaskName = phaseList.find('.task-name-input').val();

        var newTaskId = phaseList.find('.task-item').length + 1;
        var newTaskItem = $('<li class="list-group-item task-item draggable" data-task-id="' + newTaskId + '"><span class="task-name">' + newTaskName + '</span></li>');
        newTaskItem.append('<div class="task-card"><p>Description for ' + newTaskName + '.</p></div>');

       
        phaseList.find('.add-task-form').before(newTaskItem);

     
        newTaskItem.draggable({
            revert: true,
            helper: 'clone'
        });

        phaseList.find('.task-name-input').val('');
        phaseList.find('.add-task-form').hide();
        phaseList.find('.add-task-link').show();
    });
});