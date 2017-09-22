import React from 'react'
import {connect} from 'react-redux'
import {changeColorAction, changeHeaderAction} from '../../action';

const generateRandomRGB = () => {
  const randomR = Math.floor(Math.random() * 255)
  const randomG = Math.floor(Math.random() * 255)
  const randomB = Math.floor(Math.random() * 255)
  return [randomR, randomG, randomB];
}

const UserInputComponentStyle = {
  position: 'absolute',
  height: '320px',
  width: '400px',
  opacity: '0.5',
  backgroundColor: 'orange',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

class UserInputComponent extends React.Component {
  render() {
    // console.log(generateRandomRGB());
    return (
      <div>
        <div>
          <input 
          value = 
            {this.props.textHeader}
          onChange ={(text) => this.props.I_WATN_TO_CHANGE_TEXT(text.target.value)}
          />
        </div>
        <div 
          onClick={() => this.props.I_WATN_TO_CHANGE_COLOR()} 
        style={UserInputComponentStyle}>
          <h1 style ={{
            color:"white",
          }}>
            {this.props.textHeader}
          </h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rootColor: state.rootColor,
    textHeader: state.textHeader,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    I_WATN_TO_CHANGE_COLOR: () => dispatch(changeColorAction(generateRandomRGB())) ,
    I_WATN_TO_CHANGE_TEXT: (text) => dispatch(changeHeaderAction(text)) 
    // 내가 발생시키고 싶은 actions들을 객체로 리턴하는 합수
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserInputComponent);
