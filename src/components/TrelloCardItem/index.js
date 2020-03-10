import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: #fff;
    border-radius: 5px;
    color: #000;
    padding: 4px;
    margin: 8px 0;
    font-size: 15px;
    cursor: pointer;
    box-shadow: 0px 7px 7px -10px rgba(0,0,0,0.53);
`;


const TrelloCardItem = ({ id, text }) => {
    return (
        <Wrapper id={id}>
            <p>{text}</p>
        </Wrapper>
    )
}

export default TrelloCardItem;