import { combineReducers } from 'redux'
import budgetReducers from '../redux/budget';
import trelloReducers from '../redux/trello';

const rootReducers = combineReducers({ budget: budgetReducers, tasks: trelloReducers });

export default rootReducers;