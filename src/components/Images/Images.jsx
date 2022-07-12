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
  MomentBtn,
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

  const deleteMoments = (id) => {
    let deleteConfirmed = window.confirm("segur que vols esborrar?");
    if (!deleteConfirmed) return;
    let filterMoments =moments.filter((moment) => moment.id !== id);
    momentsServices.deleteMoments(id).then (res => {
      if (res.id== id)
      setMoments(filterMoments);
    })}
  return (
    <ContainerMoments>
      {moments ? moments.map((moment, key) => (
        <ImageBox key={key}>
          <ImgCont>
              <Icon>< i className="fa-light fa-x"></i></Icon>
              <ImageImg src={moment.img_Url} alt="imatge" />
              <MomentBtn>
              <Icons><i className="fa-solid fa-star"></i></Icons>
              <Link to={`/Image/${moment.id}`}>
                <Icons><i className="fa-solid fa-eye"></i></Icons>
                </Link>
                <Link to={`/Form/`}>
                <Icons><i className="fa-solid fa-pen-to-square"></i></Icons>
                </Link>
                <Icons onClick={()=>deleteMoments(moment.id) }><i className="fa-solid fa-trash-can"></i></Icons>
              </MomentBtn>
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
