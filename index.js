document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.js--form');
    const input = document.querySelector('.js--form__input');
    const todosWrapper = document.querySelector('.js--todos-wrapper');

    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    const updateLocalStorage = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const renderTodos = () => {
        todosWrapper.innerHTML = '';
        todos.forEach((todo, index) => {
            const todoItem = document.createElement('li');
            todoItem.classList.add('todo-item');
            if (todo.completed) todoItem.classList.add('todo-item--checked');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.completed;
            checkbox.addEventListener('change', () => {
                todos[index].completed = !todos[index].completed;
                updateLocalStorage();
                renderTodos();
            });

            const description = document.createElement('span');
            description.classList.add('todo-item__description');
            description.textContent = todo.text;

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('todo-item__delete');
            deleteBtn.textContent = 'Видалити';
            deleteBtn.addEventListener('click', () => {
                todos.splice(index, 1);
                updateLocalStorage();
                renderTodos();
            });

            todoItem.appendChild(checkbox);
            todoItem.appendChild(description);
            todoItem.appendChild(deleteBtn);
            todosWrapper.appendChild(todoItem);
        });
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const todoText = input.value.trim();
        if (todoText) {
            todos.push({ text: todoText, completed: false });
            updateLocalStorage();
            renderTodos();
            form.reset();
        }
    });

    renderTodos();
});
