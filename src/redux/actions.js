import types from './types';

const add = (name, value) => ({ type: types.ADD, name, value })
const subtract = (name, value) => ({ type: types.SUBTRACT, name, value })


export default {
    add,
    subtract
}