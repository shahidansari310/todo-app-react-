import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  const [finished, setfinished] = useState(true)

  useEffect(() => {
    let todostring = localStorage.getItem("todos");
    if (todostring) {
      let todos = JSON.parse(todostring)
      settodos(todos)
    }

  }, [])


  const Savetolocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const handleedit = (e, id) => {
    let t = todos.filter(i => i.id === id);
    settodo(t[0].todo)
    let newtodos = todos.filter(item => {
      return item.id !== id
    });
    settodos(newtodos)
  }

  const handledelete = (e, id) => {
    let newtodos = todos.filter(item => {
      return item.id !== id
    });
    settodos(newtodos)
  }
  const togglefinish=(e) => {
   setfinished(!finished) 
  }
  

  useEffect(() => {
    Savetolocal()
  }, [todos])

  const handleadd = () => {
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    settodo("")
    console.log(todos)
    Savetolocal()
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
      <div className="container mx-auto my-1 rounded-3xl p-5 bg-teal-200 w-3/4 min-h-[88vh] text-center">
        <div className="addtodo ">
          <h2 className="text-lg font-bold">ADD TO DO</h2>
          <input onChange={handlechange} value={todo} type="text" className='bg-white rounded-xl w-1/2 my-2 p-1' />
          <br/>
          <button onClick={handleadd} disabled={todo.length<3} className='rounded-xl w-1/2 my-2 p-1 bg-green-200  font-bold ring-1 hover:text-sm'> ADD</button>
        </div>
        <div className="check flex justify-start gap-3">
        <input type="checkbox" checked={finished} onChange={togglefinish}/>
        Show Finished To dos 
        </div>
        <hr className='m-4'></hr>

        <h2 className="text-xl font-bold ">Your To Do List</h2>
        <div className="todos">
          {todos.length === 0 && <div>No To Dos to display.</div>}
          {todos.map(items => {
            return (finished || !items.isCompleted) && <div key={items.id} className="todo flex justify-between p-1">
                <div className="flex gap-5">
                  <input name={items.id} onChange={handleCheckbox} type="checkbox" checked={items.isCompleted} />
                  <div className={items.isCompleted ? "line-through" : ""}>{items.todo}</div>
                </div>
                <div className="button">
                  <button onClick={(e) => { handleedit(e, items.id) }} className='rounded-xl bg-green-200 p-1 mx-2 font-bold ring-1 hover:text-sm'>Edit</button>
                  <button onClick={(e) => { handledelete(e, items.id) }} className='rounded-xl bg-green-200 p-1 mx-2 font-bold ring-1 hover:text-sm'>Delete</button>
                </div>
              </div>
            
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
