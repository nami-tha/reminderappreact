import React,{useState} from 'react' ;
import './Reminder.css';

function Reminder() {
    const [reminder,setReminder] = useState([]);
    const [newreminder,setNewReminder] = useState("")
    const hadleInputChange = (event)=>{
        setNewReminder(event.target.value)
        console.log(setNewReminder)
    }
    const handleAddReminder=()=>{
        if (newreminder.trim()){
            setReminder([...reminder,newreminder])
            setNewReminder("")
        }

    }
    const handleDelete=(index)=>{
        setReminder(reminder.filter((item,itemindex) => itemindex != index))

    }
  return (
    <div className='container'>
      <h1>Reminder App</h1>
      <div className='input-container'>
        <input type='text' value={newreminder} placeholder='Enter a Reminder' onChange={hadleInputChange}>
        </input>
        <button className='add-btn' onClick={handleAddReminder}>Add Reminder</button>
        </div>
        {reminder.length >0 ?
        <ul className='reminder-list'>
            {
                reminder.map((reminder,index)=>(
                    <li key={index}>
                        {reminder}

                        <button onClick={()=>handleDelete(index)} className='delete-btn'>Delete</button>

                    </li>
                ))
            }
        </ul>:
        <p>No reminders found</p>
        }
            
      
    </div>
  )
}

export default Reminder
