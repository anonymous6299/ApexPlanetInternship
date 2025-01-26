import React, { useState } from 'react'


function Task(props) {
    const style = {
        width: "18rem",
        marginTop: "15px",
        marginBottom: "5%"
    }
    
    return (

        <div className="card" style={style}>
            <div className="card-body d-flex justify-content-between">
                <div className="d-flex flex-column">
                    <div className="">
                        <h5 className="card-title">{props.task.sno}. {props.task.title}</h5>
                    </div>
                    <p className="card-text ">
                        {props.task.desc}
                    </p>
                </div>
            </div>
            <button type="button" className="btn btn-primary mx-3 my-2" onClick={() => { props.remove(props.task.sno) }}>DELETE</button>
        </div>
    )
}

export default Task
