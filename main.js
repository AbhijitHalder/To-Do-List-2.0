// variable to refer list, input field and submit button
let ul = document.getElementById('taskList');
let input = document.getElementById('taskDescr');
let submit = document.getElementById('addTask');

// let tasks
//
// if (localStorage.getItem('tasks')) {
//     tasks = JSON.parse(localStorage.getItem('tasks'))
// } else {
//     tasks = []
// }
//
// localStorage.setItem('tasks', JSON.stringify(tasks))
// let stored = JSON.parse(localStorage.getItem('tasks'))
//
// stored.forEach((task) => {
//     createList(task)
//
// })


// event handler to submit task
submit.addEventListener('click', createTask)

// function to submit task
function createTask(e) {
    e.preventDefault(); //prevents page from refreshing

    // tasks.push(input.value)
    // localStorage.setItem('tasks', JSON.stringify(tasks))

    // creates list item if input is not empty
    if (input.value === "") {
        alert("That is not very productive !");
    } else {
        createList(input.value)
    }

    // clears the input field upon submitting a list item
    input.value = '';


}

// function to delete list item
function deleteTask() {
    let delTask = this.parentElement; //refers to the parent element of cross sign
    delTask.remove();
}

// function to mark list items as checked
function checkTask() {
    let boxStatus = document.getElementsByClassName('checkBox');
    let ckTask = this.parentElement //refers to the parent element of checkbox

    // condition to switch list item appearance upon checkbox input
    if (!boxStatus.checked) {
        ckTask.classList.toggle('checked')
        ul.appendChild(ckTask) //takes list item to bottom of the list
    } else {
        ckTask.classList.toggle('checked')
    }

    // do {
    //     ckTask.classList.toggle('checked')
    //     ul.appendChild(ckTask) //takes list item to bottom of the list
    // } while (boxStatus.checked)
}

function createList(inputValue) {
    // creates items for the list
    let li = document.createElement('li')

    // creates a checkbox
    let checkBox = document.createElement("input");
    checkBox.className = "checkBox";
    checkBox.type = "checkBox";

    // creates a cross sign within a span
    let delTaskBtn = document.createElement("span")
    delTaskBtn.className = "delTask";
    let delSign = document.createTextNode("\u00D7");
    delTaskBtn.appendChild(delSign);

    // changes list items' text content to submitted input
    li.textContent = inputValue;

    // append checkbox and cross button to every list item
    li.appendChild(checkBox);
    li.appendChild(delTaskBtn);
    ul.prepend(li);

    // event handler to delete list item
    delTaskBtn.addEventListener('click', deleteTask)

    // event handler to mark list items as checked
    checkBox.addEventListener('change', checkTask)
}







