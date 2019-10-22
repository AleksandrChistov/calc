import React from "react";
import { connect } from 'react-redux';

import Calc from '../components/calc/calc';
import { changeTerm } from "../redux/actions/index";

let App = (props) => {
  const { state } = props; 
  return (
    <React.Fragment>
      <Calc state={state} changeTerm={changeTerm}/>
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return {
    state: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeTerm: (e) => dispatch(changeTerm(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);