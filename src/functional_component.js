import React from "react";

function FunctionalComponent(props) {
  return (
    <div className="col-md-12 col-sm-12 functional-component">
      <a className="pull-right" onClick={() => props.showCode("Functional")}>
        code
      </a>
      <h3 className={props.activeClass === "FUN" ? "green" : ""}>Functional Component</h3>
      {props.propToFunComponent}
    </div>
  );
}

export default FunctionalComponent;
