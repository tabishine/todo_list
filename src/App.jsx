import { useState } from 'react';
import './App.css';
import {v4 as uuidv4} from "uuid";
import { Modal } from "./Modal";
import Plus from "./plus.png";
import Divider from "./Divider.png";


//button group
const buttons = [{
  type: "active",
  label: "To Do",
}, 
{
  type: "done",
  label: "Done",
},
{
  type: "all",
  label: "Trash", //to do done trash 
},
];

const initialItems = [{
  id: uuidv4(),
  name: "Write Essay",
},{
  id: uuidv4(),
  name: "One Hour CSS Course Online",
},{
  id: uuidv4(),
  name: "Buy One Way Tickets to San Francisco",
},{
  id: uuidv4(),
  name: "Go to Gym",
}, {
  id: uuidv4(),
  name: "Buy Groceries",
},
]; 

function App() { 
  const [isModalOpen, setModalOpen] = useState(false);
  const [items, setItems] = useState(initialItems);
  const[type, setType] = useState("active");
  
  const handleTriggerModal = () => {
    setModalOpen((prevModal) => !prevModal);
  };

  const handleCloseModal = () => {
    setModalOpen(false); 
  };

  const handleAddTodo = (item) => {
    if(!item) return;

    const newItem = {id: uuidv4(), name: item}; 
    setItems((prevItems) => [...prevItems, newItem]);
    handleCloseModal();
  };

  const handleItemChecked = (id) => {
     setItems((prevItems)=> prevItems.map((item)=> {
      if(item.id === id){
        return {...item, isDone:!item.isDone}
      } else return  item;
     }));
  } ;

  const handleChangeStatus = (typeFromButton) => {
    setType(typeFromButton);
  };

 

  const filteredItems = 
  type === "active"
     ? items
     : type === "done"
     ? items.filter((item) => item.isDone)
     : !items.filter((item) => !item.isDone);

  return (
    <div className="App"
    style ={{position: "relative", height: "100vh", width: "100vw"}}>
      {isModalOpen && (
      <Modal
       handleCloseModal = {handleCloseModal}
       handleAddTodo = {handleAddTodo}
      />
      )} 
      <h1>Simple To Do List</h1>
      <img src = {Plus} onClick ={handleTriggerModal} style = {{  
      width: "52px",
      height: "52px",
      top: "100px",
      left: "1308px",
      borderRadius:"100px",
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "14px",
      gap: "8px",
      }}/> 

      {/* Item-status-filter */}
      <div className="button-group">
        {buttons.map((itemB) => (
          <button
          key = {itemB.type}
          type = "button"
          className= {`btn btn${itemB.type === type ? "" : "-outline"}-info`}
          onClick = {() => handleChangeStatus(itemB.type)}
          > 
          {itemB.label}
          </button>
        ))}
      </div>
      <div className="to-do"> 
      Done
      <img src = {Divider} style = {{
        width: "1280px",
        height: "2px",
        top: "10px",
        opacity: "20%",
       }}/>
       
      <ul className="items">
        {filteredItems.map((item) => (
        <li 
        key = {item.id} 
        style = {{textDecoration: item.isDone?"line-through" : "" }}
        onClick = {() => handleItemChecked(item.id)}>
          {item.name} 
         
        </li>
        ))}

       </ul>
       
       </div>
       <button style={{

       }}> Move to Trash </button>
       
    </div>
  );
} 

export default App;
