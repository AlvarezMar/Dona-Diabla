import './App.css'
import Home from './views/Home'
import MyAppointments from './views/MyAppointments';
import Contact from './views/Contact';
import Register from './views/Register';
import Login from './views/Login';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import UnderConstruction from './views/UnderConstruction';
import Profile from './views/Profile';
import NewAppointment from './components/NewAppointment';
import Data from './components/Data';

function App() {

  return <div>
    
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/myAppointments' element={<MyAppointments/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/underConstruction' element={<UnderConstruction/>}/>

      <Route path='/profile' element={<Profile/>}>
        <Route path='myData' element={<Data/>}/>
        <Route path='newAppointment' element={<NewAppointment/>}/>
      </Route>
      
    </Routes>

  </div>

}

export default App
