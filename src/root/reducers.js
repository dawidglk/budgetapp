import { combineReducers } from 'redux'

import budgetReducers from '../redux/reducers';

const rootReducers = combineReducers({ budget: budgetReducers });

export default rootReducers;