import React,{useEffect, useState} from 'react'


const Task =({title,descp,index,deleteTask })=>{
    return(
        <div className='taskDiv'>
           <div>
               <p>{title}</p>
               <span>{descp}</span>
           </div> 
            <button className='delete-btn' onClick={()=> deleteTask(index)}>-</button>
        </div>
    )
}

const Tasks = () => {
    const initialArray=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
  const [tasks, setTasks] = useState(initialArray);
    const [title, setTitle] = useState("");
    const [descp, setDescp] = useState("");
    console.log(title,descp)
    const submitHandler =(e)=>{
        e.preventDefault();
        setTasks([...tasks,{
            title:title,
            descp:descp,
        }])
        setTitle("");
        setDescp("");
     }
    const deleteTask =(index)=>{
        const filterdarra = tasks.filter((val,i)=>{
            return i !==index;
        })
        setTasks(filterdarra);
    };
    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks))
    },[tasks]);
  return (
    <>
      <div className='main-container'>
        <form onSubmit={submitHandler}>
            <h2>ADD Daily Tasks</h2>
            <input type="text" placeholder='Enter Title' className='stleinpt' 
             value={title}
             onChange={(e)=>setTitle( e.target.value)
             } />
            <textarea placeholder='Enter Descp'
             className='stleinpt'
             value={descp}
             onChange={(e)=>setDescp( e.target.value)}
            ></textarea>
            <button type='submit' className='stleinpt'>Add</button>
           {tasks.map((item,index)=>
           (
            <Task key={index} title={item.title} descp={item.descp} deleteTask={deleteTask} index={index}/>
           ))}
        </form>
        
    </div>
    </>
  )
}

export default Tasks
