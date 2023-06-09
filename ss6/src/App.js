import logo from './logo.svg';
import './App.css';
import ListPosts from "./component/ListPosts";
import {Route, Routes} from "react-router";
import PostsCreate from "./component/PostsCreate";

function App() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<ListPosts/>}/>
            <Route path='/create' element={<PostsCreate/>}/>
        </Routes>

    </div>
  );
}

export default App;
