import logo from './logo.svg';
import './App.css';
import ListPost from "./component/ListPost";
import {Route, Routes} from "react-router-dom";
import CreatePost from "./component/CreatePost";
import EditPost from "./component/EditPost";

function App() {
  return (
    <div >
        <Routes>
            <Route path='/' element={<ListPost/>}/>
            <Route path='/create' element={<CreatePost/>}/>
            <Route path='/edit/:id' element={<EditPost/>}/>
        </Routes>

    </div>
  );
}

export default App;
