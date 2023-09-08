import logo from './logo.svg';
import './App.css';
import Mybutton from './Components/Mybutton';

const Person=(props)=>{
   return(
    <>
      Name:{props.name}
     </>
   )
}

function App() {
  let name= "Pranita"
  return (
    <div className="App">
           <Person name={"Ram"}/>
           <Mybutton/>
    </div>
  );
}

export default App;
