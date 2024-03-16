import React, { useRef } from 'react'
import { createPortal } from 'react-dom'
import { useImperativeHandle, forwardRef } from 'react'

const Model = forwardRef(function Model({ children }, ref) {
    const componatRef = useRef()

    useImperativeHandle(ref, () => {
        return {
            open() {
                componatRef.current.showModal()
            }
        }
    })

    return createPortal(
        <dialog ref={componatRef} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <button>Close</button>
            </form>
        </dialog>, document.getElementById("modal-root")
    )
})

export default Model