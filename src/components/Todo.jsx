import React, { useState } from 'react'

const Todo = () => {
    const [name, setName] = useState("");
    const [second, setsecond] = useState([])
    const formSubmit = (e) => {
        e.preventDefault();
        setsecond([...second, name]);
        setName("");
        if (name.length === 0) {
            setsecond([])
        }
    };
    const removeTask = (index) => {
        const newTasks = [...second];
        newTasks.splice(index, 1);
        setsecond(newTasks);
    };
    return (
        <div>
            <form onSubmit={formSubmit} className="pt-5">
                <label>Name</label>
                <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="name"
                    value={name}
                />
                <input type="submit" />
            </form>

            <button onClick={() => removeTask(second)}>remove</button>
            <ol className='d-flex flex-column align-items-center justify-content-center '>
                {second.map((second, index) => (
                    <li key={index}>{second}</li>
                ))}
            </ol>
        </div>
    )
}

export default Todo