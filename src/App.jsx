import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Content } from "./Content";
import { Home } from "./Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Home />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
