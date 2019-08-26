import React from "react";
import { connect } from "react-redux";
import Module from "./Module";

const mapStateToProps = state => {
  return {
    ...state
  };
};

const Main = props => {
  if (props.loading) {
    return "Loading...";
  }
  if (props.error) {
    return "An error occured";
  }
  if (!props.modules) {
    return "Empty data";
  }

  return (
    <ul>
      {props.modules.map(item => (
        <Module data={item} key={item.id} />
      ))}
    </ul>
  );
};

export default connect(mapStateToProps)(Main);
