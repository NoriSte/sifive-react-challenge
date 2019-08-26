import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    ...state
  };
};

const Main = props => {
  return JSON.stringify(props, null, 2);
};

export default connect(mapStateToProps)(Main);
