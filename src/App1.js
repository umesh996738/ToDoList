import React, { useState } from "react";

const App1 = () =>{
    const purple = "#953553";
    const [bg , setBg] = useState(purple);
    const[name1 , setName]= useState('click me');

    const bgChange = () =>{
        let newBg = "";
        setBg(newBg);
        setName('ooch!!');

    };

    const bgBack = () =>{
        setBg(purple);
        setName('google');

    };


    return(
        <>
            <div style={{background : bg}}>

            <h1>google</h1>
            <button onMouseEnter={ bgChange } onMouseLeave = { bgBack }>{name1}</button>

            </div>

        </>


    );

}

export default App1