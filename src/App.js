import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import { ExpGreet } from './components/ExportGreet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import Distructor from './components/Distructor'
import Counter2 from './components/Counter2';
import Parent from './components/Parent';
import FunctionClick from './components/FunctionClick';
import EventClick from './components/EventClick';
import EventBind from './components/EventBind';
import EventBind2 from './components/EventBind2';
import ParentComponent from './components/ParentComponent';
import ParentComp2 from './components/ParentComp2';
import UserGreeting from './components/UserGreeting';
import Map from './components/Map';
import NameList from './components/NameList';
import EmployeeList from './components/EmployeeList';
import FriendList from './components/FriendList';
import Stylesheet from './components/Stylesheet';
import UserStatus from './components/UserStatus';
import Inline from './components/Inline';
import Form from './components/Form';
import UserForm  from './components/UserForm';
import RegistrationForm from './components/RegistrationForm';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import LifecycleC from './components/LifecycleC';
import Hook from './components/Hook';
function App() {
  return (
    <div className="App">
      <Hook/>
      {/* <LifecycleC/> */}
      {/* <Table/>
      <FragmentDemo/>
      <LifecycleA/>
     <RegistrationForm/>
      <Form/>
      <UserForm/>
      <Inline/>
      <UserStatus status = {true}/>
      <Stylesheet/>
      <FriendList/>
      <EmployeeList/>
      <NameList/>
      <Map/>
      <UserGreeting/>
      <ParentComp2/>
      <ParentComponent/>
      <EventBind2/>
      <EventBind/>
      <EventClick/>
      <FunctionClick/>
      <Parent/>
      <Counter2/>
      <Greet name="Ruhul Amin " email="ruhul@gmail.com">
        <p>This is a children props !! ok@ you have to use in a children component the follwing jsx that is  props.children  </p>
      </Greet>
      <Greet name = "Sakib Hasan" email="sakib@gmail.com">
        <button>Button </button>
      </Greet>
      <Greet name="Sajid Hasan" email="sajid@gmail.com" >
       
      </Greet>
      <ExpGreet/>
      <Welcome college="NotreDame College, Dhaka"/>
      <Welcome college="Dhaka College"/>
      <Welcome college="Motijhil Ideal College , Dhaka"/>
      <Hello/>
      <Message  />
      <Counter/>
      <Distructor name= "Ruhul AMin " email="ruhulamin@gmail.com"/> */}
    </div>
  );
}

export default App;
