import styled from "styled-components";

export const ContainerNav = styled.div`
position: fixed;
z-index:100;
display: flex;
align-items: center;
justify-content: space-between; 
max-width: 1600px;  
margin:0 auto;
width: 100%;
`;

export const DivWrapper = styled.div `
justify-content: space-between;
display:flex;
color: #b4b1b1;
text-align: center;
padding: 14px 16px;
text-decoration: none;
font-size: 17px;
width: 100%;
`;

export const Logo = styled.img `
display:flex;
vertical-align: middle;
width: 15%;
@media (max-width:600px){
width: 30%;
}
`;

export const ContainerButtons = styled.div`
display: flex;
align-items: center;
justify-content:space-between; 
max-width: 1600px;  
margin-right: 5%;
width:20%;
@media (max-width:600px){
margin-right: 40%;
}
`
export const Button1 = styled.button`
background-color: #903095;
border-radius: 50vw;
padding: 2%;
border: none;
@media (max-width:600px){
padding:5%;
margin: 5px;
}
`
export  const Icon = styled.div `
position: absolute;
color:white;
top:35%;
left:60%;
font-size: 30px;
@media (max-width:600px){
top:3%;
left:90%;
}
`;
