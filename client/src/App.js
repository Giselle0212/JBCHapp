// import logo from './logo.svg';
import './App.css';
import {Routes,Route, Navigate} from 'react-router-dom'
import Home from './components/Home';
import RegForm from './components/RegForm';
import Main from './components/Main'
import BautismForm from './components/BautismForm';
import Counselling from './components/counsellingForm';
import Map from './components/Map';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      
      <Routes>
        {/*  Home */}
        <Route path='/home' element={<Home/>}/>
        {/* Registration Form */}
        <Route path='/form' element={<RegForm/>}/>
        {/* Bautism Form */}
        <Route path='/bautism' element={<BautismForm/>}/>
        {/* Conseling Form */}
        <Route path='/counselling' element={<Counselling/>}/>
        {/*  Map Route */}
        <Route path='/map' element={<Map/>}/>
        {/* Update */}
        <Route path='/attendees/:id/edit' element={<Update/>}/>
        {/* Main */}
        <Route path='/main' element={<Main/>}/>
        {/* REdirect */}
        <Route path='*' element={<Navigate to="/home" replace/>} />
      </Routes>
    </div>
  );
}

export default App;
