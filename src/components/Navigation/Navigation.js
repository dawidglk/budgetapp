import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

const pageData = [{ path:'/', page: 'budget', exact: true}, { path:'/task', page: 'task'}, { path:'/settings', page: 'settings'}];

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
        margin:10px;

        @media (min-width: 768px) {
            margin:10px 20px;
        }

        span {
            text-transform: uppercase;
            border: 1px solid #000;
            padding: 2px 10px;
            border-radius: 5px;
            background: #28b9b5;
            color: #000;
            font-size: 14px;
            box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
        }
    }
`;

const StyledLink = styled(NavLink)`
    text-transform: uppercase;
    text-decoration: none;
    color: #000;
    cursor: pointer;

    &.active {
        font-weight: 700;
    }
`;

const Navigation = ({ amount }) => (
        <Wrapper>
            <List>
                {pageData.map(({ path, page:name, exact }) => <li key={name}><StyledLink exact={exact} activeClassName='active' to={path}>{name}</StyledLink></li>)}
                <li><span>My amount: {amount ? `${amount} zł` : 'empty'}</span></li>
            </List>
        </Wrapper>
    );

const mapStateToProps = state => ({
    amount:state.budget.result
});

export default connect(mapStateToProps, null)(Navigation);
