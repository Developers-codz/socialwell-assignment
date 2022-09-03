import styled from "styled-components"

export const MainWrapper = styled.div`
display:grid;
grid-template-areas:
"head head"
"main side";

`

export const PageHead = styled.div`
font-size: 3rem;
padding:2rem 4rem;
grid-area: head;

`

export const BlogWrapper = styled.div`
grid-area: main;
background-color: var(--color-light);
padding:0rem 4rem;
width:65vw;
`

export const AsideWrapper = styled.div`
grid-area: side;
background-color: var(--color-light);

`

export const ImageWrapper = styled.div`
position:relative;
box-sizing: content-box;
width:55vw;
`

export const DateLabel = styled.div`
position: absolute;
background-color: var(--color-light);
top:3rem;
left: 3rem;
padding: .5rem 1.2rem;
border-radius: 10px;

`

export const PlayBtn = styled(DateLabel)`
top:43%;
left: 43%;
background-color: var(--color-grey-50);
cursor:pointer;
`
export const EndTextWrapper = styled.div`
color:var(--color-grey-500);
font-size:12px;
display:flex;
justify-content: flex-end;
& > div{
    padding:0 1rem;
}

`
type sectionProps = {
section?:boolean 
}

export const BlogCatMain= styled.div`
color:var(--color-grey-500);
margin: ${(props:sectionProps) => (props.section ? "1rem 0" : "")};
`

export const BlogHead = styled.div`
font-family: Poppins;
font-size: 36px;
font-weight: 400;
line-height: 40px;
letter-spacing: 0em;
text-align: left;

`
type subTitleType = {
    second?:boolean;
}
export const SubTitle = styled.div`
display:flex;
justify-content: start;
align-items:center;
margin:.5rem 0;
.text-circle{
    padding:.3rem .6rem;
    background-color:black;
    color:var(--color-light);
    border-radius: 50%;
    font-size:1.2rem !important;
    margin: 0 1rem 0 0;
}
`