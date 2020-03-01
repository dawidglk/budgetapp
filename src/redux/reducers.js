import types from './types';

const INITIAL_STATE = {
    listName: 'budgetApp',
    list:[
        {
            name: 'blee',
            value: 12,
            operation: 'ADD'
          },
          {
            name: 'blee',
            value: 12,
            operation: 'ADD'
          },
          {
            name: 'blee',
            value: 12,
            operation: 'ADD'
          },
          {
            name: 'aa',
            value: 4,
            operation: 'SUBTRACT'
          },
          {
            name: 'ww',
            value: 4,
            operation: 'SUBTRACT'
          }
    ],
    result:0
}


const budgetReducers = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case types.ADD : return {
            ...state,
            list:[...state.list, { name: action.name, value: action.value, operation: types.ADD }],
            result: state.result + action.value
        }
        case types.SUBTRACT : return {
            ...state,
            list:[...state.list, { name: action.name, value: action.value, operation: types.SUBTRACT }],
            result: state.result - action.value
        }
        default :return state;
    }
}
export default budgetReducers;