const todolist = [  ]
renterhtml()

function renterhtml() {


    let todoHTML = '';

    for (let i = 0; i < todolist.length; i++) {
        const value = todolist[i]
        const { name, duedate } = value
        const html = `<div>${name}</div>
        <div> ${duedate}</div>
            <button onclick="
            todolist.splice(${i},1);
            renterhtml();
            " class="delete-btn">delete</button>`
        todoHTML += html
    }
    console.log(todoHTML);

    document.querySelector('.to-do-list-container')
        .innerHTML = todoHTML;

}
function Addlist() {
    const inputElement = document.querySelector(".to-do-list-item-input");
    const name = inputElement.value;

    const dudateinput = document.querySelector(".to-do-list-duedate");
    const duedate = dudateinput.value;


    todolist.push({
        name,
        duedate
    });

    inputElement.value = ''

    renterhtml();

}
