import React ,{useState} from 'react'

export default function TodoForm(props) {
    //state
    const [input, setInput] = useState('');

    const handleChange = e =>{
        setInput(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.addTask({
            id:Math.floor(Math.random()*1000000),
            text:input,
            isComplete: false
        })
        setInput('')
    }

  return <form >
      <h1 className="heading">To-Do List Application</h1>
      <div className="todo-form">
      <input type="text" placeholder='Add a todo' onChange={handleChange} className='todo-input' value={input} name="text"  />
      <button type='submit' className='todo-btn' onClick={handleSubmit}>Add Todo</button>
      </div>
      
  </form>
}
