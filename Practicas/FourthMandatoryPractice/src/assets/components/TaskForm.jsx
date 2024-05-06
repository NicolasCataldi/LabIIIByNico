import React, { useState } from 'react'

function TaskForm({toDoList,setToDoList}) {

const [task,setTask] = useState("")

const handleTask = (e) => {
  e.preventDefault()


  if(task != ""){
    setToDoList([...toDoList,task])
    setTask("")
    document.querySelector("#taskInput").value = ""
  }else{
    alert("Tu meta no puede estar vacia")
  }


}

  return (

      <form className='w-2/5 h-2/4 2xl:h-1/4 bg-red-500 flex flex-col items-center mt-10 rounded-xl' onSubmit={handleTask}>

       <label htmlFor='task' className='bg-red-300 w-3/4 text-slate-600 mt-12 p-2 font-semibold text-center'>Que objetivo vas a cumplir?</label>

       <input type="text" placeholder='Describe tu meta...' className='mt-5 w-4/5 p-2 bg-white text-slate-500' onChange={(e) => setTask({name:e.target.value,id:toDoList.length})} id='taskInput' autoComplete='off'/>
       <input type="submit" className='mt-5 bg-green-500 w-32 h-10' value={"Agregar Tarea"}/>



    </form>

    
  )
}

export default TaskForm
