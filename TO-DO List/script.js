document.getElementById('add-task').addEventListener('click', function() {
    var taskInput = document.getElementById('new-task');
    var taskValue = taskInput.value.trim();
    if (taskValue !== '') {
        var listItem = document.createElement('li');
        listItem.textContent = taskValue;
        document.getElementById('task-list').appendChild(listItem);
        taskInput.value = '';
    }
});
