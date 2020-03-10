import React from 'react';
import styled from 'styled-components';
import completedIcon from '../../assets/img/completed.svg'

const Wrapper = styled.div`
    background:#f7f7f7;
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Select = styled.select`
    outline: none;
    border: 1px solid #000;
    background: #fff;
    height: 30px;
    width: 50px;
    font-size: 16px;
`;

const Input = styled.input`
    padding: 5px;
    margin: 4px 8px;
    border-radius: 4px;
    background: #fff;
    outline: none;
    border: 0;
    border: 1px solid #000;
    font-size: 16px;
`;

const FormContainer = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const Button = styled.button`
    background: #fff;
    outline: none;
    border: 0;
    cursor: pointer;
    margin: 12px;

    @media (min-width: 768px) {
        margin: 0;
    }
    img {
        transition: all .2s ease-in-out;
        &:hover {
            transform: scale(1.1); 
        }
    }
`;

const FormBudget = ({ handleSubmit, handleChange, name, value, operation }) => {
    return (
        <Wrapper>
            <FormContainer onSubmit={handleSubmit}>
                <Select name="operation" value={operation} onChange={handleChange}>
                    <option value="add">+</option>
                    <option value="subtract">-</option>
                </Select>
                <Input placeholder='Add description' name="name" type="text" value={name} onChange={handleChange}/>
                <Input placeholder='Value' name="value" type="number" value={value} onChange={handleChange}/>
                <Button type="submit"><img src={completedIcon} alt='completedIcon'/></Button>
            </FormContainer>
        </Wrapper>
    )
}

export default FormBudget;