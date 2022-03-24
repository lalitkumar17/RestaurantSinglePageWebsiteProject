import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { About } from "./container/About/About";
import { Header } from "./container/Header/Header";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
    </div>
  );
}

export default App;
