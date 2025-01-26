import React from 'react'
import Task from './Task.jsx'

function Tasks({ tasks, remove, updateTask }) {
    const Style = {
        marginBottom: "5%",
    }
    const style= {
        width: "18rem",
    }
    return (
        <div className="container d-flex flex-wrap justify-content-between" style={Style}>
            {
                tasks.length === 0 ? <div className="card thisCard" style={style}>
                    <div className="card-body text-center">
                        <h5 className="card-title">No Tasks Added Yet!</h5>
                        <p className="card-text">Submit the form above and start adding your tasks</p>
                    </div>
                </div> : tasks.map((task) => {
                    return <Task remove={remove} key={task.sno} update={updateTask} task={task} tasks={tasks} />
                })
            }
        </div>

    )
}
export default Tasks
