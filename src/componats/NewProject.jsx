import React, { useRef } from 'react'
import InputProject from './InputProject'
import Model from './Model'

export default function NewProject({ clickSave , clickCancel }) {
    const titleRef = useRef()
    const discRef = useRef()
    const dateRef = useRef()
    const errorRef = useRef()

    function handelSavedata() {
        const titleValue = titleRef.current.value;
        const discValue = discRef.current.value;
        const dateValue = dateRef.current.value;

        if (titleValue.trim() === "" || discValue.trim() === "" || dateValue.trim() === "") {
         

            errorRef.current.open()
            return
        }
      
        const newproject = {
            title: titleValue,
            description: discValue,
            duodate: dateValue
        }
        clickSave(newproject);

    }
    function handelReset() {
        titleRef.current.value = "";
        discRef.current.value = "";
        dateRef.current.value = "";
    }

   

    return (
        <>
            <Model ref={errorRef} >
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">
                    Make sure Enter Valid Value
                </p>

            </Model>
            <div className="w-[35rem] mt-16">
                <menu>
                    <li>
                        <button className="text-stone-800 hover:text-stone-950" onClick={clickCancel}>
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handelReset}>
                            Reset
                        </button>
                    </li>

                    <li>
                        <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handelSavedata}>
                            Save
                        </button>
                    </li>
                </menu>

                <div>
                    <InputProject ref={titleRef} label="Title" placeholder='Enter Project Title' type="text" />
                    <InputProject textarea ref={discRef} label="Description" placeholder='Enter Description Here' />
                    <InputProject label="Due Date" ref={dateRef} placeholder='dd/mm/yyyy' type="date" />
                </div>
            </div>
        </>
    )
}
