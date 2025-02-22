import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])

  const handleedit = () => {

  }

  const handledelete = (e,id) => {
    let newtodos =todos.filter(item=>{
      return item.id!==id
    });
    settodos(newtodos)
  }

  const handleadd = () => {
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    settodo("")
    console.log(todos)
  }

  const handlechange = (e) => {
    settodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let i = todos.findIndex(item => {
      return item.id == id;
    })
    let newtodos = [...todos];
    newtodos[i].isCompleted = !newtodos[i].isCompleted;
    settodos(newtodos)
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
              <div key={items.id} className="todo flex justify-between p-1">
                <input name={items.id} onChange={handleCheckbox} type="checkbox" value={items.isCompleted} />
                <div className={items.isCompleted ? "line-through" : ""}>{items.todo}</div>
                <div className="button">
                  <button onClick={handleedit} className='rounded-xl bg-green-200 p-1 mx-2 font-bold ring-1 hover:text-sm'>Edit</button>
                  <button onClick={(e)=>{handledelete(e,items.id)}} className='rounded-xl bg-green-200 p-1 mx-2 font-bold ring-1 hover:text-sm'>Delete</button>
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
