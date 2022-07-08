import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { momentsServices } from "../../services/momentsServices";
import {
  ContainerMoments,
  Icon,
  Icons,
  ImageBox,
  ImageImg,
  ImageTitle,
  ImgCont,
  MovieBtn,
  TextContainer,
} from "./Images.styled";

function Images(props) {
  const [moments, setMoments] = useState([])
  useEffect(() => {
    getAllMoments();
  },[]);
  const ellipse = (element) => {
    if (element.length > 20) {
      element = element.substr(0, 20) + "...";
    } return element
  };
  const getAllMoments = () => {
    momentsServices.getAllMoments().then((res) => {
      if (res)setMoments(res);
    });
  };
  return (
    <ContainerMoments>
      {moments ? moments.map((moment, key) => (
        <ImageBox key={key}>
          <ImgCont>
            <Link to={`/Image/${moment.id}`}>
              <Icon>< i className="fa-light fa-x"></i></Icon>
              <ImageImg src={moment.img_Url} alt="imatge" />
              <MovieBtn>
              <Icons><i className="fa-solid fa-star"></i></Icons>
              <Icons><i className="fa-solid fa-trash"></i></Icons>
                <Icons><i className="fa-solid fa-eye"></i></Icons>
                <Icons><i className="fa-solid fa-pen-to-square"></i></Icons>
                <Icons><i className="fa-solid fa-trash-can"></i></Icons>
              </MovieBtn>
            </Link>
          </ImgCont>
          <TextContainer>
            <ImageTitle>{moment.title}</ImageTitle>
            <ImageTitle>{ellipse(moment.descripcion)}</ImageTitle> 
          </TextContainer>
        </ImageBox>
      )):null}
    </ContainerMoments>
  );
}

export default Images;
