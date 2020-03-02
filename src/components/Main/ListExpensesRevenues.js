import React from 'react';
import styled from 'styled-components';
import removeIcon from '../../assets/img/remove.svg';

const ExpensesRevenuesBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    min-width: 350px;
    height: 100%;

    h1 {
        display: flex;
        justify-content: flex-start;
        text-transform: uppercase;
        font-size: 18px;
        font-weight: bold;
        border-bottom: 2px solid #ededed;
        padding: 10px 0;
        color : ${({ type }) => type === 'income' ? '#000' : 'red'};
    }

    ul {
        list-style: none;
        transition: all .2s ease-in-out;

        li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 4px;
            border-bottom: 1px solid #ededed;

            &:nth-child(even) {
                background: #f7f7f7
            }

            p {
                color: #808080;
                text-transform: uppercase;
                display: flex;
                align-items: center;

                span {
                    margin: 0 8px;
                    cursor: pointer;
                    img {
                        transition: all .2s ease-in-out;
                        &:hover {
                            transform: scale(1.1); 
                        }
                    }
                }
            }
        }
    }
`;

const ListExpensesRevenues = ({ data, name, remove }) => {  
    return (
        <ExpensesRevenuesBox type={name}>
            <h1>{name}</h1>
            <ul>
                {data.map((item,i) => 
                    <li key={i}>
                        <p>{item.name}</p>
                        <p>
                            {name ==='income' ? '+' : '-'} {item.value}
                            <span onClick={()=> remove(item.name, item.value, item.operation)}>
                                <img src={removeIcon} alt='remove'/>
                            </span>
                        </p>
                    </li>
                )}
            </ul>
        </ExpensesRevenuesBox>
    )
};

export default ListExpensesRevenues;