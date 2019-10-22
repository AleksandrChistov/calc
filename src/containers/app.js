import React from "react";
import { connect } from 'react-redux';

import Calc from '../components/calc/calc';
import { changeRunner, changeTerm } from "../redux/actions/index";

let App = (props) => {
  const { state, changeRunner, changeTerm } = props; 
  return (
    <React.Fragment>
      <Calc state={state} changeRunner={changeRunner} changeTerm={changeTerm}/>
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
    changeRunner: (e) => dispatch(changeRunner(e)),
    changeTerm: (id) => dispatch(changeTerm(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);