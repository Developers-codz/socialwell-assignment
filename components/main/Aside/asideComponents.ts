import styled from "styled-components"

export const InputWrapper = styled.div`
position:relative;
margin:2rem 0
`


export const SearchBar = styled.input`
padding: 1rem;
background-color: var(--color-primary);
border:none;
width:17rem;
font-size: 1.2rem;
border-radius: 10px;
&::placeholder{
    color:var(--color-light);
    font-size:1.2rem;
}
&:focus{
    outline: none;
}
`
export const SearchIconWrapper = styled.div`
position:absolute;
top:27%;
right:5rem;
`

export const SideHeader = styled.div`
font-size:1.3rem;
margin:3rem 0 1rem 0;
color:var(--color-grey-800);
`

export const ShortText = styled(SideHeader)`
font-size:1rem;
margin:1.2rem 0 ;
font-family: Poppins;
font-size: 18px;
font-weight: 400;
line-height: 27px;
letter-spacing: 0.05em;
text-align: left;
color:var(color-grey-500);

`

export const TagBtn = styled.button`
background-color: var(--color-primary);
color:var(--color-grey-500);
border:none;
border-radius:8px;
padding:.5rem 1rem;
margin:.5rem 1rem;
cursor:pointer;
`
export const TagWrapper = styled.div`
width:70%;
`
