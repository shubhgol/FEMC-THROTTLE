import "./styles.css";

const throttle = (func, limit) => {
  let lastRun;
  let lastTimerId;
  return function () {
    let context = this;
    let arg = arguments;
    if (!lastRun) {
      func.apply(context, arg);
      lastRun = Date.now();
    } else {
      clearTimeout(lastTimerId);
      lastTimerId = setTimeout(() => {
        if (Date.now() - lastRun >= limit) {
          func.apply(context, arg);
          lastRun = Date.now();
        }
      }, limit - (Date.now() - lastRun));
    }
  };
};
export default function App() {
  const clickHandler = () => {
    console.log(">>>>>>>clicking", new Date().toUTCString());
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={throttle(clickHandler, 10000)}>Click Me</button>
    </div>
  );
}
