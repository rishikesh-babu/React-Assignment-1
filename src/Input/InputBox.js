import React from "react"

function Inputbox({ label, type, placeholder }) {
    return (
        <div className="inputbox">
            <label htmlFor="">{label}</label>
            <input type={type} placeholder={placeholder} />
        </div>
    )
}

export default Inputbox