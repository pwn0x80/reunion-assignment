import { SlEnvolopeLetter } from "react-icons/sl"
import {
  Btn,
  DropDownbtn,
  AccountBtn,
  Wrapper
} from "./TopBar.styles"
const TopBar = () => {
  return (
    <Wrapper>
      <div>
        <SlEnvolopeLetter color="hsl(250deg 100% 75%)" />
        <Btn>
          Rent
        </Btn>
        <Btn>
          Buy
        </Btn>
        <Btn>
          Sell
        </Btn>
        <DropDownbtn>
          Manage Property
        </DropDownbtn>
        <DropDownbtn>
          Resources
        </DropDownbtn>
      </div>
      <div>
        <AccountBtn>
          Login
        </AccountBtn>
        <AccountBtn style={{ color: 'white', backgroundColor: "#7065f0" }}>
          Logout
        </AccountBtn>

      </div>
    </Wrapper >
  )
}
export default TopBar
