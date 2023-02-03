import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Loginnuevo from '../pages/Loginautobus';
import Registernuevo from '../pages/Registerautobus';
import Autobus from "../pages/Autobus";

function App() {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Loginnuevo/>}/>
            <Route path='/register' element={<Registernuevo/>}/>
            <Route path="/altaautobus" element={<Autobus/>}/>
        </Routes>
        </BrowserRouter>
     );
}

export default App;