import logo from './logo.svg';
import './App.css';

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
    </div>
  );
}

export default App;
