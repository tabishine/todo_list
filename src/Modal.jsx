import { useState } from "react";

export const Modal = ({handleCloseModal, handleAddTodo}) => {
    const [item, setItem] =  useState(" ");
     
    const handleChangeItem = (event) => {
        setItem(event.target.value);
    };

    return (
    <div 
        style = {{
        border: "solid 4px",
        width: "268px",
        height: "234px", 
        position:"absolute", 
        left: "989px", 
        top: "130px",
        background: "lightgrey",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "16px",
        borderRadius:"12px",
        }}
        >

        <h3 className="add-new" style = {{
            width: "236px",
            height: "22px",
            top: "16px",
            left: "16px",
            color: "#151517",
            fontStyle: "bold",
            fontSize: "16px",
            align: "left",
            verticalAlign: "center",
        }}> Add New To Do</h3>

        <div className="item-add-form">
            <input style = {{
                width: "236px",
                height: "120px",
                top: "48px",
                left: "16px",
                borderRadius: "8px",
            }}
            value = {item} 
            placeholder = "Your text"
            onChange = {handleChangeItem}/>
    
         <div 
            style={{
            display: "flex",
            justifyContent:"space-between",
            padding: "1rem",
         }}
         > 

         <button style ={{ 
            width: "76px",
            height: "40px",
            padding: "8px, 24px, 8px, 24px",
            gap: "8px",
            borderRadius: "100px",
            verticalAlign: "center",
            textAlign: "center",
            backgroundColor: "rgba(8, 30, 52, 0.42)",

            }}
         onClick = {() => handleAddTodo(item)} > 
         Add 
         </button>
          </div>
          </div>
          </div>
    );
 };
