import logo from './logo.svg';
import './App.css';

function App() {
  const myFunction=()=>{
    console.log("scrolling")
  }
  return (
    <div style={{height:'2000px',border:'1px solid red'}} onScroll={myFunction}>Hi</div>
  );
}

export default App;
