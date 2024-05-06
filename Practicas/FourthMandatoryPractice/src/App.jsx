import { useState } from 'react'
import './App.css'
import List from './assets/components/List'
import TaskForm from './assets/components/TaskForm'

function App() {

  const [toDoList, setToDoList] = useState([])

  return (
    <div className='w-full h-screen bg-slate-50 flex justify-center gap-10'>
      <TaskForm toDoList={toDoList} setToDoList={setToDoList}/>
      <List toDoList={toDoList} setToDoList={setToDoList}/>
    </div>
  )
}

export default App
