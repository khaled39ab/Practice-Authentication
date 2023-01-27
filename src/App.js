import './App.css';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <h1 style={{color: 'white'}}>Authentication Practice</h1>
      <SignIn />
      <SignUp />
    </div>
  );
}

export default App;
