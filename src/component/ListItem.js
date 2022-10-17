import { useDispatch } from 'react-redux'
import { updateTodo,deleteTodo } from '../store/action/todoAction'
import './css/ListItem.css'


const ListItem =(props)=> {
    const dispatch=useDispatch()
    return(
        <div className='list-item hover:bg-gray-200'>
            <div className={props.className}>
              <input type="checkbox" className='mr-3'
              checked={props.item.complete}
              onChange={()=>{
                dispatch(updateTodo(props.item.id,!props.item.complete))
              }}
              />
              <span>{props.item.text}</span>
            </div>
            {!props.item.complete &&
            <div className='remove-list-item' onClick={()=> {
               dispatch(deleteTodo(props.item.id))
            }}>
                  Sil
            </div>
            }
            
        </div>
    )
}

export default ListItem