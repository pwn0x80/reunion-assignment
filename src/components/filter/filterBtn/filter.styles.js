import styled from "styled-components";

const BtnWrapper = styled.div`
    position: relative;
    text-align: center;
    align-self: center;
  flex: 0 0 12em;
`;

const Select = styled.select`
width: 100%;
  border:none;
background-color:white;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -ms-appearance: none;
text-align: center;
    font-weight: bold;
    font-size: 1rem;
    text-transform: capitalize;
&:focus{
  outline: none;
  border:none;
}

`;

const BtnText = styled.div`
text-align:center;
    color: hsl(0deg 0% 50%);
`;
const Option = styled.option`

`;
const DefaultOption = styled.option`

`;


export {
  BtnWrapper,
  Select,
  BtnText,
  Option,
  DefaultOption
}  
