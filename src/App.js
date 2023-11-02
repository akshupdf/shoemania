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
      <Route  path='/' element={<Home />} />
      <Route  path='/nike' element={<Nike />} /> 
      <Route  path='/vans' element={<Vans />} /> 
      <Route  path='/adidas' element={<Adidas />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
