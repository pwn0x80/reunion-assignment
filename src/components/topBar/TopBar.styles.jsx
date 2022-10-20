import styled from "styled-components"
const Btn = styled.span`
padding-inline:2rem;
  padding-block:0.7rem;
&:hover{
  color: #A9A1E2;
  background-color:hsl(250deg 87% 90%);
}
`;

const DropDownbtn = styled.span`
padding-inline:2rem;
  padding-block:0.7rem;
&:hover{
  color: #A9A1E2;
  background-color:hsl(250deg 87% 90%);
`;

const AccountBtn = styled.button`
padding: 0.9rem;
outline:none;
margin:0.4rem;
    border: none;
border-radius:8px;
color:hsl(247, 70%, 73%);

`;
const Wrapper = styled.div`
display:flex;

    align-items: center;
    justify-content: space-around;
`;

export {
  Btn,
  DropDownbtn,
  AccountBtn,
  Wrapper
}
