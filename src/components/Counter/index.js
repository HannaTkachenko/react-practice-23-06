import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isAdd: true,
    };
  }

  switchState = () => {
    const { isAdd } = this.state;
    this.setState({ isAdd: !isAdd });
  };

 
  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  
 additionAndSubstruction = () => {
    const { isAdd } = this.state;
    if (isAdd) {
      this.increment();
    } else {
      this.decrement();
    }
  };
  render() {
    const { count, isAdd } = this.state;
    return (
      <>
        <div>
          <h1>Counter</h1>
          <h2>{count}</h2>

          <button onClick={this.additionAndSubstruction}>+/-</button>
          <button onClick={this.switchState({isAdd})}>Change mode</button>
        </div>
      </>
    );
  }
}
export default Counter;
