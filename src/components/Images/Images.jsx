import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { momentsServices } from "../../services/momentsServices";
import { Form } from "../Form/Form";
import {
  ContainerMoments,
  CreateButon,
  Icon,
  Icons,
  ImageBox,
  ImageImg,
  ImageTitle,
  ImgCont,
  MiModal,
  Modal,
  Modalcontenido,
  MomentBtn,
  TextContainer,
} from "./Images.styled";

function Images() {
  const [moments, setMoments] = useState([])
  useEffect(() => {
    getAllMoments();
  },[]);
  const [viewform,setViewform] = useState([])
  const [editedMoment, setEditedMoment] = useState ({title:"",descripcion:"",img_Url:""})
  const [editMode,setEditMode] = useState([])
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
  const addMoment = (data) => {
    momentsServices.createMoments(data).then (res =>{
      setMoments([...moments,res]);
      openForm();})}

  const openForm = () => {
    if (viewform) setViewform(false);
    else setViewform(true);
    setEditMode(false);}

    const editMoment = (id) => {
      openForm();
      let editedMoment =moments.find((moments) => moments.id === id);
      setEditedMoment(editedMoment)
      setEditMode(true)}
    
      const updateMoment = (newMoment) => {
        momentsServices.updateMoments(newMoment.id, newMoment).then((res) => {
          let momentToEdit = moments.map((moment) =>
            moment.id === newMoment.id ? newMoment : moment
          );
          setMoments(momentToEdit);
        });
    
        openForm();
      };

  const deleteMoments = (id) => {
    let deleteConfirmed = window.confirm("segur que vols esborrar?");
    if (!deleteConfirmed) return;
    let filterMoments =moments.filter((moment) => moment.id !== id);
    momentsServices.deleteMoments(id).then (res => {
      if (res.id== id)
      setMoments(filterMoments);
    })}
  return (<>
    <Modal></Modal>
<MiModal>
  <Modalcontenido>
    <a href="#"></a>
    {viewform ? <Form addMoment={addMoment}editedMoment={editedMoment}updateMoment={updateMoment}editMoment={editMoment} /> : ""}
  </Modalcontenido>  
</MiModal>
    <ContainerMoments>
      <CreateButon onClick={()=>openForm()}>Create</CreateButon>
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
                <Icons onClick={()=>editMoment(moment.id) }><i className="fa-solid fa-pen-to-square"></i></Icons>
                <Icons onClick={()=>deleteMoments(moment.id) }><i className="fa-solid fa-trash-can"></i></Icons>
              </MomentBtn>
          </ImgCont>
          <TextContainer>
            <ImageTitle>{moment.title}</ImageTitle>
            <ImageTitle>{ellipse(moment.descripcion)}</ImageTitle> 
          </TextContainer>
        </ImageBox>
      )):null}

    </ContainerMoments></>
  );
}

export default Images;
