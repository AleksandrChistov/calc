import React from "react";
import { connect } from 'react-redux';

import Header from '../components/calc/calc';
// import { load } from "../redux/actions/index";

let App = (props) => {  
  const { load } = props; 
  return (
    <React.Fragment>
      <Calc/>
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return {
    term: state.term
  }
}

function mapDispatchToProps(dispatch) {
  return {
    load: (term) => dispatch(load(term))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);