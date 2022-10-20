import styled from "styled-components";

import { ReactComponent as Banner } from "../../assets/svg/banner.svg"
import { ReactComponent as Area } from "../../assets/svg/area.svg"
const Cardbox = styled.div`
    margin: 50px 50px;
`;
const ImageWrapper = styled.div`
width: 250px;
`;
const TextCardWrapper = styled.div`

position:relative;
    box-shadow: rgb(26 35 26 / 13%) 1px 1px 1px 1px;
-webkit-border-bottom-right-radius: 10px;
-webkit-border-bottom-left-radius: 10px;
-moz-border-radius-bottomright: 10px;
-moz-border-radius-bottomleft: 10px;
border-bottom-right-radius: 10px;
border-bottom-left-radius: 10px;
width:250px;
`;
const BannerSvg = styled(Banner)`
left:-20px;
position:absolute;
width:150px;
height:150px;
  bottom: 100px;
`;

const PriceIconWrapper = styled.div`
display: flex;
    justify-content: space-between;
  padding-inline: 0.7rem;

padding-top:1rem
`;
const PriceTag = styled.span`
color :rgb(131,121,178);
font-weight: 800;
font-size:1rem;
`;
const TitleTextWrapper = styled.div`
padding-block: 0.4rem;
    padding-inline: 0.7rem;
font-weight:900;
font-size: 1.2rem;
`;
const LocationWrapper = styled.div`
/* display:flex; */
    padding-inline: 0.7rem;
padding-block: 0.4rem;
    padding-inline: 0.7rem;
white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: hsl(0deg 8% 35%);
    font-weight: 500;
}
`;
const DiscriptionWrapper = styled.div`
padding:10px;
font-size:0.9rem;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-evenly;
`;
const Imgbox = styled.img`

width: 100%;
    height: 100%;
    object-fit: contain;
-webkit-border-top-left-radius: 10px;
-webkit-border-top-right-radius: 10px;
-moz-border-radius-topleft: 10px;
-moz-border-radius-topright: 10px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;

`
const Month = styled.span`
color:grey;
  font-size:0.8rem;
font-weight: 600;
`;
const AreaSvg = styled(Area)`

`;

export {
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
}
