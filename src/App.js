import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/Home Page/Home';
import Navbar from './components/Navbar/Navbar';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signIn' element={<SignIn />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
