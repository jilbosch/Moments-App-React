
import styled from "styled-components";
export const ContainerMoments = styled.div`
  display: flex;
  flex-wrap:wrap;
  padding-top: 10%;
  width: 90%;
  /* justify-content:space-evenly; */
  @media (max-width:600px){
  padding-top: 20%;

  }
`;

export const ImageBox = styled.div`
  display: flex;
  width: 25%;
  height:20%;
  flex-direction: column;
  margin: 2% 1.66%;
  
  @media (max-width:600px){
    width:100%;
    align-items: center;
    justify-content: center};
`;
export const TextContainer = styled.div`
display: center;
align-items: center;
padding: 30px;

@media (max-width:600px){
  padding-top:20px;
  
}
`;

export const MomentBtn = styled.div`
position: absolute;
color: white;
display:flex;
justify-content: space-around;
align-items:center;
top:80%;
left:26%;
font-size: 40px;
@media (max-width:600px){
top:80%;
left:25%;
}
`;
export const ImgCont = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
@media (max-width:600px){
    grid-template-columns:90%;
    justify-content: center};
`;
export const ImageImg = styled.img`
  object-fit: cover;
  width: 100%;
  height:100%;
  border-radius: 3vw;
  opacity: 1;
  filter: alpha(opacity=100);
  background: url(http://www.corelangs.com/css/box/img/duck.png) no-repeat;
  &:hover {
    opacity: 0.3;
    filter: alpha(opacity=30);
  }
`;

export const ImageTitle = styled.h1`
color: white;
`;

export const TitleDescripcion =styled.h3  `
color: white;
`

 
export const Icons = styled.div`
margin: 8px;
text-decoration:none;
color: white;
font-size: 30px;
@media (max-width:600px){
font-size: 20px;
}

`;
export  const Icon = styled.div `
position: absolute;
color:white;
top:5%;
left:90%;
font-size: 30px;
@media (max-width:600px){
top:3%;
left:90%;
}
`;

export const MiModal= styled.div`
position:fixed;
z-index:100;
top:3%;
left:20%;
opacity:1;
pointer-events:auto;
@media(max-width:600px){
top:10%;


  
}`;

export const Modalcontenido = styled.div `
background-color: white, solid ;
width:600px;
padding: 10px 20px;
/* margin: 20% auto; */
position: relative;
animation: show 1s .5s backwards;
@media(max-width:600px){
width:400px;}`;

export const CreateButon = styled.button`
position:fixed;
top:90%;
left:50%;
width: 50px;
height:50px;
background-color: #903095;
border-radius: 15vw;
border: none;
z-index:100;
display: flex;
align-items: center;
opacity: 80%;
@media (max-width:600px){
margin: 5px;
top: 95%;
left:40%;}
`
;

