import React, { useState } from "react";

const Increment = ()=>{

    const [num, setNum] =  useState(0);
    const Incre =()=>{
        setNum(num+1);

    };
    const Decre = ()=>{
        if(num > 0){
            setNum(num-1);
        }else{
            alert('sorry,number are reache zero');
            setNum(0);
        }


    };
    

    


    return (
        <>
            <div className="main_div">
                <div className="center_div1">
                <h1>{num}</h1>
                <div className="btn_div">
                    <button onClick={Incre}>Incre</button>
                    <button onClick={Decre}>Dcre</button>
                </div>

                </div>
            </div>
        </>

    );
};
export default Increment;