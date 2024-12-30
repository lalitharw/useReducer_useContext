import { createContext, useContext, useState } from 'react'
import './App.css'
import { todoContext } from './context/ToDoContext'

import moment from 'moment'

function App() {

  const { toDo, addToDo, deleteToDo, toggleToDo } = useContext(todoContext)

  const [title, setTitle] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const createdAt = moment().format("YYYY-MM-DD HH:mm:ss a")

    addToDo({
      id: Date.now(),
      title: title,
      completed: false,
      createdAt: createdAt
    })

    setTitle("")
  }

  const handleDelete = (id) => {
    deleteToDo(id)
  }

  const handleToggle = (id) => {
    toggleToDo(id)
  }


  return (
    <>
      <div>
        <form action="" method="post" onSubmit={handleSubmit}>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id="" />
          <br />
          <br />
          <button>Submit</button>
        </form>
        {
          toDo.tasks.length > 0 ? (

            toDo.tasks.map((task) => (
              <>
                <p style={{ textDecoration: task.completed ? "line-through" : "none" }} > {task.title}</p >
                <div style={{ display: "flex", gap: "5px" }}>
                  <button onClick={() => handleDelete(task.id)}>Delete</button>
                  <button onClick={() => handleToggle(task.id)}>Mark as {task.completed ? " incomplete" : " complete"}</button>
                </div>
              </>
            ))

          ) : (
            <h1>Task not Available</h1>
          )
        }
      </div >
    </>
  )
}

export default App
