import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import DaisyNav from "./Components/DaisyNav/DaisyNav";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <DaisyNav></DaisyNav>
      <h1 className="text-7xl bg-rose-600">Vite + React</h1>
    </>
  );
}

export default App;
