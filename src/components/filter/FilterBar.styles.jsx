
import styled from "styled-components";

const FilterWrapper = styled.span`
display:flex;
flex:1;
justify-content: center;
min-height:30px;
background: hsl(0deg 0% 100%);
padding: 20px;
`;
const Button = styled.button`
all: unset;
  cursor: pointer;
padding-block: 0.6rem;
padding-inline:0.9rem; 
background-color:#7065F0;
border-radius:0.5rem;
width: 80px;
text-align:center;
color: white;
`;


const Select = styled.select`
width:20%;
  border:none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -ms-appearance: none

`;

const Option = styled.option`padding-left: 11px;

`;
const VerticalLine = styled.hr`
 min-height: 100%;
  max-height: 100vh;
  margin: 0;
`;
export {
  FilterWrapper,
  Button,
  Select,
  Option,
  VerticalLine
}
