import types from './types';

const add = (name, value) => ({ type: types.ADD, name, value })
const subtract = (name, value) => ({ type: types.SUBTRACT, name, value })
const removeItem = (name,value,operation) => ({ type: types.REMOVE_ITEM, name, value, operation})


export default {
    add,
    subtract,
    removeItem
}