import { Component } from "react";

export default class CountryList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <option>{this.props.name}</option>;
  }
}
