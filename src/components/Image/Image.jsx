import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { momentsServices } from "../../services/momentsServices";
import{ PageContainer, ImageInfo, TextContainer, ImageContainer} from "../Image/Image.styled";

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
        <TextContainer>
            <img src={moment.img_Url} alt={moment.title} />
        </TextContainer>
        <ImageContainer>
            <h1>{moment.title}</h1>
            <h2>{moment.description}</h2>
        </ImageContainer>
    </ImageInfo>
</PageContainer>)}

