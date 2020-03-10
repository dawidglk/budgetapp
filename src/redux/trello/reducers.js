
const INITIAL_STATE = [
{
    title: 'New Task 1',
    id: 0,
    cards: [
        {
            id: 0,
            text: 'New card'
        },
        {
        id: 1,
        text: 'New card 2'
        },
        {
        id: 2,
        text: 'New card 3'
        }]
},
{
    title: 'New LIST 2  ',
    id: 1,
    cards: [
        {
            id: 0,
            text: 'New card LIST'
        },
        {
        id: 1,
        text: 'Add drag and drop'
        },
        {
        id: 2,
        text: 'New card 3 YYYY'
        },
        {
            id: 3,
            text: 'New implementation task '
        }]
},
];

const trelloReducers = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default :
            return state;
    }
}

export default trelloReducers;