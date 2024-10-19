// Отримуємо посилання на необхідні елементи
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('TaskButton');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `${taskText} <button class="delete">Delete</button>`;

        taskList.appendChild(li);

        taskInput.value = '';
    }
}

addTaskButton.addEventListener('click', addTask);

taskList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete')) {
        const li = event.target.parentElement;
        taskList.removeChild(li);
    }
});

