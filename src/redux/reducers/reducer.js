const initialState = {
  term: 1000
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_TERM':
      return {
        term: action.e
      }     
    default:
      return state;
  }
}

export default reducer;