const task = document.querySelector('.task')
const allTask = document.querySelectorAll('.task')
const addBtn = document.querySelector('.add-btn')
const ulList = document.getElementById('ul-list')







function addTask () {
    const newTask = prompt('Wpisz zadanie')
    const ulList = document.getElementById('ul-list')
    const newLi = document.createElement('li')
    const trash = document.createElement('button')
    
    newLi.classList.add('task')
   
    const inputElement = document.createElement('input')
    inputElement.type = 'checkbox'
    inputElement.id = "task-1"
    newLi.appendChild(inputElement)

    const newLabel = document.createElement('label')
    newLabel.setAttribute('for',"task-1" )
    newLabel.innerText = newTask
    newLi.appendChild(newLabel)
    
    trash.setAttribute("id","trash")
    trash.setAttribute("class","trash")
    newLi.appendChild(trash)


    ulList.appendChild(newLi)
    
}

addBtn.addEventListener('click', addTask)




    allTask.forEach((task)=>{
    const trash = task.lastChild

    function removeTasks (){
        task.remove()
    }

    trash.addEventListener('click', removeTasks)
})

