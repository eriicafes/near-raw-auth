import logo from './logo.svg';
import './App.css';
import {nearSignIn,nearSignOut} from "./auth"

function App() {
  const signIn = () => {
    nearSignIn()
  }

  const signOut = () => {
    nearSignOut()
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div>
          <button onClick={signIn}>Sign In</button>
          <button onClick={signOut}>Sign Out</button>
        </div>
      </header>
    </div>
  );
}

export default App;
