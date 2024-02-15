import {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [thisPort, setThisPort] = useState(0)
  useEffect(() => {
    console.log(`${process.env.REACT_APP_PORT}`)
    setThisPort(process.env.REACT_APP_PORT)
    return () => {
      console.log('a');
    }
  }, [])
  
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
          Learn React 이제 됐나?<br/>
          정말 힘들구먼<br/>
          정말 됐지?<br/>
          123<br/>11111<br/>
          1234567890<br/>
          123
          {thisPort}
        </a>
      </header>
    </div>
  );
}

export default App;
