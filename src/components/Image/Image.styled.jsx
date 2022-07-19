import styled from "styled-components"

export const PageContainer = styled.div`
display:flex;
`;

export const TextContainer = styled.div`
color: white;
width: 40%;
height:100%;
overflow: hidden;
@media(max-width: 600px){
width: 70%;

}`;

export const ImageContainer = styled.div`

color: rgb(255, 255, 255);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 25px;
width: 40%;
height:100%;
@media(max-width: 600px){
width: 70%;
}
`;
export const Img = styled.img`
object-fit: cover;
width: 100%;
height: 100%;
border-radius:2vw;`;

export const ImageInfo = styled.div`
display:flex;
justify-content: space-evenly;
@media(max-width: 600px){
display:flex;
flex-direction: column;
}`;
            
 