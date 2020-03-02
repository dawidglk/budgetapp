/* eslint-disable no-mixed-operators */
import React from 'react';
import types from '../../redux/types'
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 10px 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`;

const Title = styled.h1`
    text-align: center;
    text-transform: uppercase;
    font-size:${({ sum })=> sum ? '30px' : '27px'};
    color: #fff;
    font-family: sans-serif;
    font-weight: ${({ sum })=> sum ? 'bold' : '300'};
    margin: 10px
`;


const BoxAmount = styled.div`
    background: ${({ type }) => type === 'income' && '#28b9b5' || type ==='expenses' && '#ff5049' || '#fff'};
    font-size: 16px;
    color: #fff;
    padding: 10px;
    border-radius: 3px;
    margin: 10px;
    min-width: 300px;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
    transition: all .1s ease-in-out;

    p { 
        display: flex;
    }

    p:first-child {
        color: #000;
    }

    span {
        background: #ff736c;
        padding: 3px;
        font-size: 10px;
        border-radius: 5px;
        margin: 0 6px;
    }
`;

const BasicBudgetContainer = ({ budget }) => {
    const { listName: budgetName, list, result: amount } = budget;
    const typeExpense = type => list.filter(({ operation }) => operation === type).reduce((acc, item) => acc + item.value, 0);
    const formatExpense = type =>  type === 'ADD' ? `+ ${typeExpense(type)} zł` : `- ${typeExpense(type)} zł`;
    const percentageOfExpenses = type => '%' + (typeExpense(type) * 100 / amount).toFixed(1);
   
    return (
        <Wrapper>
            <Title>{budgetName}</Title>
            <Title sum>{amount} zł</Title>
            {list.length ? (
                <>
                    <BoxAmount type='income'>
                        <p>income</p>
                        <p>{formatExpense(types.ADD)}</p>
                    </BoxAmount>
                    <BoxAmount type='expenses'>
                        <p>expenses</p>
                        <p>{formatExpense(types.SUBTRACT)}<span>{percentageOfExpenses(types.SUBTRACT)}</span></p>
                    </BoxAmount>
                </>
            ) : null}
        </Wrapper>
    )
}

export default BasicBudgetContainer;