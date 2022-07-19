import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { momentsServices } from "../../services/momentsServices";
import{ PageContainer, ImageInfo, TextContainer, ImageContainer, Img} from "../Image/Image.styled";

export default function Image () {

const [moment, setMoment] = useState ([]);
const {id} = useParams ();

useEffect (()=>{
    momentId(id);
},[])

const momentId = (id) => {
    momentsServices.getMomentsById(id). then (res =>{
        setMoment (res)
    } 
    )}
    return (

<PageContainer> 
<Link to="/"><Button>atras</Button></Link>
    <ImageInfo>
        <ImageContainer>
            <Img src={moment.img_Url} alt={moment.title} />
        </ImageContainer>
        <TextContainer>
            <h1>{moment.title}</h1>
            <h2>{moment.descripcion}</h2>
        </TextContainer>
    </ImageInfo>
</PageContainer>)}

