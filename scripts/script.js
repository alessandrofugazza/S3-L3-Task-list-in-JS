const addTask = e => {
  e.preventDefault();
  const newTask = e.target.elements[0].value;
  const list = document.querySelector("ul");
  list.innerHTML += `
    <li onclick="taskDone(event)">${newTask} <button class="delete-button" onclick="deleteTask(event)" >delete task</button></li>
    `;
  form = document.querySelector("form");
  form.reset();
};

const taskDone = e => {
  const task = e.target;
  task.classList.toggle("done");
};

const deleteTask = e => {
  e.target.parentNode.remove();
};
