import { handleActions } from 'redux-actions'
import * as CONSTANTS from './constants'

const getInitialState = () => {
  return {
    userInfo: {
      name: '',
      email: ''
    },
    period: '',
    method: ''
  }
}

export default handleActions({
  [CONSTANTS.UPDATE_USERINFO]: (state, { payload }) => ({
    ...state,
    userInfo: payload,
  }),
  [CONSTANTS.UPDATE_PERIOD]: (state, { payload }) => ({
    ...state,
    period: payload,
  }),
  [CONSTANTS.UPDATE_METHOD]: (state, { payload }) => ({
    ...state,
    method: payload,
  })

}, getInitialState())
