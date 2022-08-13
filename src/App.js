import logo from './logo.svg';
import './App.css';

function App() {
  //
  return (
    <div className="App">
      <Family name="shamim" pro ="enginner"></Family>
      <Family name="Monir" pro ="student"></Family>
      <Family name = "Latif" pro="teacher"></Family>
    
    </div>
  );

}
/*
 
      <Person name="Sazal Mahmud" profession ="Software enginner"></Person>
      <Person name="Ruhul Amin" profession ="Dove poting" ></Person>
      <Person name="foysal" profession ="acounting" ></Person>
*/
function Person(props){
  return (
  <div className="person">
     <h2>{props.name}</h2>
     <h5>{props.profession}</h5>
  </div>
  );
}
function Family(props){
  return(
    <div className='person'>
      <h1>{props.name}</h1>
      <h4>{props.pro}</h4>

    </div>
  );
}
export default App;
