import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { momentsServices } from "../../services/momentsServices";
import {
  ContainerMoments,
  ImageBox,
  ImageImg,
  ImageTitle,
  ImgCont,
  MovieBtn,
  TextContainer,
} from "./Images.styled";

function Images() {
  const [moments, setMoments] = useState([]);
  useEffect(() => {
    getAllMoments();
  });
  const getAllMoments = () => {
    momentsServices.getAllMoments().then((res) => {
      setMoments(res);
    });
  };
  return (
    <ContainerMoments>
      {moments.map((moment, key) => (
        <ImageBox key={key}>
          <ImgCont>
            <Link to={`/Image/${moment.id}`}>
              <i className="fa-light fa-x"></i>
              
              <ImageImg src={moment.imgUrl} alt="imatge" />
              <MovieBtn>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-trash"></i>
                <i className="fa-solid fa-eye"></i>
                <i className="fa-solid fa-pen-to-square"></i>
                <i className="fa-solid fa-trash-can"></i>
              </MovieBtn>
            </Link>
          </ImgCont>
          <TextContainer>
            <ImageTitle>{moment.title}</ImageTitle>
            <ImageTitle>{moment.descripcion}</ImageTitle>
          </TextContainer>
        </ImageBox>
      ))}
    </ContainerMoments>
  );
}

export default Images;
