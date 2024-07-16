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

    const teamMemberSelect = document.getElementById('teamMember');
    const projectSelect = document.getElementById('project');

    teamMembers.forEach(member => {
        const option = document.createElement('option');
        option.value = member.id;
        option.textContent = member.name;
        teamMemberSelect.appendChild(option);
    });

    projects.forEach(project => {
        const option = document.createElement('option');
        option.value = project.id;
        option.textContent = project.name;
        projectSelect.appendChild(option);
    });

    document.getElementById('addTeamMemberForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const selectedMember = teamMemberSelect.options[teamMemberSelect.selectedIndex].text;
        const selectedProject = projectSelect.options[projectSelect.selectedIndex].text;

        console.log(selectedProject+", "+selectedMember);

        if (selectedMember && selectedProject) {
            alert(`Team Member ${selectedMember} has been added to ${selectedProject}!`);
        } else {
            alert('Please select both a team member and a project.');
        }
    });
});
