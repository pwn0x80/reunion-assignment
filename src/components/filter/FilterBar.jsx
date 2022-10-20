import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  FilterWrapper,
  Button,
  Select,
  Option,
  VerticalLine
} from "./FilterBar.styles";
import { PriceFilterBtn } from "./filterBtn/PriceBtn.jsx"
import { DateFilterOption } from "./filterBtn/DateBtn"
import { LocationBtn } from "./filterBtn/LocationBtn"
import { HouseTypeBtn } from "./filterBtn/HouseTypeBtn"
import { filterData } from "../../utils/filter"
export const FilterBar = ({ setData, bckDate }) => {
  const [location, setLocation] = useState(false)
  const handleFilters = (filters, category) => {
    if (category == 'price') {
      filterData.minprice = filters.min - filters.max
    } else {
      filterData[category] = filters
    }
  }

  let submitTrigger = () => {
    let a = bckDate.filter((e) => filterData.city ? e.city.includes(filterData.city) : true
    ).filter((e) => filterData.type ? e.type.includes(filterData.type) : true
    ).filter((e) => {
      if (filterData.priceRange == null) return true
      let price = JSON.parse(filterData.priceRange)
      if (parseInt(price.min) <= parseInt(e.price) && parseInt(e.price) <= parseInt(price.max)) {
        return true
      }
    }).filter((e) => {
      if (filterData.date == null) return true
      if (e.date === filterData.date) {
        return true
      }
    })
    setData(a)
  }

  return (
    <div>
      <FilterWrapper  >
        <LocationBtn LocationFilter={(filter) => handleFilters(filter, "city")} />
        <VerticalLine />
        <DateFilterOption DateFilter={(filter) => handleFilters(filter, "date")} />
        <VerticalLine />
        <PriceFilterBtn PriceFilter={(filter) => handleFilters(filter, "priceRange")} />
        <VerticalLine />
        <HouseTypeBtn TypeFilter={(filter) => handleFilters(filter, "type")} />
        <Button onClick={submitTrigger}>
          search
        </Button >
      </FilterWrapper >


    </div>
  )
}


