import React, { useState } from 'react'

function NewTask({clickAddTask}) {
    const [taskvalue, setTaskvalue] = useState("")
    
    function handelClickAddTask() {
        clickAddTask(taskvalue);
        setTaskvalue("")
    }
    
    return (
        <>
            <div>
                <input type="text" placeholder='Enter Task'  className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                    onChange={(e) => setTaskvalue(e.target.value)}
                    value={taskvalue}
                />
                <button onClick={handelClickAddTask} className="text-stone-700 hover:text-stone-950">
                    Add Task
                </button>
            </div>
        </>
    )
}

export default NewTask