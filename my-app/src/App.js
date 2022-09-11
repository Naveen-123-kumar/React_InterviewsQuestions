import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Day2/RoutingEmplementation/Home';
import Student from './Day2/RoutingEmplementation/Student';
import Contact from './Day2/RoutingEmplementation/Contact';
import './App.css';
import Routing from './Day2/RoutingEmplementation/Routing';
import { Axios } from './Day3/AxiosCompont/Axios';
import Context from './Day4/ContextApi/Context';
import UseRef from './Day4/UseRef/UseRef';
import Reducermethod from './Day3/ReducerComponent/Reducermethod';
import Memo from './Day3/UseMemoComp/Memo';
import HOCode from './Day5/HOC_SEO/HOCode';
import UseEffect from './Day5/HOC_SEO/UseEffect';
import Useeffect from './Day3/UseEffectComp/Useeffect';
import LifeCycle from './Day4/React_Life_Cycle/LifeCycle';
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routing/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/student' element={<Student/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
      <Axios/> */}
      {/* <Context/> */}
      {/* <UseRef/> */}
      {/* <Reducermethod/> */}
      {/* <Memo/> */}
      {/* <HOCode/> */}
      {/* <UseEffect/> */}
      {/* <Useeffect/> */}
      <LifeCycle newName='Anu'/>
    </div>
  );
}

export default App;
