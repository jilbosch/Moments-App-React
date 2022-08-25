import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { momentsServices } from "../../services/momentsServices";
import { Form } from "../Form/Form";
import {
  ContainerMoments,CreateButon,Icon,Icons,ImageBox,ImageImg,ImageTitle,ImgCont,MiModal,Modalcontenido,MomentBtn,TextContainer,TitleDescripcion,} from "./Images.styled";

function Images() {
  const [moments, setMoments] = useState([])
  const [viewform,setViewform] = useState(false)
  const [editedMoment, setEditedMoment] = useState ({title:"",descripcion:"",img_Url:""})
  const [editMode,setEditMode] = useState(false)
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
    setMoments(res);
    });
  };
  const resetInputsForm = (e) => {
    setEditedMoment({
      title: "",
      id: "",
      img_Url: "",
      descripcion: "",
    });
  };
  const addMoment = (dataMoments) => {
    momentsServices.createMoments(dataMoments).then ((res) =>{
      setMoments([...moments,res]);
      });
    setViewform(false);
    }


  const openForm = () => {
    if (viewform) setViewform(false);
    else setViewform(true);
    resetInputsForm();
    setEditMode(false);}

    const editMoment = (id) => {
      openForm();
      let editedMoment =moments.find((moment) => moment.id === id);
      setEditedMoment(editedMoment)
      setEditMode(true)}
    
      const updateMoment = (newMoment) => {
        momentsServices.updateMoments(newMoment.id, newMoment).then((res) => {
          let editedMoment = moments.map((moment) =>
            moment.id === newMoment.id ? newMoment : moment
          );
          setMoments(editedMoment);
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
        <MiModal>
        <Modalcontenido>
    <a href="#"></a>
    {viewform ? <Form addMoment={addMoment}editedMoment={editedMoment}updateMoment={updateMoment}editMode={editMode} /> : ""}
  </Modalcontenido>  
</MiModal>
    <ContainerMoments>
      <CreateButon onClick={()=>openForm()}>Create</CreateButon>
      {moments ? moments.map((moment, key) => (
        <ImageBox key={key}>
          <ImgCont>
              <Icon>< i className="fa-light fa-x"></i></Icon>
              <ImageImg src={moment.imgUrl} alt="imatge" />
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
            <TitleDescripcion>{ellipse(moment.descripcion)}</TitleDescripcion> 
          </TextContainer>
        </ImageBox>
      )):null}

    </ContainerMoments></>
  );
}

export default Images;
