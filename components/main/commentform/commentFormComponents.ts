import styled from "styled-components"
import React from "react"
export const FormWrapper = styled.div`
padding:0rem 4rem 10rem 4rem;
`
export const FormHeader = styled.div`
font-size:1.5rem;

`

export const HorizontalInput = styled.div`
display:flex;

`

export const StyledInput = styled.input`
padding: 1rem;
background-color: var( --color-primary-100);
border:none;
width:20rem;
margin:1rem;
font-size: 1.2rem;
border-radius: 10px;
&::placeholder{
    color:var(--color-grey-500);
    font-size:1.2rem;
}
&:focus{
    outline: none;
}
`

export const SubmitBtn = styled.button`
border:none;
background-color: var(--color-primary);
border-radius:4px;
padding:.4rem 1rem;
display:block;
margin:.2rem 1rem;
cursor:pointer;
`

export const CheckBoxInput =styled.input`
margin:1rem .5rem 1rem 1rem;
`
type textBoxType = {
    row:string;
    cols:string;
}
export const StyledTextBox  = styled(StyledInput )`
width:80%;
height:5rem;
`