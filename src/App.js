import { Route, RouterProvider, Routes } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home Page/Home';
import Navbar from './components/Navbar/Navbar';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

function App() {
  /* 
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/signIn',
      element: <SignIn />
    },
    {
      path: '/signUp',
      element: <SignUp />
    },
    {
      path: '/home',
      element: <Home />
    }
  ]);
 */
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signIn' element={<SignIn />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
      </Routes>


      {/* <RouterProvider router={router}></RouterProvider> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
