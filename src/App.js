import './App.css';
import Main from './Container/Encode.js';




function App() {
  return (
    <div className="container text-center">
      <header>
        <h1>Base64 Tool</h1>
        <p>Simply Tool to encode and decode base64</p>
      </header>
      <Main />
    </div>
  );
}

export default App;
