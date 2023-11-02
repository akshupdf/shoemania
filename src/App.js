import './App.css';

import { BrowserRouter ,Routes, Route} from "react-router-dom";
import Home from './components/home';
import Nike from './components/nike';
import Vans from './components/vans';
import Adidas from './components/adidas';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="">

<BrowserRouter>
<Navbar />
      <Routes> 
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/nike' element={<Nike />}> </Route>
      <Route exact path='/vans' element={<Vans />}> </Route>
      <Route exact path='/adidas' element={<Adidas />} ></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
