const DEFAULT_STATE = {
  rootColor: [123, 234, 12],
  textHeader: "hello"
}

const reducer = (state = DEFAULT_STATE, action) => { // 현재 스테이트,
  if (action.type === 'CHANGE_COLOR') {
    return {
      ...state,
      rootColor: action.payload,
    }
  }
  if (action.type === 'CHANGE_HEADER') {
    return {
      ...state,
      textHeader: action.payload,
    }
  }
  // 아무런 액션이 안달렸을 때 (망가지지 말라고 셋팅해 둔다)
  return {
    ...state
  }
}

export default reducer;