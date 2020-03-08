import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

const pageData = [{ path:'/', page: 'budget'}, { path:'/task', page: 'task'}, { path:'/settings', page: 'settings'}];

const Wrapper = styled.div`
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
`;

const List = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    li {
        list-style: none;
        margin:10px 20px;

        a {
            text-transform: uppercase;
            text-decoration: none;
            color: #000;
            cursor: pointer;
        }

        span {
            text-transform: uppercase;
            border: 1px solid #000;
            padding: 2px 10px;
            border-radius: 5px;
            background: lightskyblue;
            color: #000;
            font-size: 14px;
        }
    }
`;

const Navigation = ({ amount }) => (
        <Wrapper>
            <List>
                {pageData.map(({ path, page:name }) => <li><Link  to={path}>{name}</Link></li>)}
                <li><span>My amount: {amount ? `${amount} zł` : 'empty'}</span></li>
            </List>
        </Wrapper>
    );

const mapStateToProps = state => ({
    amount:state.budget.result
});

export default connect(mapStateToProps, null)(Navigation);
