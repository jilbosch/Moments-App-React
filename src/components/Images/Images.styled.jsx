
import styled from "styled-components";
export const ContainerMoments = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 3%;
  width: 90%;
  justify-content: center;
`;

export const ImageBox = styled.div`
  display: flex;
  width: 5%;
  flex-direction: column;
  margin: 9%;
  margin-left: 3%;
  margin-bottom: 2%;
  @media (max-width:600px){
    width:90%;
    align-items: center;
    justify-content: center};
    margin-left: 18%;
    margin-top:15%;`;
export const TextContainer = styled.div`
@media (max-width:600px){
  padding-top:20px;
}
`;

export const MovieBtn = styled.div`
position: absolute;
color: white;
display:flex;
justify-content: space-around;
align-items:center;
top:90%;
left:50%;
font-size: 30px;
@media (max-width:600px){
top:90%;
left:10%;
}
`;
export const ImgCont = styled.div`
  height: 90%;
  position: relative;
@media (max-width:600px){
    grid-template-columns:90%;
    justify-content: center};
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
color: white;
`;

 
export const Icons = styled.div`
margin: 8px;
`;
export  const Icon = styled.div `
position: absolute;
color:white;
top:3%;
left:280%;
font-size: 30px;
@media (max-width:600px){
top:3%;
left:90%;
}


`

  

