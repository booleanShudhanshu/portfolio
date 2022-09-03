import { useState } from "react";
import About from "./components/about";
import Header from "./components/header";
import Home from "./components/home";
function App() {
  const [type, setType] = useState("Home")
  const activeComponent = (type) => {
    switch (type) {
      case "Home":
        return <Home />
      case "About":
        return <About />

      default:
        break;
    }
  }
  return (
    <div className="container-fluid gx-0" style={{ height: "100vh" }}>
      <Header setType={setType} type={type} />
      <div className="row mx-3">
        <div className="col-md-4 px-0">
          <img className="img-fluid vh-100" src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" alt="shudhanshu's image" />
        </div>
        <div className="col-md-8 ps-2">
          {activeComponent(type)}
        </div>
      </div>

    </div >
  );
}

export default App;
