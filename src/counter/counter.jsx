import React from "react";


function Counter() {
  
  const [counter, setCounter] = React.useState(0);

  const handleIncrement = (value) => {
    // setCounter(counter + value);
    setCounter( (prev) => {
        return prev + value;
    } )
  }

  const dobuleTheValue = () => {
      setCounter(counter * 2);
  }

  return (
    <div className="App">
                   
      <div>
        <h1>Counter</h1>
        <h2>{counter}</h2>
        
        <div>
            <button onClick={() => handleIncrement(1)}>Increase</button>
            <button onClick={() => handleIncrement(-1)}>Reduce</button>
        </div>
        
        <h3>Counter is {counter % 2 == 0 ? "Even" : "Odd"} </h3>

        <button onClick={() => dobuleTheValue()}>Double</button>
      </div>
      
    </div>
  );
}

export default Counter;
