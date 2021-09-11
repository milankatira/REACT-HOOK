import React, { useState } from 'react'

const ShortCirEval = () => {
    const [demo, setDemo] = useState("");
    return (
        <div>
            <h1 className="h1style"> {demo ||
                <>
                    <h1>{setDemo("or operator")}</h1>
                    <p>you can do anything</p>
                </>
            } </h1>


            <h1 className="h1style"> {demo && "and operator"} </h1>
        </div>
    )
}

export default ShortCirEval
