import Navbar from './Navbar';
import Header from './Header';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import Particles from "react-particles-js";

function App() {
  return (
    <>
    <Particles
    params={{
      particles:{
        number:{
          value: 30,
          density: {
            enable: true,
            value_area: 900
          }
        },
        shape: {
          type: "circle",
          stroke: {
            width: 6,
            color: "f9ab00"
          }
        }
      }
    }}
    />
    <Navbar />
    <Header />
    </>
  );
}

export default App;