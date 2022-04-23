import Greet from "./1.components/1.function/Greet";
import { Named } from "./1.components/1.function/Named";
import NamedOne from "./1.components/1.function/NamedOne";
import { NamedTwo } from "./1.components/1.function/NamedTwo";
import Welcome from "./1.components/2.class/Welcome";
import { WelcomeOne } from "./1.components/2.class/WelcomeOne";
import LifeCycleA from "./10.life-cycle/LifeCycleA";
import PostApi from "./11.api-calls/PostApi";
import StudentApi from "./11.api-calls/StudentApi";
import TodosApi from "./11.api-calls/TodosApi";
import UserApi from "./11.api-calls/UserApi";
import Routing from "./12.routing/Routing";
import ClassCounter from "./13.hooks/ClassCounter";
import FunctionCounter from "./13.hooks/FunctionCounter";
import Hello from "./2.jsx/Hello";
import Greeting from "./3.props/Greeting";
import GreetingOne from "./3.props/GreetingOne";
import GreetingTwo from "./3.props/GreetingTwo";
import Counter from "./4.state/Counter";
import Message from "./4.state/Message";
import Person from "./4.state/Person";
import ClassClick from "./5.event-handling/ClassClick";
import EventBind from "./5.event-handling/EventBind";
import FunctionClick from "./5.event-handling/FunctionClick";
import Parent from "./5.event-handling/parent-child/Parent";
import UserGreetingFour from "./6.conditional-rendering/UserGreetingFour";
import UserGreetingOne from "./6.conditional-rendering/UserGreetingOne";
import UserGreetingThree from "./6.conditional-rendering/userGreetingThree";
import UserGreetingTwo from "./6.conditional-rendering/UserGreetingTwo";
import NamedListTwo from "./7.list-rendering/NamedListTwo";
import NameList from "./7.list-rendering/NameList";
import NameListFive from "./7.list-rendering/NameListFive";
import NameListFour from "./7.list-rendering/NameListFour";
import NameListOne from "./7.list-rendering/NameListOne";
import NameListThree from "./7.list-rendering/NameListThree";
import AppStyles from "./8.styling/AppStyles";
import Inline from "./8.styling/Inline";
import Stylesheet from "./8.styling/Stylesheet";
import UserForm from "./9.form-data/UserForm";
import UserFormOne from "./9.form-data/UserFormOne";

function App() {
  function getTitle(title) {
    return title
  }
  return (
    <div>
      <FunctionCounter />
      {/* <ClassCounter /> */}
      {/* <Routing /> */}
      {/* <StudentApi /> */}
      {/* <UserApi /> */}
      {/* <TodosApi /> */}
      {/* <PostApi /> */}
      {/* <LifeCycleA /> */}
      {/* <UserFormOne /> */}
      {/* <UserForm /> */}
      {/* <AppStyles /> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary={false}/> */}
      {/* <NameListFive /> */}
      {/* <NameListFour /> */}
      {/* <NameListThree /> */}
      {/* <NamedListTwo /> */}
      {/* <NameListOne /> */}
      {/* <NameList /> */}
      {/* <UserGreetingFour /> */}
      {/* <UserGreetingThree /> */}
      {/* <UserGreetingTwo /> */}
      {/* <UserGreetingOne /> */}
      {/* <Parent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick /> <br />
      <ClassClick /> */}
      {/* <Person /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <GreetingTwo name="Scott Desatnick" skill="Great Boss">
        <GreetingOne name="Uma" skill="Javascript" />
      </GreetingTwo> */}
      {/* <GreetingOne name="Scott Desatnick" skill="Great Boss"/> */}
      {/* <Greeting name="Scott" 
                id={1}
                isAdmin={true}
                address={{ city: 'Boston', country: 'USA' }}
                getTitle={getTitle}
                skillSet={['Great Boss']}
      >
        <strong>This is child component</strong>
      </Greeting>
      <Greeting name="Adam" 
                id={2}
                isAdmin={false}
                address={{ city: 'Sydney', country: 'Australia' }}
                getTitle={getTitle}
                skillSet={['Business Analyst']}
      />
      <Greeting name="Tuan"
                id={3} 
                isAdmin={true}
                address={{ city: 'Hanoi', country: 'Vietnam' }}
                getTitle={getTitle}
                skillSet={['Tech Boss']}
      /> */}
      {/* <Greet />
      <Named />
      <NamedOne />
      <NamedTwo />
      <Welcome />
      <WelcomeOne />
      <Hello /> */}
    </div>
  );
}

export default App;
