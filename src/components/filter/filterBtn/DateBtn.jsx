import styled from "styled-components"
import { BtnWrapper, Select, BtnText, Option, DefaultOption } from "./filter.styles"

const Date = styled.input`
  outline: none;
  border:none;
&:focus{
  outline: none;
  border:none;
}
 `;
export const DateFilterOption = ({ DateFilter }) => {
  let handleChange = (e) => {
    const selectdate = e.target.value
    DateFilter(selectdate)
  }

  return (
    <BtnWrapper>
      <BtnText style={{ paddingRight: '111px' }}>
        when
      </BtnText>
      <Date type="date" onChange={handleChange} />
    </BtnWrapper>
  )
}

