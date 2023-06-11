import "./App.css";
import ConditionalRendering from "./components/ConditionalRendering";
import Counter from "./components/Counter";
import DarkMode from "./components/DarkMode";
import Form from "./components/Form";
import Timer from "./components/Timer";
import MessageContainer from "./components/MessageContainer";
import SortFilter from "./components/SortFiler";
import FormValidation from "./components/FormValidation";
import Ticket from "./components/Ticket";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Form></Form>
      <Timer></Timer>
      <ConditionalRendering></ConditionalRendering>
      <DarkMode></DarkMode>
      <MessageContainer></MessageContainer>
      <SortFilter></SortFilter>
      <FormValidation></FormValidation>
      <Ticket
        title="Sample Title"
        text="A very long text....................................................................................................................................................................................................................................................................................................................................................................................................................."
        writer="John Doe"
        date="2023-06-10"
      ></Ticket>
    </div>
  );
}

export default App;
