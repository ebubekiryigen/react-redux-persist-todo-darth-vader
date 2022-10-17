import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from "../store/action/todoAction"
import './css/Input.css'

const Input = ()=> {

     const [text,setText] = useState('')
     const dispatch = useDispatch()
    return(
      <div className="input-wrapper">
         <input 
         value={text}
         onKeyPress={(e)=>{
          if(e.key==="Enter" && text.trim()!=="") {
            dispatch(addTodo({id:new Date().getTime(),text,complete:false}))
            setText('')
          }
         }}
         onChange={(e)=>setText(e.target.value)}
         placeholder="Create new todo"
         />
      </div>
    )
}

export default Input