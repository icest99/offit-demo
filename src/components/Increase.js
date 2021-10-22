const { useState } = React;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      {
        // if else statement to determine color of the counter
      }
      <h1 className={count > 0 ? "positive" : count < 0 ? "negative" : null}>
        {count}
      </h1>
      <div className="button__wrapper">
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));