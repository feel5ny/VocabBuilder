import {createStore} from 'redux'
import reducer from './reducer'
// state를 관리해줌

const store = createStore(reducer)

export default store;

// store => redux
// getState()
// dispatch
// 리액트 컴포넌트에 넣어준다<div class="">// </div>