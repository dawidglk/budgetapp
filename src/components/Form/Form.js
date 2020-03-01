import React from 'react';
import styled from 'styled-components';
import completedIcon from '../../assets/img/completed.svg'

const WrapperForm = styled.div`
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
    margin: 0 8px;
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
`;

const Button = styled.button`
    background: #fff;
    outline: none;
    border: 0;
    cursor: pointer;
`;

const Form = ({ handleSubmit, handleChange, name, value, operation }) => {
    return (
        <WrapperForm>
            <FormContainer onSubmit={handleSubmit}>
                <Select name="operation" value={operation} onChange={handleChange}>
                    <option value="add">+</option>
                    <option value="subtract">-</option>
                </Select>
                <Input placeholder='Add description' name="name" type="text" value={name} onChange={handleChange}/>
                <Input placeholder='Value' name="value" type="number" value={value} onChange={handleChange}/>
                <Button type="submit"><img src={completedIcon} alt='completedIcon'/></Button>
            </FormContainer>
        </WrapperForm>
    )
}

export default Form;