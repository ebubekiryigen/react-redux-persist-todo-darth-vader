import { useSelector } from 'react-redux';
import './App.css';
import Header from './component/Header';
import Input from './component/Input';
import ListContent from './component/ListContent';

function App() {
  const {todoList,todoFilter} =useSelector((state) => state.todo)
  console.log(todoList)
  return (
    <div className="md:container md:mx-auto">
          <Header>
             <Input/>
             <ListContent>

             </ListContent>
          </Header>
    </div>
  );
}

export default App;
