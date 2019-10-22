import React from 'react';
import style from './calc.styl'

function Calc(props) {
  const { state, changeTerm } = props;
  
  if (state.term) {

  }
  return (
    <React.Fragment>
      <h1 className="title">Калькулятор</h1>
      <div className="wrap-calc">
        <div className="calc-left">
          <div className="calc-left-top">
            <p className="txt-sum">Сумма для инвестирования</p>
            <p className="sum">{state.sum}</p>
            <input onChange={(e) => changeTerm(e.target.value)} className="runner" 
            type="range" min="0" max="3000" value={state.sum} step="50"></input>
            <ul className="wrap-amount-runner">
              <li className="amount-runner amount-runner-50"><hr className="hr-amount-runner hr-amount-runner-50"/> 50 т.</li>
              <li className="amount-runner amount-runner-500"><hr className="hr-amount-runner hr-amount-runner-500"/> 500 т.</li>
              <li className="amount-runner amount-runner-1000"><hr className="hr-amount-runner hr-amount-runner-1000"/> 1000 т.</li>
              <li className="amount-runner amount-runner-2000"><hr className="hr-amount-runner hr-amount-runner-2000"/> 2000 т.</li>
              <li className="amount-runner amount-runner-3000"><hr className="hr-amount-runner hr-amount-runner-3000"/> 3000 т.</li>
            </ul>
          </div>
          <div className="calc-left-bottom">
            <p className="term-invest">Срок инвестирования</p>
            <ul className="wrap-invest-period">
              <li className="btn-three-month btn-period">3 месяца</li>
              <li className="btn-six-month btn-period">6 месяцев</li>
              <li className="btn-one-year btn-period">1 год</li>
              <li className="btn-two-years btn-period">2 года</li>
              <li className="btn-three-years btn-period btn-period-active">3 года</li>
            </ul>
          </div>
        </div>
        <div className="calc-right">
          <div className="wrap-sum-invest">
            <p className="txt-sum-invest">Инвестиции</p>
            <p className="sum-invest">{state.sum}</p>
            <hr className="hr-sum-invest"/>
          </div>
          <div className="wrap-increase-divvy">
            <p className="txt-increase-divvy">Прирост стоимости паев</p>
            <p className="increase-divvy">256 900</p>
            <hr className="hr-increase-divvy"/>
          </div>
          <hr className="line"/>
          <p className="txt-increase-divvy-percent">Прирост стоимости паев 
            <span className="number-increase-divvy-percent"> 25,69%</span></p>
          <hr className="line"/>
          <div className="wrap-divvy-value">
            <p className="txt-divvy-value">Стоимость паев</p>
            <p className="divvy-value">1 256 900</p>
            <button className="btn-get">Получить</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Calc;