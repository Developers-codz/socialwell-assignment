import styled from "styled-components"


export const FooterWrapper = styled.div`
display:flex;
background-color: black;
color:white;
padding:2rem 3rem;
`

export const LeftPane = styled.div`
flex-grow:1;

`
export const StyledHead = styled.h2`
font-family: Poppins;
font-size: 36px;
font-weight: 400;
line-height: 54px;
letter-spacing: 0em;
text-align: left;

`
export const RightPane = styled.div`
flex-grow:0;
width:20vw;
> div{
    font-family: Poppins;
font-size: 24px;
font-weight: 400;
line-height: 34px;
letter-spacing: -0.02em;
text-align: left;

}
`

export const IconWrapper = styled.div`
display: flex;
width:25%;
justify-content: space-between;
`
export const IconBg = styled.div`
background-color: grey;
border-radius: 50%;
padding:.5rem 0;
margin:1rem 0

`

export const FooterStrip = styled.div`
background-color: var(--color-light);
padding:.5rem 3rem;
display:flex;
justify-content: space-between;
align-items: center;
`