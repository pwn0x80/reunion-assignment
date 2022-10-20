import { useEffect, useState } from "react"

import { BtnWrapper, Select, BtnText, Option, DefaultOption } from "./filter.styles"
import styled from "styled-components";
export const HouseTypeBtn = ({ TypeFilter }) => {
  const [datafetch, setData] = useState(null)
  useEffect(() => {
    (async () => {
      let t = await fetch("property/data.json")
      let data = await t.json();
      setData(data)
    })()
  }, [])
  let handleChange = (e) => {
    TypeFilter(e.target.value == '' ? null : e.target.value)
  }

  if (datafetch == null) {
    return (
      <>loading... </>
    )
  }

  return (
    <BtnWrapper>
      <BtnText value='' >Property Type </BtnText>
      <Select style={{ paddingRight: '50px' }} onChange={handleChange}>
        <DefaultOption value='' > Types </DefaultOption>
        {
          datafetch.map((item, key) => {
            return (
              <Option key={key} value={item.type}>{item.type}</Option>
            )
          })

        }
      </Select>
    </BtnWrapper>
  )
}
