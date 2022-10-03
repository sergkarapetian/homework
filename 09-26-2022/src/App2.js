import { Component } from "react";
import CountryList from "./components/CountryList";
import "./App2.css"

export default class App extends Component {
  constructor() {
    super();
    this.data = [];
    this.state = {
      data: [],
      searchValue: "",
    };
  }

  componentDidMount() {
    fetch("/data/CountryList.json")
      .then((data) => data.json())
      .then((res) => {
        this.setState({ data: res });
        this.data = res;
      });
  }

  componentDidUpdate(prevProps, prevState, ss) {
    if (prevState.searchValue !== this.state.searchValue) {
      if (this.state.searchValue.length >= 3) {
        this.setState({
          data: this.data.filter((item) =>
            item.name.includes(this.state.searchValue)
          ),
        });
      } else {
        this.setState({ data: this.data });
      }
    }
  }

  handleCountryName = (event) => {
    if (event.target.value.length >= 3) {
      let name = "";
      let text = event.target.value.toLowerCase();
      name += text[0].toUpperCase();
      for (let i = 1; i < text.length; i++) {
        if (text[i].match(" ")) {
          name += " " + text[i + 1].toUpperCase();
          i++;
        } else {
          name += text[i];
        }
      }
      this.setState({ searchValue: name });
    } else {
      this.setState({ data: this.data });
    }
  };

  render() {
    console.log(this.state.searchValue);
    return (
      <div className="mainDiv"> 
        <input className="input" onChange={this.handleCountryName} placeholder="Search" />
        <select className="select">
          {this.state.data.map((item) => (
                <CountryList key={item.name} {...item} />
          ))}
        </select>
      </div>
    );
  }
}
