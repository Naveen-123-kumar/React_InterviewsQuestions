import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Day2/RoutingEmplementation/Home';
import Student from './Day2/RoutingEmplementation/Student';
import Contact from './Day2/RoutingEmplementation/Contact';
import './App.css';
import Routing from './Day2/RoutingEmplementation/Routing';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routing/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/student' element={<Student/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
