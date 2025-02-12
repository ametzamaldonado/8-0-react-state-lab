import React, { useState } from "react";
import "./App.css";

const App = () => {
  let [count, setCount] = useState(0);
  let [num, setNum] = useState(1);
  let [nextNum, setNextNum] = useState(2);
  debugger

  return (
    <main>
      <p>React State Lab</p>
      <div id="current-score">
        <h3 className={count > 100 ? 'hidden' : 'visible'}>Current Score: {count}</h3>
        <h2 id='winner-message' className={count > 100 ? 'visible' : 'hidden'}>You Win!</h2>
      </div>

      <div id="increment">
        <button onClick={() => {setCount(count + num)}}
          className={count > 100 ? 'hidden' : 'visible'}>+{num}
        </button>
      </div>

      <div id="pay-to-increment">
        <button onClick={() => {
          if (count >= 10) {
            setCount(count - 10);
            setNextNum(nextNum + 1);
            setNum(num + 1);
          } else {
            alert("You can't afford that!");
            setCount(count);
          }
        }} className={count > 100 ? 'hidden' : 'visible'}>Pay 10 points to change from +{num} to +{nextNum}</button>
      </div>

      <button onClick={() => {
        setCount(0);
        setNum(1);
        setNextNum(2);}}
      >Play again?</button>
    </main>
  )
}

// class App extends React.Component {
//   constructor(){
//     super();

//     this.state = {
//       count: 0,
//       num: 1,
//       nextNum: 2,
//     };
//   };



//   handleClick = () => {
//     this.setState({
//       count: this.state.count + this.state.num ,
//     });
//   };

//   increment = () => {
//     this.setState({
//       num: this.state.num + 1,
//       nextNum: this.state.nextNum + 1,
//       count: this.state.count >= 10 ? this.state.count - 10 : alert("You can't afford that!"),
//     });
//   };

//   defaultProperties = () => {
//     this.setState({
//       count: 0,
//       num: 1,
//       nextNum: 2,
//     });
//   }



//   render() {
//     const { count, num, nextNum } = this.state;
//     const h2 = document.getElementById('winner-message')
//     return (
//       <main>
//         <p>React State Lab</p>
//         <div id="current-score">
//           <h3 className={count > 100 ? 'hidden' : 'visible'}>Current Score: {count}</h3>
//           <h2 id='winner-message' className={count > 100 ? 'visible' : 'hidden'}>You Win!</h2>
//         </div>
//         <div id="increment">
//           <button onClick={this.handleClick} className={count > 100 ? 'hidden' : 'visible'}>+{num}</button>
//         </div>
//         <div id="pay-to-increment">
//           <button onClick={this.increment} className={count > 100 ? 'hidden' : 'visible'}>Pay 10 points to change from +{num} to +{nextNum}</button>
//         </div>
//         <button onClick={this.defaultProperties}>Play again?</button>
//       </main>
//     );
//   }
// }

export default App;