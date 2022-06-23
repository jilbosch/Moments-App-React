import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { momentsServices } from '../../services/momentsServices'
import { ContainerMoments, ImageBox, ImageImg, ImageTitle, ImgCont, MovieBtn, TextContainer } from './Images.styled'

function Images() {
  const [moments,setMoments] = useState ([]);
 useEffect(()=>{
  getAllMoments();
 })
  const getAllMoments= () => {
    momentsServices.getAllMoments().then((res)=>{
      setMoments(res);
    })
    
  }
  return (
    <ContainerMoments>
{moments.map((moment,key)=>(
<ImageBox key = {key}>
        <ImgCont>
          <Link to={`/Image/${moment.id}`}><ImageImg src={moment.imgUrl} alt="imatge" /></Link>
        </ImgCont>
        <TextContainer>
          <ImageTitle>{moment.title}</ImageTitle>
          <ImageTitle>{moment.descripcion}</ImageTitle>
          <MovieBtn>
            {/* <button onClick={() => props.editImage(Image.id)} className="btn-edit">✏️</button>
            <button onClick={() => props.deleteImage(Image.id)} */}
              {/* className="btn-danger">🗑️</button> */}
            <i className="star">⭐</i>
          </MovieBtn>
        </TextContainer>
</ImageBox>))}

</ContainerMoments>
      )}


export default Images