import './App.css';
import PostList from './component/PostList';
import {Route, Routes} from "react-router-dom";
import ListPost from "./component/PostList";
import React from "react";
import CreatePost from "./component/CreatePost";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<ListPost/>}/>
                <Route path={'/create'} element={<CreatePost/>}/>
            </Routes>
        </div>
    );
}

export default App;