import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 Counter App </h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
        Decrement
      </button>

      <p>Version 1.0</p>
    </div>
  );
}

export default App;