import logo from './logo.svg';
import './App.css';
import Home from "./component/Home";
import Footer from "./component/Footer";
import Header from "./component/Header";
import {Route, Routes} from "react-router-dom";
import FuramaList from "./component/serviceFurama/FuramaList";
import CreateFurama from "./component/serviceFurama/CreateFurama";

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/listService' element={<FuramaList/>}/>
                <Route path='/createFurama' element={<CreateFurama/>}/>
            </Routes>


        </div>
    );
}

export default App;
