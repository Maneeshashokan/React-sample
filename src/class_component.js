import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-12 col-sm-12 class-component marginT10">
        <a className="pull-right" onClick={() => this.props.showCode("Class")}>
          code
        </a>
        <h3 className={this.props.activeClass === "CLASS" ? "green" : ""}>Class Component</h3>
        {this.props.propsToClassComponent}
      </div>
    );
  }
}

export default ClassComponent;
