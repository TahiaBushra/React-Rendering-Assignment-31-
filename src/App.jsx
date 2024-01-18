import Greeter from "./components/Greeter";
import Greetings from "./components/Greetings";

const App = () => {
  const fullName = "Arnob";
  const message = "Assalamualaikum";
  return (
    <div>
      <Greeter fName={fullName} msg={message}>
        <p>I'm a child prop! </p>
      </Greeter>
      {/* <Greetings /> */}
    </div>
  );
};
export default App;
