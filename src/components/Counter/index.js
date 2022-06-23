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
    this.setState((state)=>{
      const {count} = state;
      const newCount = count+1;
      return {count: newCount}
    });
  };

  decrement = () => {
    this.setState((state)=>{
      const {count} = state;
      const newCount = count-1;
      return {count: newCount}
    });
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

          <button onClick={this.additionAndSubstruction}>
            {isAdd ? "+" : "-"}
          </button>
          <button onClick={this.switchState}>Change mode</button>
        </div>
      </>
    );
  }
}
export default Counter;
