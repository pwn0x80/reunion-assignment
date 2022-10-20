import {
  Wrapper,
  Input
} from "./Header.styles"

const Header = () => {
  return (
    <Wrapper>
      <div style={{ flex: "0.8" }} >
      </div>
      <h1> Search Properties Rent</h1>
      <div style={{ flex: "1" }} >
      </div>
      <span  >
        <Input placeholder="Search with Search Bar" />
      </span>
      <div style={{ flex: "0.8" }} >
      </div>
    </Wrapper>

  )
}

export default Header
