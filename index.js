const addTask = (event) => {
    event.preventDefault();

    const taskInput = document.getElementById('task');
    const taskList = document.getElementById('taskList');

    if (taskInput.value != ''){
        const uniqueId = Math.floor(Math.random() * 101);
        // Add a list item into the unordered list with the value typed
        taskList.innerHTML += `
        <li>
            <input type="checkbox" id="${uniqueId}">
            <label for="${uniqueId}">${taskInput.value.trim()}</label>
            <button class="deleteTask">
                <img src="/assets/icons/cross.png"/>
            </button> 
        </li>
        `

        // Clear the form:
        taskInput.value = '';
    }
    else{
        return;
    }
}

const deleteTask = (event) => {
    const listItemToDelete = event.target.closest('li')
    listItemToDelete.remove();
}

// Add event listener for submitting a task
const button = document.getElementById('submit');
button.addEventListener('click', addTask);

// Add event listener to delete a task
taskList.addEventListener('click', function(event) {
    if (event.target.closest('.deleteTask')) {
        deleteTask(event);
    }
});