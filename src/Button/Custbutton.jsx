import React from "react";

function Custbutton({value}) {
    return (
        <>
            <button><h4>{value ?? 'Click Me'}</h4></button>
        </>
    )
}

export default Custbutton