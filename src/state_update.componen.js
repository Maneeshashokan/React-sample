import React, { Component } from "react";

class StateupdatComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  onChangeInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="col-md-12 col-sm-12 functional-component marginT10">
        <a className="pull-right" onClick={() => this.props.showCode("State")}>
          code
        </a>
        <h3 className={this.props.activeClass === "STATE" ? "green" : ""}>State Updating</h3>
        <div className="col-md-12 col-sm-12 padding-0">
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={this.onChangeInput}
          />
        </div>
        <div className="col-md-12 col-sm-12 padding-0">
          <label>{this.state.name}</label>
        </div>
      </div>
    );
  }
}

export default StateupdatComponent;
