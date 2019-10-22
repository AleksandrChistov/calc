const initialState = {
  term: 36
}

function loadReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_TERM':
      return {
        term: action.term
      }     
    default:
      return state;
  }
}

export default loadReducer;