const initialState = {
  sum: 1000000,
  arr: [
    {name: "3 месяца", checked: false}, 
    {name: "6 месяцев", checked: false}, 
    {name: "1 год", checked: false}, 
    {name: "2 года", checked: false}, 
    {name: "3 года", checked: true},
  ]
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_RUNNER':
      return {
        sum: action.e,
        arr: state.arr
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
        arr: arrCopy
      }   
    default:
      return state;
  }
}

export default reducer;