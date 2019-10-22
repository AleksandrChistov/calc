import React from 'react';
import style from './calc.styl'
import BtnTerm from '../btn-term/btn-term';

function Calc(props) {
  const { state, changeRunner, changeTerm } = props;
  const sum = new Intl.NumberFormat('ru-RU').format(state.sum);
  let increaseValue = new Intl.NumberFormat('ru-RU').format(state.sum / 100 * 25.69);
  let increase = "25.69%";

  state.arr.map(item => {
    if (item.checked) {
      increaseValue = state.sum / 100 * item.increase;
      increaseValue = new Intl.NumberFormat('ru-RU').format(increaseValue);
      increase = item.increase + "%";
    }
  });
  
  let divvyValue = +state.sum + (state.sum / 100 * parseFloat(increase));
  divvyValue = new Intl.NumberFormat('ru-RU').format(divvyValue);

  return (
    <React.Fragment>
      <h1 className="title">Калькулятор</h1>
      <div className="wrap-calc">
        <div className="calc-left">
          <div className="calc-left-top">
            <p className="txt-sum">Сумма для инвестирования</p>
            <p className="sum">{sum} &#8381;</p>
            <input onChange={(e) => changeRunner(e.target.value)} className="runner" 
            type="range" min="0" max="3000000" value={state.sum} step="50000" style={{background:
              "-webkit-linear-gradient(left, #0093ff 0%, #0093ff "+state.sum * 0.1 / 3000+"%, #6E7E93 "+state.sum * 0.1 / 3000+"%, #6E7E93 100%)"
            }}></input>
            <ul className="wrap-amount-runner">
              <li className="amount-runner amount-runner-50"><hr className="hr-amount-runner hr-amount-runner-50"/> 50 т.</li>
              <li className="amount-runner amount-runner-500"><hr className="hr-amount-runner hr-amount-runner-500"/> 500 т.</li>
              <li className="amount-runner amount-runner-1000"><hr className="hr-amount-runner hr-amount-runner-1000"/> 1000 т.</li>
              <li className="amount-runner amount-runner-2000"><hr className="hr-amount-runner hr-amount-runner-2000"/> 2000 т.</li>
              <li className="amount-runner amount-runner-3000"><hr className="hr-amount-runner hr-amount-runner-3000"/> 3000 т.</li>
            </ul>
          </div>
            <BtnTerm state={state} changeTerm={changeTerm}/>
        </div>
        <div className="calc-right">
          <div className="wrap-sum-invest">
            <p className="txt-sum-invest">Инвестиции</p>
            <p className="sum-invest">{sum} &#8381;</p>
            <hr className="hr-sum-invest"/>
          </div>
          <div className="wrap-increase-divvy">
            <p className="txt-increase-divvy">Прирост стоимости паев</p>
            <p className="increase-divvy">{increaseValue} &#8381;</p>
            <hr className="hr-increase-divvy"/>
          </div>
          <hr className="line"/>
          <p className="txt-increase-divvy-percent">Прирост стоимости паев 
            <span className="number-increase-divvy-percent"> {increase}</span></p>
          <hr className="line"/>
          <div className="wrap-divvy-value">
            <p className="txt-divvy-value">Стоимость паев</p>
            <p className="divvy-value">{divvyValue} &#8381;</p>
            <button className="btn-get">Получить</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Calc;