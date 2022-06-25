import logo from './logo.svg';
import './App.css';
import {nearSignIn,nearSignOut} from "./auth"
import { useCallback, useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true)
  const [count, setCount] = useState(null)

  const signIn = () =>  nearSignIn()

  const signOut = () => nearSignOut()

  const updateCount = useCallback(() => {
    console.log("fetching count from near")
    setLoading(true)
    window.contract.get().then((count) => {
      console.log("fetched count from near")
      setCount(count)
      setLoading(false)
    })
  }, [])

  const increment = async () => {
    setLoading(true)
    const res = await window.contract.increment()
    console.log({res})
    updateCount()
  }

  useEffect(() => {
    console.log("fetching count from near")
    updateCount()
  }, [updateCount])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Count <code>{count === null ? "--" : count}</code>
        </p>
        <a className="App-link" href="/">
          {window.accountId}
        </a>

        <div>
          <button onClick={signIn}>Sign In</button>
          <button onClick={signOut}>Sign Out</button>
          <br />
          <button onClick={increment} disabled={loading}>{loading ? "please wait..." : "Increment"}</button>
        </div>
      </header>
    </div>
  );
}

export default App;
