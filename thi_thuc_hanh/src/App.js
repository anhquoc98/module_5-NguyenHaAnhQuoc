
import './App.css';
import ListProduct from "./component/ListProduct";
import {Route, Routes} from "react-router-dom";
import {UpdateProduct} from "./component/UpdateProduct";
import CreateProduct from "./component/CreateProduct";

function App() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<ListProduct/>}></Route>
            <Route path='/update' element={<UpdateProduct/>}></Route>
            <Route path='/create' element={<CreateProduct/>}></Route>
        </Routes>

    </div>
  );
}

export default App;
