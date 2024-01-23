import { useState,  useEffect } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [state, setState] = useState("Tope")
  const [count, setCount] = useState(0)

useEffect(() => {
  console.log("first");
}, [count]);

  const increament = () => {
    setCount (prev =>{
      return prev + 1
    })
  }

  const decreament = () => {
    setCount(prev => prev ===0 ? 0 : prev - 1)
  }
  return (
      <div className="flex items-center flex-col justify-center">
          <NavBar/>
          <div className="flex mt-20 items-center justify-center  gap-5 text-3xl text-white bg-black">
            <p>{state}</p>
            <button onClick={decreament}>-</button>
            <p className=" text-5xl bg-white text-black p-1 size-16 text-center rounded">{count}</p>
            <button onClick={increament}>+</button>
          </div>
      </div>
        );
}

export default App;
