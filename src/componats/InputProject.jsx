import React, { forwardRef } from 'react'

const InputProject = forwardRef(function InputProject({ label, textarea, ...props }, ref) {
    const classes =
    'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

    return (
        <p>
            <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
            {textarea ? <textarea {...props}  className={classes} ref= {ref} /> : <input {...props}  className={classes} ref={ref} />}
        </p>
    )
})

export default InputProject