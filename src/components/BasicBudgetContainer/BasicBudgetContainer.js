import React from 'react';
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
    font-size: 27px;
    color: #fff;
    font-family: sans-serif;
    font-weight: 300;
`;


// const BoxAmount = styled.div`
//     background: ${({ type }) => type === 'income' && '#28b9b5' || type ==='expenses' && '#ff5049' || 'white'};
//     font-size: 18px;
//     color: #fff;
//     border: 1px solid #fff;
//     padding: 10px 20px;
// `;

const BasicBudgetContainer = ({ budget }) => {
    const { listName: bankName, list, result: amount } = budget;
    console.log(list)

    const incomeList = list.filter(({ operation }) => operation === 'ADD');

    console.log(incomeList)
    const e = incomeList.reduce((a, b) => parseFloat(a.value) + parseFloat(b.value), 0);
    console.log(e)
        return (
        <Wrapper>
            <Title>{bankName}</Title>
            <Title>{amount}</Title>
        </Wrapper>
    )
}

export default BasicBudgetContainer;