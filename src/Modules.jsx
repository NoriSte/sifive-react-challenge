import React from "react";
import { connect } from "react-redux";
import Module from "./Module";

const mapStateToProps = state => {
  return {
    ...state
  };
};

const Main = ({ loading, error, modules, order }) => {
  if (loading) {
    return "Loading...";
  }
  if (error) {
    return "An error occured";
  }
  if (!modules) {
    return "Empty data";
  }

  if (!order) {
    modules.sort((a, b) => a.order - b.order);
    order = modules.map(item => item.id);
  }

  return (
    <ul>
      {order.map(id => {
        const module = modules.find(item => item.id === id);
        return <Module data={module} key={module.id} />;
      })}
    </ul>
  );
};

export default connect(mapStateToProps)(Main);
