import { FcLike } from 'react-icons/fc'
import { IoBedOutline } from 'react-icons/io5'
import { TbBath } from 'react-icons/tb'
import {
  Cardbox,
  ImageWrapper,
  TextCardWrapper,
  BannerSvg,
  PriceIconWrapper,
  PriceTag,
  TitleTextWrapper,
  LocationWrapper,
  DiscriptionWrapper,
  Imgbox,
  Month,
  AreaSvg

} from "./Card.styles";
const Card = ({ data }) => {
  return (
    <Cardbox>
      <ImageWrapper>
        <Imgbox src={`./property/${data.image}`} />
      </ImageWrapper>
      <TextCardWrapper>
        <BannerSvg />
        <PriceIconWrapper>
          <PriceTag>${data.price}<Month>/month </Month>
          </PriceTag>
          <span><FcLike style={{ color: "white", fontSize: "1.5em" }} /> </span>
        </PriceIconWrapper>
        <TitleTextWrapper>
          {data.city}
        </TitleTextWrapper>
        <LocationWrapper>
          {data.address}
        </LocationWrapper>
        <hr />
        <DiscriptionWrapper>
          <IoBedOutline color="hsl(250deg 100% 75%)" /> {data.beds} beds <TbBath color="hsl(250deg 100% 75%)" /> {data.baths} bathdroom <AreaSvg /> {data.floorspace}
        </DiscriptionWrapper>

      </TextCardWrapper>
    </Cardbox >
  )
}
export default Card
