import React from 'react'

function List({toDoList,setToDoList}) {


  return (

       <div className='w-2/5 h-[90%] flex flex-col rounded-b-xl bg-amber-400 mt-10 p-10 overflow-y-scroll rounded-xl' id='task-list'>
      
      {toDoList.length > 0 ? (toDoList.map((task) => (
        
        <div className='w-full mb-3 bg-white p-2 flex'>
        <p className='w-[90%] font-semibold text-slate-600 first-letter:uppercase overflow-hidden' id='task-p'>{task.name}</p>
        <button className='bg-indigo-500 w-16 h-7 mr-2'onClick={() => {

          toDoList.map((tasks) => {
            if(tasks.id === task.id){
              task.name = "* Completada! *"
            }
          })

          setToDoList(toDoList.filter(tasks => tasks.id != -1))

        }}>Hecha</button>
        <button className='bg-rose-500 w-16 h-7' onClick={() => {

          console.log(task.id)
          setToDoList(toDoList.filter(tasks => tasks.id != task.id))

        }}>Borrar</button>
      </div>

      ))
) : (<label htmlFor='task' className='bg-amber-200 w-full text-slate-600 mt-12 p-2 font-semibold text-center'>Establece un objetivo y lo veras aqui</label>)}

      
      </div>


   
  )
}

export default List
