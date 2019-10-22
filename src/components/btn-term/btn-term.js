import React from 'react';
import style from './btn-term.styl'

function BtnTerm(props) {
  const { state, changeTerm } = props;

  return (
    <div className="calc-left-bottom">
      <p className="term-invest">Срок инвестирования</p>
      <ul className="wrap-invest-period">
        {
          state.arr.map((item, i) => {
            let classTerm = item.checked ? "btn-period btn-period-active": "btn-period";
            return (
            <li onClick={() => changeTerm(i)} className={classTerm} id={i} key={i}>{item.name}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default BtnTerm;