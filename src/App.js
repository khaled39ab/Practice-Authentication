import { Route, Routes } from 'react-router';
import Footer from './components/Footer/Footer';
import Home from './components/Home Page/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import './App.css';
import Gift from './components/Gift/Gift';
import RequireAuth from './route/RequireAuth';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/gift' element={<RequireAuth>
          <Gift />
        </RequireAuth>}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/signIn' element={<SignIn />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
