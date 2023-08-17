import styled from 'styled-components'

export const BtnCloseStyled = styled.button`
position: absolute;
margin-left: 485px;
top: 10px;
display: flex;
border: none;
border-radius: 50%;
transition: background-color 300ms ease-in, rotate 300ms ease-in;

&:hover{
    background-color: lightgrey;
    rotate: 180deg;
}

`