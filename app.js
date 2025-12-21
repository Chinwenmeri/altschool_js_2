const enterTodo = document.getElementById('enter-todo')
const todoEntry =document.getElementById('todo-Entry').value

// console.log(todoEntry)

const getTodo = function(){
    console.log(todoEntry)
}

enterTodo.addEventListener('click', getTodo)