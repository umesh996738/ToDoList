import React, { useState } from "react";
import ToDoList1 from "./ToDoList1";

const ToDoList = () =>{
    const [toDO , setToDo] = useState('');
    const [Item , setItem] = useState([]);

    const inputEvent =  (event) =>{
        
        setToDo(event.target.value);
        setItem(Item);

    }; 
    const listofItems = () =>{
        setItem( (oldItem)=>{
            return[...oldItem,toDO];

        }

        );
        setToDo('');
    };

    
    const deleteItem = (id)=>{

        setItem((oldItem)=>{

            return oldItem.filter((arrElem , index) => {

                return index !== id
            });
            
        });

        
    };
    

    



    return(
        <>
        <div className="main_div">
            <div className="center_div">

                    <h1>ToDoList</h1>
                    <br/>
                    <input type = 'text' placeholder="Add item in List" onChange={inputEvent} value ={toDO} />
                    
                    <button onClick={listofItems} >+</button>
                    <br/>
                    <ol>
                        {/* <li>{toDO}</li> */}
                        {Item.map((itemval,index) => {
                           return < ToDoList1 
                            key = {index}
                            id = {index}
                            text = {itemval}
                            onSelect = {deleteItem}
                            />

                        })}

                    </ol>
                </div>    
        </div>    
        </>
    ); 
}
export default ToDoList;