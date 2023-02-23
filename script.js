const toDoForm = document.getElementById('to-do-form');
const toDoInput = document.getElementById('to-do-input');
const toDoList = document.getElementById('to-do-list');

let toDos = [];

function renderToDos() {
  toDoList.innerHTML = '';

  for (let i = 0; i < toDos.length; i++) {
    const toDo = toDos[i];

    const li = document.createElement('li');
    const span = document.createElement('span');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = toDo.completed;
    checkbox.addEventListener('click', () => toggleToDoAtIndex(i));

    const text = document.createTextNode(toDo.text);

    span.innerHTML = '&times;';
    span.addEventListener('click', () => deleteToDoAtIndex(i));

    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(span);

    if (toDo.completed) {
      li.classList.add('completed');
    }

    toDoList.appendChild(li);
  }
}

function addToDo() {
	const text = toDoInput.value.trim();

	if (text.length > 0) {
		toDos.push({
			text,
			completed: false,
		});

		renderToDos();

		toDoInput.value = '';
	}
}

function deleteToDoAtIndex(index) {
	toDos.splice(index, 1);

	renderToDos();
}

function toggleToDoAtIndex(index) {
	toDos[index].completed = !toDos[index].completed;

	renderToDos();
}

toDoForm.addEventListener('submit', event => {
	event.preventDefault();

	addToDo();
});
