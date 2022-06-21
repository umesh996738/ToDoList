import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DoList1 from './DoList1';

const DoList = ()=>{
    const [Item , setItem] = useState('');
    const [newItem , setNewItem] = useState([]);

    const inputEvent = (event) =>{
        setItem(event.target.value);
        setNewItem(newItem);


    };
    const onSumit = ()=>{
        setNewItem((oldItem)=>{
            return [...oldItem,Item];
        });
        setItem('');

    };
    
    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <h1>DoList</h1>
                    <br/>
                    <input type ="text" placeholder='Add item ' onChange={inputEvent} value = {Item} />
                    <Button onClick={onSumit}><AddIcon/></Button>
                    <br/>
                    <ol>
                        <li>
                        {Item.map((val,index) => {
                           return < DoList1 
                            key = {index}
                            id = {index}
                            text = {val}
                            
                            />;
                        })
                         };

                        </li>
                    </ol>
                </div>    
            </div>        
        </>
    );

};
export default DoList;
