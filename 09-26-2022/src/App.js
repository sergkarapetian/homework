import { Component } from "react";
import Counter from "./components/Counter";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      max: Infinity,
      min: 0,
      step: 1,
    };
  }

  handleMaxValues = (event) => {
    this.setState({ max: event.target.value });
  };

  handleMinValues = (event) => {
    this.setState({ min: event.target.value });
  };

  handleStepValues = (event) => {
    this.setState({ step: event.target.value });
  };

  render() {
    const { max, min, step } = this.state;
    return (
      <>
        <div className="inputDiv">
          <input
            type="number"
            placeholder="Maximum Value of Caunt"
            className="maxValue"
            onChange={this.handleMaxValues}
          />
          <input
            type="number"
            placeholder="Minimum Value of Caunt"
            className="minValue"
            onChange={this.handleMinValues}
          />
          <input
            type="number"
            placeholder="Step Value of Caunt"
            className="stepValue"
            onChange={this.handleStepValues}
          />
        </div>
        
        <div className="counterDiv">
          <Counter
            maxValue={+max}
            minValue={+min}
            stepValue={+step}
            key={1}
          />
          <Counter
            maxValue={+max}
            minValue={+min}
            stepValue={+step}
            key={2}
          />
          <Counter
            maxValue={+max}
            minValue={+min}
            stepValue={+step}
            key={3}
          />
        </div>
      </>
    );
  }
}

export default App;


