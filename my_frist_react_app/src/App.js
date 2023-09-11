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
  let obj ={
    name:"Pranita",
    imageUrl:'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize:90
  }
  let bool=false;
  return (
    <div className="App">
           <Person name={"Ram"}/>
           <Mybutton/>
           <Mybutton/>

           <h1>{obj.name}</h1>
           <img 
             className='avatar'
             src={obj.imageUrl}
             style={{
              width:obj.imageSize,
              height:obj.imageSize
             }}
           />

      {
        bool?(<Person name={"ravi"}/>) :( <Mybutton/>)
      }
    </div>
  );
}

export default App;
