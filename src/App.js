import React, { Component } from "react";
import logo from "./logo.svg";
import FunctionalComponent from "./functional_component";
import ClassComponent from "./class_component";
import EventsComponent from "./events.component";
import StateupdatComponent from "./state_update.componen";
import "./App.css";
const codeMap = {
  functional: `
    import React from "react";

    function FunctionalComponent(props) {
      return (
        <div className="col-md-12 col-sm-12 functional-component">
            <a className="pull-right" onClick={()=>this.props.showCode("Functional")}>code</a>
          <h3>Functional Component</h3>
          {props.propToFunComponent}
        </div>
      );
    }

    export default FunctionalComponent;
`,
  classComponentCode: `
import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-12 col-sm-12 class-component marginT10">
        <h3>Class Component</h3>
        {this.props.propsToClassComponent}
      </div>
    );
  }
}

export default ClassComponent;

`,
  stateComponentCode: `
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
          <a className="pull-right" onClick={() => this.props.showCode("Class")}>
            code
          </a>
          <h3>State Updating</h3>
          <div className="col-md-6 col-sm-6 padding-0">
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

`,
  eventsComponentCode: `
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
    alert(this.state.name);
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

        <div className="col-md-12 col-sm-12">
          <button onClick={this.onSubmit}>OK</button>
        </div>
      </div>
    );
  }
}

export default EventsComponent;

`
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propToFunComponent: "Props from parent component",
      propsToClassComponent: "Props from parent component",
      code: codeMap.functional,
      activeClass: "FUN"
    };

    this.showCode = this.showCode.bind(this);
  }

  showCode(key) {
    switch (key) {
      case "Functional":
        this.setState({ code: codeMap.functional, activeClass: "FUN" });
        break;
      case "Class":
        this.setState({
          code: codeMap.classComponentCode,
          activeClass: "CLASS"
        });
        break;
      case "State":
        this.setState({
          code: codeMap.stateComponentCode,
          activeClass: "STATE"
        });
        break;
      case "Events":
        this.setState({
          code: codeMap.eventsComponentCode,
          activeClass: "EVENTS"
        });
        break;
      default:
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="col-md-12 col-sm-12">
          <h2 className="text-center">React Sample Application</h2>
        </div>
        <div className=" col-md-12 col-sm-12 padding-0 overflow-y-auto">
          <div className="col-md-4 col-sm-4 padding-0">
            <FunctionalComponent
              propToFunComponent={this.state.propToFunComponent}
              showCode={this.showCode}
              activeClass={this.state.activeClass}
            />
            <ClassComponent
              propsToClassComponent={this.state.propsToClassComponent}
              showCode={this.showCode}
              activeClass={this.state.activeClass}
            />
            <StateupdatComponent
              showCode={this.showCode}
              activeClass={this.state.activeClass}
            />
            <EventsComponent
              showCode={this.showCode}
              activeClass={this.state.activeClass}
            />
          </div>
          <div className="col-md-8 col-sm-8">
            <pre>{this.state.code}</pre>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
