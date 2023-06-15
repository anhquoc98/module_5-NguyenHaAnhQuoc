import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import ListProduct from "./component/ListProduct";
import CreateProduct from "./component/CreateProduct";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ListProduct/>}/>
        <Route path='/create' element={<CreateProduct/>}/>
      </Routes>
        {/*<ListProduct/>*/}
        {/*<CreateProduct/>*/}
    </div>
  );
}

export default App;
