const deleteBtn = document.querySelector('.delete')
const confirmBtn = document.querySelector('.confirm')
const cancel = document.querySelector('.cancel')
const BoxConfirm =document.querySelector('body')
let todo = document.querySelector('.todo')

const todoList = ["Learn React"]


window.addEventListener("DOMContentLoaded",()=>{
    todo.innerHTML = todoList[0];
})

deleteBtn.addEventListener('click',function(){
    BoxConfirm.classList.add('show')
})

cancel.addEventListener('click',function(){
    BoxConfirm.classList.remove('show')
})

confirmBtn.addEventListener('click',function(){
    todoList.splice(0,1);
    if(todoList.length<1){
        todo.innerHTML="";
    }
    else{
        todo.innerHTML = todoList[0];
    }

    BoxConfirm.classList.remove('show')
   
})

