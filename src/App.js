import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPatient from './Components/AddPatient';
import ViewPatient from './Components/ViewPatient';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddPatient/>}/>
        <Route path='/view' element={<ViewPatient/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
