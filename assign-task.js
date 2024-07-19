document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = [
        { id: 1, name: 'Alice Johnson' },
        { id: 2, name: 'Bob Smith' },
        { id: 3, name: 'Charlie Brown' }
    ];

    const projects = [
        { id: 1, name: 'Project Alpha' },
        { id: 2, name: 'Project Beta' },
        { id: 3, name: 'Project Gamma' }
    ];

    const projectSelect = document.getElementById('project');
    const teamMemberSelect = document.getElementById('teamMember');

    projects.forEach(project => {
        const option = document.createElement('option');
        option.value = project.id;
        option.textContent = project.name;
        projectSelect.appendChild(option);
    });

    teamMembers.forEach(member => {
        const option = document.createElement('option');
        option.value = member.id;
        option.textContent = member.name;
        teamMemberSelect.appendChild(option);
    });

    document.getElementById('assignTaskForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const selectedProject = projectSelect.options[projectSelect.selectedIndex].text;
        const selectedMember = teamMemberSelect.options[teamMemberSelect.selectedIndex].text;
        const taskName = document.getElementById('taskName').value.trim();
        const taskDescription = document.getElementById('taskDescription').value.trim();
        const taskStatus = document.getElementById('taskStatus').value;
        const startDate = document.getElementById('startDate').value;
        const dueDate = document.getElementById('dueDate').value;

        if (!taskName || !taskDescription || !startDate || !dueDate) {
            alert('All fields are required!');
            return;
        }

        alert(`Task "${taskName}" has been assigned to ${selectedMember} for ${selectedProject}!`);
    });
});
