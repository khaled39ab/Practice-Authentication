import { Route, Routes } from 'react-router';
import Footer from './components/Footer/Footer';
import Home from './components/Home Page/Home';
import Navbar from './components/Navbar/Navbar';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signIn' element={<SignIn />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
