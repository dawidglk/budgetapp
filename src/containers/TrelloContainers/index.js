import React from 'react';
import { connect } from 'react-redux';
import TrelloList from '../../components/TrelloList';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction:row;
    align-items: flex-start;
    height: 100%;
    background: #1179bf;
`


const TrelloContainers = ({ tasks }) => {
    return (
        <Wrapper>
            {tasks.map(task => <TrelloList key={task.id} {...task}/>)}
        </Wrapper>
    )
};

const mapStateToProps = state => ({ tasks: state.tasks });

export default connect(mapStateToProps)(TrelloContainers);