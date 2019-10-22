import React from 'react';
import style from './calc.styl'

function Calc(props) {
  const { state, changeTerm } = props;

  return (
    <React.Fragment>
      <h1>Калькулятор</h1>
      <div className="wrap-calc">
        <div className="calc-left">
          <div className="calc-left-top">
            <p className="txt-sum">Сумма для инвестирования</p>
            <p className="sum"></p>
            <input onChange={(e) => changeTerm(e)} className="runner" type="range" min="0" max="3000" value={state.value} step="50"></input>
          </div>
          <div className="calc-left-bottom">
            <p className="term-invest">Срок инвестирования</p>
            <button className="btn-three-month">3 месяца</button>
            <button className="btn-six-month">6 месяцев</button>
            <button className="btn-one-year">1 год</button>
            <button className="btn-two-years">2 года</button>
            <button className="btn-three-years">3 года</button>
          </div>
        </div>
        <div className="calc-right">
          <div className="wrap-sum-invest">
            <p className="txt-sum-invest">Инвестиции</p>
            <p className="sum-invest"></p>
          </div>
          <div className="wrap-increase-divvy">
            <p className="txt-increase-divvy">Прирост стоимости паев</p>
            <p className="increase-divvy"></p>
          </div>
          <hr/>
          <p className="txt-increase-divvy-percent">Прирост стоимости паев</p>
          <hr/>
          <p className="txt-divvy-value">Стоимость паев</p>
          <p className="divvy-value"></p>
          <button className="btn-get">Получить</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Calc;