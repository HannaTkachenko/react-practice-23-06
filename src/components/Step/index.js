import React, { Component } from "react";
import Counter from "../Counter/";

class Step extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  render() {
    const { value } = this.state;
    return (
      <>
        <div>
          <Counter value = {value} />
          <button>Step</button>
          <input 
          type="number"
          value = {this.state.value}
           name="step" 
           min="1" 
           max="1000000" />
        </div>
      </>
    );
  }
}

export default Step;
