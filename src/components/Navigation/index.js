import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { pageData as navigationItem } from '../../helpers/pageData';
import styled from 'styled-components';
import logo from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';


const Wrapper = styled.div`
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;

    a {
        margin: 0 10px;
        transition: all 300ms;

        &:hover {
            transform: scale(1.1);
        }
    }
`;

const List = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    li {
        list-style: none;
        margin: 10px;
        transition: all 300ms;

        &:hover {
            transform: scale(1.1);
        }

        &:last-child {
            transition: none;
            display: none;

            @media (min-width: 768px) {
                display: block;
            }

            &:hover {
                transform: none;
            }
        }

        @media (min-width: 768px) {
            margin:10px 20px;
        }

        div {
            text-transform: uppercase;
            padding: 3px 10px;
            border-radius: 10px;
            background: #c6e2fa;
            color: #000;
            font-size: 14px;
            box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.75);
            cursor: pointer;
            text-align: center;

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
            <Link to='/'><img src={logo} alt='logo'/></Link>
            <List>
                {navigationItem.map(({ path, page: name, exact }) => <li key={name}><StyledLink exact={exact} activeClassName='active' to={path}>{name}</StyledLink></li>)}
                <li><div><span>My budget: </span>{amount ? `${amount} zł` : '0'}</div></li>
            </List>
        </Wrapper>
    );

const mapStateToProps = state => ({
    amount:state.budget.result
});

export default connect(mapStateToProps)(Navigation);
