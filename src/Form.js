import React, { useState } from "react";

const Form = () =>{

    const [name, setName] = useState('');
    const [lastname,setLastname] = useState('');
    const [fullName , setFullName] = useState('');
    const[lastFirstname , setLastFirstName] = useState('');

    const inputEventTwo = (event) =>{
        
        setLastname(event.target.value);

    };
    const inputEvent = (event) =>{
        setName(event.target.value);
    };


    const onSubmit = (event)=>{
        event.preventDefault();
        
        setFullName(name);
        setLastFirstName(lastname);
    };





    return (
        <>
        <div className="main_div">
            <form onSubmit = {onSubmit}>
                <div>
                    <h1>Hello {fullName} {lastFirstname } </h1>
                    <input type = "text" placeholder="Enter your name" onChange={inputEvent} value = {name}/>
                    <br/>
                    <input type = "text" placeholder="Enter your lname" onChange={inputEventTwo} value = {lastname}/>
                    <br/>
            
                    <button >Click Me</button>
                </div>
            </form>
        </div>
        </>




    );
}

export default Form;