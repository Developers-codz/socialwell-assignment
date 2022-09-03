import styled from "styled-components"


export const  NavStripe = styled.div`
text-align: end;
margin:.5rem 2rem;

`

export const Nav = styled.div`
display:flex;
height:10vh;
background-color: var(--color-light);
padding:.5rem 2rem;
`
export const LogoWrapper = styled.div`
flex-grow: 1;
cursor: pointer;
`

export const NavLinkWrapper  = styled.ul`
display:flex;
flex-grow: 1;
justify-content: space-around;
align-items: center;
li{
    list-style: none;
    font-size: 1.2rem;
    color:var(--color-grey-500);
    cursor: pointer;
}

`
export const ActiveLink = styled.li`
    color:black !important;
    border-bottom:1px solid var(--color-primary);
    font-weight: 600;
`


