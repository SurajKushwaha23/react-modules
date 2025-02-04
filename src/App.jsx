import "./App.css";
import Card from "./components/card/Card";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-3 gap-4 my-4 px-4">
        <Card
          imageUrl="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          title="How to position your furniture for positivity"
          buttonText="Learn More"
          onButtonClick={() => console.log("Button clicked!")}
        >
          This is the content of the card. You can put any React elements here.
        </Card>
      </div>
    </>
  );
}

export default App;
