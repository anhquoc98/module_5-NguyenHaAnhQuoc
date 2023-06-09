import logo from './logo.svg';
import './App.css';
import PostsList from "./component/PostsList";
import {Route, Routes} from "react-router-dom";
import PostsCreate from "./component/PostsCreate";
import PostsEdit from "./component/PostsEdit";
import PostsDetail from "./component/PostsDetail";

function App() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<PostsList/>}/>
            <Route path='/create' element={<PostsCreate/>}/>
            <Route path='/edit/:id' element={<PostsEdit/>}/>
            <Route path='/detail/:id' element={<PostsDetail/>}/>
        </Routes>

    </div>
  );
}

export default App;
