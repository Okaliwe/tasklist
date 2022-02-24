const form=document.querySelector('#task-form')
const tasklist=document.querySelector('.collection')
const clearBtn=document.querySelector('.clear-tasks')
const filter=document.querySelector('#filter')
const taskInput=document.querySelector('#task')

loadEventListeners();
function loadEventListeners(){
    form.addEventListener('submit',addTask)
//clear task event
clearBtn.addEventListener('click',clearTasks);
//filter tasks event
filter.addEventListener('keyup',filterTask);
//Dom load event
document.addEventListener('DOMContentLoaded',getTasks)
}
//Get tasks from ls
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
        const li= document.createElement('li')
li.className='collection-item';
li.appendChild(document.createTextNode(task.value))
const link=document.createElement('a')
link.className='delete-item secondary-content';
link.innerHTML='<i class="fa fa-remove"></i>'
li.appendChild(link)
    })
}

function addTask(e){
if(taskInput.value===''){
    alert('Add a task')
}
const li= document.createElement('li')
li.className='collection-item';
li.appendChild(document.createTextNode(taskInput.value))
const link=document.createElement('a')
link.className='delete-item secondary-content';
link.innerHTML='<i class="fa fa-remove"></i>'
li.appendChild(link)

//store in ls
storeTaskInLocalStorage(taskInput.value);

tasklist.appendChild(li)
//clear input
taskInput.value='';


    e.preventDefault()
}

//store Task
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks))
}
function clearTasks(){
    tasklist.innerHtml='';
}
//filter Tasks
function filterTask(e){
    const text=e.target.value.toLowerCase()
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item=task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text)!=-1){
           task.style.display='block'
        }else{
            task.style.display='none'
        }
    });
}

const jy=[6,8,9,0]
jy.forEach(function(e){
    console.log(`${e}`)

})

