function init() {
    const addToDobtn = document.getElementById('addToDo');
    const addTaskContainer = document.getElementById('taskContainer');
    const getInputField = document.getElementById('inputTask');
    const getbtnReset = document.getElementById('btnReset');

    //addToDobtn.addEventListener('click', myFunction());
    addToDobtn.addEventListener('click', function() {
        const paragraph = document.createElement('h5');
        paragraph.innerHTML = getInputField.value + '&emsp;' +
            '<a href="#"><i class="bi bi-pencil"></i></a>' + '&emsp;' +
            '<a href="#"><i class="bi bi-trash"></i></a>' + '&emsp;' +
            '<a href="#"><i class="bi bi-credit-card"></i></a>';
        addTaskContainer.appendChild(paragraph);
        getInputField.value = "";

        paragraph.addEventListener('click', function() {
            paragraph.style.textDecoration = "line-through";
        })

        paragraph.addEventListener('dblclick', function() {
            addTaskContainer.removeChild(paragraph);
        })
    });

    getbtnReset.addEventListener('click', function() {
        window.location.reload();
    })
}


window.onload = init;