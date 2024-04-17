import {useState} from "react";
export default function TodoList(){
    let [todos,settodos]=useState(["sampletask"])
    let [newTodo,setnewTodo]=useState("");
    let updateNewTodo=(event)=>{
        setnewTodo(event.target.value);
    }
    let Addnewtask=()=>{
        settodos((prevarr)=>{
        return [...prevarr,newTodo]
        })
    }

    return (
        <div>
            <input placeholder="input task" value={newTodo} onChange={updateNewTodo}></input>
            <button onClick={Addnewtask}>Add</button>
            <br></br><br></br>
            <h4>Tasks</h4>
            <ul>
                {
                    todos.map((todo)=>(
                        <li>{todo}</li>
    ))}
            </ul>
        </div>
    )
}