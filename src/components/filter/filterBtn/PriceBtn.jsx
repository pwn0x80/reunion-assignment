import styled from "styled-components";

import { BtnWrapper, Select, BtnText, Option, DefaultOption } from "./filter.styles"


export const PriceFilterBtn = ({ PriceFilter }) => {
  let handleChange = (e) => {
    PriceFilter(e.target.value == '' ? null : e.target.value)
  }
  return (
    <BtnWrapper>
      <BtnText style={{ paddingRight: '60px' }} >Price</BtnText>
      <Select onChange={handleChange} >
        <DefaultOption value='' >Select Price </DefaultOption>
        <Option value='{"min":200000,"max":300000}' >rs200000-rs300000 </Option>
        <Option value='{"min":300000,"max":450000}' >rs300000-rs450000 </Option>
        <Option value='{"min":450000,"max":550000}' >rs450000-rs550000 </Option>
        <Option value='{"min":550000,"max":650000}' >rs550000-rs650000 </Option>
        <Option value='{"min":650000,"max":750000}' >rs650000-rs750000 </Option>
      </Select>
    </BtnWrapper >
  )
}

