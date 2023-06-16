import './App.css';
import ProductList from "./component/ProductList";
import {Route, Routes} from "react-router-dom";
import ProductCreate from "./component/ProductCreate";

function App() {
  return (
    <div >
        <Routes>
            <Route path='/' element={<ProductList/>}/>
            <Route path='/create' element={<ProductCreate/>}/>
        </Routes>
    </div>
  );
}

export default App;
