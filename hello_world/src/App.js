// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js';
import Welcome from './components/Welcome';
import Hello from './components/hello';
import Message from './components/message.js'
import Counter from './components/counter.js';
import Funtionclick from './components/function_click.js';
import Classclick from './components/class_click';
import EventBind from './components/eventbind.js';
import ParentComp from './components/parentcomp.js';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

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
      <Counter></Counter>
      <Funtionclick></Funtionclick>
      <Classclick></Classclick>
      <EventBind></EventBind>
      <ParentComp></ParentComp>
      <UserGreeting name='shivsoni'></UserGreeting>
      <NameList></NameList>
    </div>
  );
}

export default App;
