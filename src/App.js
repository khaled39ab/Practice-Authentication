import './App.css';
import Navbar from './components/Navbar/Navbar';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Navbar />
      <h1 style={{color: 'white', textAlign: 'center'}}>Authentication Practice</h1>
      <SignIn />
      <SignUp />
    </div>
  );
}

export default App;
