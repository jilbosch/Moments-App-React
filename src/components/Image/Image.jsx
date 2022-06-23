import React from "react";
import { Link } from "react-router-dom";

function Image () {

<PageContainer> 
<Link to="/"><Button>atras</Button></Link>
    <ImageInfo>
        <TextContainer>
            <img src={moment.imgUrl} alt={moment.title} />
        </TextContainer>
        <ImageContainer>
            <h1>{moment.title}</h1>
            <h2>{moment.description}</h2>
        </ImageContainer>
    </ImageInfo>
</PageContainer>}

export default Image