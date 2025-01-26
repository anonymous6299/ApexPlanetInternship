import { useState, useEffect } from 'react'
import './App.css'


// component imports
import Navbar from "./components/Navbar";
import Task from './components/Task.jsx';
import Tasks from './components/Tasks.jsx';

function App() {
  let initTask;
  if (localStorage.getItem("tasks")===null) {
    initTask = []
  }
  else{
    initTask = JSON.parse(localStorage.getItem("tasks"))
  }

  const addTasks = (e) =>{
    e.preventDefault();
    if (!Title || !Desc) {
      alert("Please add a Title or Description to continue")
    }
    else{
      const task = {
        sno:(tasks.length)+1,
        title:Title,
        desc:Desc
      }
      // console.log(task)
      setTitle("");
      setDesc("");
      setTasks([...tasks,task]);
    }
  }
  const [tasks, setTasks] = useState(initTask);
  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks));
  }, [tasks])
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");

  const removeTask = (sno) =>{
    setTasks(tasks.filter((val)=>{
      if (val.sno !== sno) {
        return val
      }
    }))
  }

  const updateTask = (sno) =>{
    // console.log(`updating ${sno}th task`)
    tasks.filter((val)=>{
      if (val.sno===sno){
        let a = val;
        let newTitle = a.Title;
        let newDesc = a.Desc;
      }
    })
  }
  return (
    <>
      <Navbar />
      <h1 className='text-center my-5'>Tasks Manager</h1>
      <div className='container my-5'>
        <form action="/">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
            <input type="text" autoComplete='off' value={Title} onChange={e => setTitle(e.target.value)} className="form-control" id="exampleFormControlInput1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Desc</label>
            <input type="text" autoComplete='off' value={Desc} onChange={e => setDesc(e.target.value)} className="form-control" id="exampleFormControlInput1" />
          </div>
          <div className=" d-flex justify-content-end my-4">
            <button className="btn btn-primary" onClick={addTasks} >Submit</button>
          </div>
        </form>
      </div>
      <Tasks tasks={tasks} remove={removeTask} updateTask={updateTask}/>
    </>
  )
}

export default App
