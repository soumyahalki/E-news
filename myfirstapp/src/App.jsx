import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Homeclass from "./Classcomponents/Homeclass";
import Greeting from "./Greeting";
import './App.css'

function App() {
  let name = "Soumya";
  let age = 21;
  return(
    <>
      <h1>Hello Everyone</h1>
      <h3>Welcome to react</h3>
      <Home/>
      <Homeclass/>
      <About/>
      <Contact />
      <Greeting fn={name} age={age}/>
    </>
  )
}
export default App;