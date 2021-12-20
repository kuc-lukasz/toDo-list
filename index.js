const task = document.querySelector('.task')
const allTask = document.querySelectorAll('.task')
const addBtn = document.querySelector('.add-btn')
const ulList = document.getElementById('ul-list')
let trash = document.querySelectorAll('.trash')


function removeTask () {

 allTask.forEach((task)=>{
    let trash = task.lastChild

    function removeTasks (){
        task.remove()
    }

    trash.addEventListener('click', removeTasks)

})
}


   

function addTask () {
    let newTask = prompt('Wpisz zadanie')
    let ulList = document.getElementById('ul-list')
    let newLi = document.createElement('li')
    let trash = document.createElement('button')
    
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
    ulList.insertBefore(newLi, ulList.firstChild)

    trash.addEventListener('click', e => {
        e.stopPropagation()
        let parent = trash.parentElement
        parent.remove()
    })


    
}
addBtn.addEventListener('click', addTask)


