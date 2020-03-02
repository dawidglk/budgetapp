import types from './types';

const INITIAL_STATE = {
    listName: 'budgetApp',
    list: [
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
        case types.REMOVE_ITEM : return {
            ...state,
            list : [...state.list].filter(({ name }) => name !== action.name),
            result: action.operation === 'ADD' ? state.result - action.value : state.result + action.value
        }
        default :return state;
    }
}

export default budgetReducers;

/*ADD ID TO REDUCERS ITEM*/