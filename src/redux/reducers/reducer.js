const initialState = {
  sum: 1000000,
  arr: [
    {name: "3 месяца", checked: false, increase: 4.8}, 
    {name: "6 месяцев", checked: false, increase: 9.28}, 
    {name: "1 год", checked: false, increase: 13.72}, 
    {name: "2 года", checked: false, increase: 14.35}, 
    {name: "3 года", checked: true, increase: 25.69},
  ]
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_RUNNER':
      return {
        sum: action.e,
        arr: state.arr,
        increase: state.increase
      }     
    case 'CHANGE_TERM':
      let stateCopy = {...state};
      let arrCopy = [...stateCopy.arr];
      arrCopy.map(item => {
        item.checked = false;
      });
      arrCopy[action.id].checked = true;
      return {
        sum: state.sum,
        arr: arrCopy,
        increase: state.increase
      }   
    default:
      return state;
  }
}

export default reducer;