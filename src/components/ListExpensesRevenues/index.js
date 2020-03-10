import React from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions'
import types from '../../redux/types';
import styled from 'styled-components';
import ItemExpensesRevenues from '../ItemExpensesRevenues';

const Wrapper = styled.main`
    background: #fff;
    flex-grow: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 4px;
    margin: 20px 0;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;


const Main = ({ budget, removeItem }) => {
    const { list } = budget;
    const income = list.filter(({ operation }) => operation === types.ADD) || null;
    const expenses = list.filter(({ operation }) => operation === types.SUBTRACT) || null;
    return (
        <Wrapper>
            <ItemExpensesRevenues data={income} remove={removeItem} name="income"/>
            <ItemExpensesRevenues data={expenses}  remove={removeItem} name="expenses"/>
        </Wrapper>
    )
};

const mapDispatchToProps = dispatch => ({
    removeItem:(name, value, operation) => dispatch(actions.removeItem(name, value, operation))
});

const mapStateToProps = state => ({
    budget:state.budget
});


export default connect(mapStateToProps ,mapDispatchToProps)(Main)