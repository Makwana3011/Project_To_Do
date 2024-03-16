import React from 'react'

function Sidebar({ clickCreat, data, clickSelectProject }) {
    
    let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";


    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
                your Project
            </h2>
            <div>
                <button onClick={clickCreat}>
                    + Add Project
                </button>
            </div>
            <ul>
                {
                    
                    data.map((one) => <li key={one.id}> <button className={cssClasses} onClick={() => clickSelectProject(one.id)}>{one.title}</button> </li>)}

            </ul>
        </aside>
    )
}

export default Sidebar