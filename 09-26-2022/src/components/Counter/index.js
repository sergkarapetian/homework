import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.minValue || 0,
    };
  }
  
componentDidMount(){
  if(this.props.minValue){
    console.log(this.props.minValue);
  }
}

componentDidUpdate(prevProps){
  if(prevProps.minValue !== this.props.minValue ){
    this.setState({count: this.props.minValue})
  }
}

  hendleAdd = () => {
    if (this.state.count + this.props.stepValue <= this.props.maxValue) {
      this.setState({ count: this.state.count + (this.props.stepValue || 1) });
    } else {
      this.setState({ count: this.state.count });
    }
  };

  handleSub = () => {
    if (
      this.props.minValue &&
      this.state.count - this.props.stepValue >= this.props.minValue
    ) {
      this.setState({ count: this.state.count - this.props.stepValue });
    } else if (this.state.count - this.props.stepValue >= 0) {
      this.setState({ count: this.state.count - this.props.stepValue });
    }
  };

  handleResetCount = () => {
    this.setState({ count: this.props.minValue || 0 });
  };
  
  render() {
    const {
      state: { count },
    } = this;

    return (
      <div className="container">
        Counter {count} <br />
        <span className="changeCountbtn">
          <button
            className="subBtn"
            disabled={
              this.state.count > (this.props.minValue || 0) ? false : true
            }
            onClick={this.handleSub}
          >
            -
          </button>
          <button className="addBtn" onClick={this.hendleAdd}>
            +
          </button>
          <br />
        </span>
        <button className="resetBtn" onClick={this.handleResetCount}>
          Reset
        </button>
      </div>
    );
  }
}

export default Counter;
