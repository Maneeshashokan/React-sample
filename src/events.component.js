import React, { Component } from "react";

class EventsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    alert(this.state.name === "" ? "Please enter something" : this.state.name);
  }

  onChangeInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="col-md-12 col-sm-12 class-component marginT10">
        <a className="pull-right" onClick={() => this.props.showCode("Events")}>
          code
        </a>
        <h3 className={this.props.activeClass === "EVENTS" ? "green" : ""}>
          Class Component
        </h3>
        <div className="col-md-12 col-sm-12 padding-0">
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={this.onChangeInput}
          />
        </div>

        <div className="col-md-12 col-sm-12 padding-0 mt-10">
          <button className="btn btn-primary" onClick={this.onSubmit}>OK</button>
        </div>
      </div>
    );
  }
}

export default EventsComponent;
