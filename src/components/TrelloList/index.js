import React from 'react';
import TrelloCardItem from '../TrelloCardItem';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: #eee;
    padding: 10px;
    border-radius: 3px;
    min-width: 250px;
    max-width: 300px;
    margin: 10px;
    box-shadow: 6px 6px 7px -5px rgba(0,0,0,0.75);
`;

const TrelloList = ({ title, id, cards }) => {
    return (
        <Wrapper>
            <h4>{title}</h4>
            {cards.map(card => <TrelloCardItem key={card.id} {...card}/>)}
        </Wrapper>
    )
}
export default TrelloList;