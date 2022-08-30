import { createAction } from 'redux-actions'
import * as CONSTANTS from './constants'

export const updateUserInfo = createAction(CONSTANTS.UPDATE_USERINFO)
export const updatePeriod = createAction(CONSTANTS.UPDATE_PERIOD)
export const updateMethod = createAction(CONSTANTS.UPDATE_METHOD)