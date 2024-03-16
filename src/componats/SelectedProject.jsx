import React from 'react'
import Task from './Task'

function SelectedProject({ project, clickDelet, clickAddTask, clickDeletTask, allTask }) {

    const formatedDate = new Date(project.duodate).toLocaleDateString("en-us",
        {
            year: '2-digit',
            day: 'numeric',
            month: 'long'
        }

    )
    const listTask = allTask.filter((oneTask) => oneTask.projectid === project.id)
    return (
        <>
            <div className="w-[35rem] mt-16">
                <header className="pb-4 mb-4 border-b-2 border-stone-300">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold text-stone-600 mb-2">
                            {project.title}
                        </h1>
                        <button className="text-stone-600 hover:text-stone-950" onClick={clickDelet}>
                            Delet
                        </button>
                    </div>
                    <p className="mb-4 text-stone-400">
                        {project.description}
                    </p>
                    <p className="text-stone-600 whitespace-pre-wrap">
                        {formatedDate}
                    </p>
                </header>
                <Task clickDeletTask={clickDeletTask} clickAddTask={clickAddTask} allTask={listTask} />
            </div>
        </>
    )
}

export default SelectedProject