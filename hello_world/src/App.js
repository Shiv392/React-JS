// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js';
import Welcome from './components/Welcome';
import Hello from './components/hello';
import Message from './components/message.js'

function App() {
  return (
    <div className="App">
      <Greet name="bruce" role="software developer">
      <p>this is props children</p>
      </Greet>
    <Greet name="shiv" role="web developer"><button>Action</button></Greet>
    <Greet name="deny" role="whole sale" />
      <Welcome name="bruce" hero="batman"></Welcome>
      <Welcome name="clark" hero="superman"></Welcome>
      <Hello></Hello>
      <Message></Message>
    </div>
  );
}

export default App;
