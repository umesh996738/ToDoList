import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const DoList1 = (props)=>{
    const [line , setLine] = useState(false);
    const cutIt = ()=>{
        setLine(true);

    };

    return(
        <>
            <div className="todo-style">
                <span onClick = {cutIt}>
                    <DeleteIcon className = "deleteIcon"/>
                </span>
                <li style ={{textDecoration : line ? "line-through" : "none"}}>
                    {props.text}
                </li>
            </div>
        </>

    )
};
export default DoList1;