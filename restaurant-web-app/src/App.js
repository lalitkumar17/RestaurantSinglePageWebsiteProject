import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { About } from "./container/About/About";
import { Header } from "./container/Header/Header";
import { Menu } from "./container/Menu/Menu";

// temporary
import { MenuItem } from "./components/MenuItem/MenuItem";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
      <Menu />
      {/* <MenuItem /> */}
    </div>
  );
}

export default App;
