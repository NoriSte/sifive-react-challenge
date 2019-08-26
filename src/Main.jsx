import { connect } from "react-redux";

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

  const orders = props.modules.map(item => item.order);
  return JSON.stringify(orders, null, 2);
};

export default connect(mapStateToProps)(Main);
