// Store/configureStore.js

import { createStore, combineReducers } from 'redux'
import toggleFavorite from './Reducers/favoriteReducer'
import setAvatar from './Reducers/avatarReducer'

const rootPersistConfig = {
    key: 'root',
    storage: storage
  }
  
  export default createStore(persistCombineReducers(rootPersistConfig, {toggleFavorite, setAvatar}))