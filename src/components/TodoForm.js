import React,{useState,useEffect,useRef} from 'react';

function TodoForm(props) {
    const [input,setInput]=useState(props.edit ? props.edit.value : "");
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus(); //focus on whatever we put as ref.
    })


    //to prevent the reload of page

    const handleChange = (e) =>{
      setInput(e.target.value);
    }

    const handleSubmit = (e) =>{
      e.preventDefault();

      props.onSubmit({
        id: Math.floor(Math.random()*100000),
        text: input
      });
      setInput('');
    };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder ="Add task" 
        value={input} 
        name="text" 
        className="todo-input"
        onChange={handleChange}
        ref = {inputRef}
        />
        <button className="todo-button">Add Task</button>
    </form>
  );
}

export default TodoForm;


//that's all we are done with the form