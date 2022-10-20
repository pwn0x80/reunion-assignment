import { useEffect, useState } from "react";
import styled from "styled-components";

import { BtnWrapper, Select, BtnText, Option, DefaultOption } from "./filter.styles"


export const LocationBtn = ({ LocationFilter }) => {
  const [datafetch, setData] = useState()
  useEffect(() => {
    (async () => {
      let t = await fetch("property/data.json")
      let data = await t.json();
      let newData = [...new Set(data.map(e => e.city))]
      setData(newData)

    })()
  }, [])
  let handleChange = (e) => {
    LocationFilter(e.target.value)

  }

  return (
    <BtnWrapper >
      <BtnText style={{ paddingRight: '70px' }}  >
        location
      </BtnText>
      <Select onChange={handleChange}   >
        <DefaultOption value='' > select location </DefaultOption>
        {
          datafetch?.map((city, key) => {
            return (
              <Option key={key} value={city}>{city}</Option>
            )
          })
        }
      </Select>
    </BtnWrapper >
  )
}

