import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { About } from "./container/About/About";
import { Header } from "./container/Header/Header";
import { Menu } from "./container/Menu/Menu";
import { OurBelieves } from "./container/OurBelieves/OurBelieves";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
      <Menu />
      <OurBelieves />
    </div>
  );
}

export default App;
