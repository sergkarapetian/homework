import { Component } from "react";

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideContainerBtn: false,
      isClosed: 0,
    };
  }

  hideContainer = () => {
    this.setState({ hideContainerBtn: !this.state.hideContainerBtn });
    if(this.state.hideContainerBtn){
      this.setState({isClosed: this.state.isClosed + 1})
    }
  };
  render() {
    console.log(this.state);
    const { keys } = this.props;
    return (
      <div className="container">
        {!this.state.hideContainerBtn && <div className="cards"> {keys} </div>}
        <button className="closeBtn" onClick={this.hideContainer}>
          {!this.state.hideContainerBtn? "Close" : "Show"}</button>
      </div>
    );
  }
}

export default Wrapper;
