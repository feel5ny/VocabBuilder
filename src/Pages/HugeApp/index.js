import React from 'react';
import ChildComponent from './ChildComponent';
import {connect} from 'react-redux';

const hugeAppStyle = {
  backgroundColor: 'black',
  height: '100vh',
  width: '100%',
  padding: '40px',
  display: 'flex',
  position: 'relative'
}

// 그 전까지는 내 안에 있던 state.rootColor store안에 있는 state.rootColor Provider가 나한테 이걸
// 줬으면 좋겠다. 내가 Provider랑 연결이 되어야겠네..
class HugeApp extends React.Component {
  render = () => {
    return (
      <div style={{
        ...hugeAppStyle
      }}>
      <ChildComponent 
        factor={0.5} 
        RGB={this.props.rootColor}
      />
      </div>
    )
  }
}
const mapStateToProps = (state) => { // app전체의 state
  return {rootColor: state.rootColor}
}
export default connect(mapStateToProps, null)(HugeApp); // Provider와 hugeapp과 연결하는..