import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Landing from './pages/landing';
import { useState } from 'react';
function App() {
  const [user,setuser] = useState([
    {username:"john",
password:123}
])
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login user={user} setuser={setuser} />} > </Route>
      <Route path='/signup' element={<Signup user={user} setuser={setuser} />}></Route>
      <Route path='/landing' element={<Landing/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
