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
import StyleSheet from './components/StyleSheet';
import InlineStyle from './components/InlineStyle';
import AppStyle from './appStyle.css';
import styles from './appStyle.module.css';
import Form from './components/Form';
import MultipleInput from './components/multiple_INput.js';
import LifeCycleA from './components/LifeCycleA.js';
import FregmentDemo from './components/FregmentDemo.js';
import Table from './components/Table.js';
import ParentComponent from './components/ParentComponent.js';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRInputParent from './components/FRInputParent';

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
      <StyleSheet  primary={true}></StyleSheet>
      <InlineStyle></InlineStyle>
      <h1 className='error'> this is error</h1>
      <h1 className={styles.success}>this is success</h1>
      <Form></Form>
      <MultipleInput></MultipleInput>
      <LifeCycleA></LifeCycleA>
      <FregmentDemo />
      <Table></Table>
      <ParentComponent></ParentComponent>
      <RefsDemo></RefsDemo>
     
      <FocusInput></FocusInput>
      <FRInputParent></FRInputParent>
    </div>
  );
}

export default App;
