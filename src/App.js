// import Def from "./def";
// import Wed from "./wed";
import Work from "./Work";
import './style.css';
import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  // const [wed, setwed] = useState('Ruslan');
  // const [text, setText] = useState('Hello world');
  return (
    <div>
      <h1>{num}</h1>


      {/* 
      <Wed wed={wed} setWed={setwed} />
      <Def text={text} setText={setText} /> */}
      <Work num={num} setNum={setNum} />
      {/* <h1>Hello World.</h1>
      <script />
      <Wed /> */}
    </div>
  );
}

export default App;
