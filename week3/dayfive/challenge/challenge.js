const tasks = [];

const form = document.getElementById('taskForm');
const input = document.getElementById('taskInput');
const listTasksDiv = document.querySelector('.listTasks');

let taskIdCounter = 0;

// Render all tasks from the tasks array
function renderTasks() {
  listTasksDiv.innerHTML = ''; // Clear current tasks

  tasks.forEach(task => {
    // Create task container
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-item');
    taskDiv.dataset.taskId = task.task_id;

    // Checkbox input
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.done;
    checkbox.id = `task-${task.task_id}`;

    // Label for checkbox
    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.textContent = task.text;
    if (task.done) {
      label.classList.add('task-done');
    }

    // Delete button (X icon from Font Awesome)
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

    // Append elements to taskDiv
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);
    taskDiv.appendChild(deleteBtn);

    // Append taskDiv to the container
    listTasksDiv.appendChild(taskDiv);

    // Event listeners
    checkbox.addEventListener('change', () => doneTask(task.task_id));
    deleteBtn.addEventListener('click', () => deleteTask(task.task_id));
  });
}

// Add task function
function addTask(text) {
  const taskObj = {
    task_id: taskIdCounter++,
    text: text,
    done: false,
  };

  tasks.push(taskObj);
  renderTasks();
}

// Toggle done status and update UI
function doneTask(task_id) {
  const task = tasks.find(t => t.task_id === task_id);
  if (!task) return;

  task.done = !task.done;
  renderTasks();
}

// Delete task and update UI
function deleteTask(task_id) {
  const index = tasks.findIndex(t => t.task_id === task_id);
  if (index === -1) return;

  tasks.splice(index, 1);
  renderTasks();
}

// Form submit handler
form.addEventListener('submit', e => {
  e.preventDefault();
  const taskText = input.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  addTask(taskText);
  input.value = '';
  input.focus();
});
