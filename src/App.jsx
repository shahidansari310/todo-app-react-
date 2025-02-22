import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/Footer'

function App() {

  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])

  const handledelete = () => {

  }

  const handleedit = () => {

  }

  const handleadd = () => {
    settodos([...todo, { todo, isCompleted: false }])
    settodo("")
  }

  const handlechange = (e) => {
    settodo(e.target.value)
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-1 border-rounded-xl p-5 bg-red-300 w-1/2 min-h-[85vh] text-center">
        <div className="addtodo ">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input onChange={handlechange} value={todo} type="text" className='bg-white border-rounded-xl w-1/2 my-5' />
          <button onClick={handleadd} className='rounded-xl bg-green-200 p-1 mx-2 font-bold ring-1 hover:text-sm'> Submit</button>
        </div>
        <h2 className="text-xl font-bold ">Your Todo List</h2>
        <div className="todos">
          {todos.map((items, index) => {
            return (
              <div key={index} className="todo flex">
                <div className="text">{items.todo}</div>
                <div className="button">
                  <button onClick={handledelete} className='rounded-xl bg-green-200 p-1 mx-2 font-bold ring-1 hover:text-sm'>Edit</button>
                  <button onClick={handleedit} className='rounded-xl bg-green-200 p-1 mx-2 font-bold ring-1 hover:text-sm'>Delete</button>
                </div>
              </div>
            )
          })}
          </div>
        </div>
      <Footer />
    </>
  )
}

export default App
