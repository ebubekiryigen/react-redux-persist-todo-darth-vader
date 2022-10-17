import { useDispatch, useSelector } from "react-redux"
import { setTodoFilter } from "../store/action/todoAction"
import "./css/ListContentFooter.css"

const ListContentFooter =()=>{ 
    const {todoFilter,todoList} = useSelector((state)=>state.todo)
    const dispatch=useDispatch()
    return(
       <div className="content-footer">
           <div className="left-item">{todoList.filter((x)=>!x.complete).length} kaldı</div>
           <div 
           className={`menu-item ${todoFilter==="all" ? 'active':''}`}
           onClick={()=>{
            dispatch(setTodoFilter('all'))
           }}
           >Tümü</div>
           <div 
           className={`menu-item  ${todoFilter==="complete" ? 'active':''}`} 
           onClick={()=>{
            dispatch(setTodoFilter('complete'))
           }}
           >Tamamlanan</div>
       </div>
    )

}

export default ListContentFooter