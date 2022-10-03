import { Component } from "react";
import Wrapper from "./components/Unmounting";
import "./App1.css";

class App1 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      isCountShowen: false,
    };
  }

  showCount = () => {
    this.setState({ isCountShowen: true });
  };

  getCount = () => {
    this.setState({ count: this.state.isClosed })
  };
  render() {
    return (
      <div className="fulldiv">
        <div className="mainDiv">
          <Wrapper keys={1} />
          <Wrapper keys={2} />
          <Wrapper keys={3} />
          <Wrapper keys={4} />
          <Wrapper keys={5} />
        </div>
        {this.state.isCountShowen || (
          <button className="btn" onClick={this.showCount}>
            Get report
          </button>
        )}
        {this.state.isCountShowen && (
          <table className="report">
            Card number 1 unmounted {this.state.count} times
            <br />
            Card number 3 unmounted {this.state.count} times
            <br />
            Card number 2 unmounted {this.state.count} times
            <br />
            Card number 4 unmounted {this.state.count} times
            <br />
            Card number 5 unmounted {this.state.count} times
            <br />
          </table>
        )}
      </div>
    );
  }
}

export default App1;
