import logo from './logo.svg';
import './App.css';
import ListPosts from "./compontent/ListPosts";
import CreatePosts from "./compontent/CreatePosts";
import {Route, Routes} from "react-router";

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<ListPosts/>}/>
                <Route path='/create' element={<CreatePosts/>}/>
            </Routes>
        </div>
    );
}

export default App;
