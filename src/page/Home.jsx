import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/card/Card"
import { FilterBar } from "../components/filter/FilterBar";
import { MdOutlineArrowDropDownCircle } from "react-icons/md"
import Header from "../components/header/Header"
const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
justify-content: center;
`;


const Home = ({ filterData }) => {
  const [datafetch, setData] = useState()
  const [bckDate, setbckData] = useState()

  useEffect(() => {
    ; (async () => {
      let t = await fetch("property/data.json")
      let data = await t.json();

      setData(data)
      setbckData(data)
    })()
  }, [])

  if (datafetch == null) {
    return (
      <>
        loading
      </>
    )
  }

  return (
    <>
      <Header />
      <FilterBar setData={setData} bckDate={bckDate} >
        search
      </FilterBar >
      <CardWrapper >
        {
          datafetch.map((item, key) => {
            return (
              <Card key={key} data={item} filterData={filterData} />
            )
          })
        }
      </CardWrapper >
    </>
  )
}

export default Home
