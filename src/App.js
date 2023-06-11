import "./App.css";
import ConditionalRendering from "./components/ConditionalRendering";
import Counter from "./components/Counter";
import DarkMode from "./components/DarkMode";
import Form from "./components/Form";
import Timer from "./components/Timer";
import MessageContainer from "./components/MessageContainer";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Form></Form>
      <Timer></Timer>
      <ConditionalRendering></ConditionalRendering>
      <DarkMode></DarkMode>
      <MessageContainer></MessageContainer>
    </div>
  );
}

export default App;
