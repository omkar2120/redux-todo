import React, { useState }from 'react'
import "./todo.css"
import { Button, Input } from '@material-ui/core'
import  AddIcon  from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { addTodo , deleteTodo , removeTodo } from '../actions';
import {  useSelector ,useDispatch } from 'react-redux';

const Todo = () => {

    const [inputData, setinputData] = useState("")
    const list = useSelector((state) => state.todoReducers.list);
    const dispatch = useDispatch(); 

    return (
        <div className="main">
            <h1>Add Your List Here</h1>
           <div className="input">
               <Input 
                  style={{}} 
                  type="text" 
                  placeholder="Add Your List Here"
                  value={inputData}
                  onChange={(e) => setinputData(e.target.value)}
               />
               <AddIcon  onClick={() =>dispatch(addTodo(inputData),setinputData('')) } />
               {/* <Button  style={{color:"black", backgroundColor:"white"}}>+</Button> */}
           </div>
              
              <div className="showItem">
                {
                    list.map((elem) => {
                        return (
                        <div className="eachItem" key={elem.id}>
                           <h2 style={{color:"white"}}>{elem.data} </h2>
                              <div className="todo-btn">
                                  <DeleteIcon style={{paddingLeft:"160px", color:"white"}} title="delete-item"  onClick={() =>dispatch(deleteTodo(elem.id)) } />
                              </div>
                        </div>
                        )
                    })
                }

              </div>
              <div className="showItems">
                  <Button className="btn-effect" onClick={() => dispatch(removeTodo())}><span>Check List</span></Button>
              </div>

        </div>
    )
   
}

export default Todo;
