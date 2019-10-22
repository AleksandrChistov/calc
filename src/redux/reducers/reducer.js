const initialState = {
  sum: 1000,
  term: 36
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_TERM':
      return {
        sum: action.e,
        term: action.term
      }     
    default:
      return state;
  }
}

export default reducer;