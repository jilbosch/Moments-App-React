import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {Button} from '@mui/material';
import { momentsServices } from "../../services/momentsServices";

export default function Image () {

const [moments, setMoments] = useState ({});
const {id} = useParams ();

useEffect (()=>{
    momentId(id);
},[id])

const momentId = (id) => {
    momentsServices.getMomentsById(id). then (res =>{
        setMoments (res)
    } 
    )}
    return (

<PageContainer> 
<Link to="/"><Button>atras</Button></Link>
    <ImageInfo>
        <TextContainer>
            <img src={moments.imgUrl} alt={moments.title} />
        </TextContainer>
        <ImageContainer>
            <h1>{moments.title}</h1>
            <h2>{moments.description}</h2>
        </ImageContainer>
    </ImageInfo>
</PageContainer>)}

