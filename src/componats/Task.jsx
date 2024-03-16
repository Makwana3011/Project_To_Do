import React from 'react'
import NewTask from './NewTask'


function Task({ clickAddTask, clickDeletTask, allTask = [], }) {



    return (<>
        <main className="h-screen my-8 flex gap-8">
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Task</h2>
            <NewTask clickAddTask={clickAddTask} />
            {allTask.length === 0 ? <p className="text-stone-800 my-4"> This Project does not have task</p> :
                <ul className="p-4 mt-8 rounded-md bg-stone-100">


                    {allTask.map((oneTask) =>


                        <li key={oneTask.id} className="flex justify-between my-4">
                            <span>{oneTask.task}</span>
                            <button className="text-stone-700 hover:text-red-500" onClick={() => clickDeletTask(oneTask.id)}> Clear</button>
                        </li>
                    )}

                </ul>}
        </main>
    </>
    )
}

export default Task