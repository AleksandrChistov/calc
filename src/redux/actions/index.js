export function changeRunner(e) {
  return {
    type: 'CHANGE_RUNNER',
    e
  }
}

export function changeTerm(id) {
  return {
    type: 'CHANGE_TERM',
    id
  }
}