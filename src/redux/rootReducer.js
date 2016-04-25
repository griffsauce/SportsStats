import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import counter from './modules/counter'
import game from './modules/game'

export default combineReducers({
  counter,
  game,
  router
})
