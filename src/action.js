/*
{
  type: '',
  payload: '',
}
*/

// action creator
export const changeColorAction = (RGB) => {
  return {type: 'CHANGE_COLOR', payload: RGB}
}

export const changeHeaderAction = (text) => {
  return {type: 'CHANGE_HEADER', payload: text}
}