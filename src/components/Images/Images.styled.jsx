
import styled from "styled-components";
export const ContainerMoments = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 6%;
  width: 90%;
  justify-content: center;
`;

export const ImageBox = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  margin: 9%;
  margin-left: 3%;
  margin-bottom: 2%;
`;
export const TextContainer = styled.div``;
export const MovieBtn = styled.div`
position: absolute;
color: white;
display:flex;
justify-content: space-around;
align-items:center;
top:95%;
left:45%;
`;
export const ImgCont = styled.div`
  height: 90%;
  position: relative;
`;
export const ImageImg = styled.img`
  object-fit: cover;
  width: 300px;
  height:500px;
  border-radius: 3vw;
  opacity: 1;
  filter: alpha(opacity=100);
  background: url(http://www.corelangs.com/css/box/img/duck.png) no-repeat;
  &:hover {
    opacity: 0.3;
    filter: alpha(opacity=30);
  }
`;

export const ImageTitle = styled.h2`
color: white`;

  

