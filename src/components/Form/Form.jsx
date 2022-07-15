import React from 'react'
import { useState } from 'react'
export function Form (props){

const [newMoment,setNewMoment] = useState (props.editedMoment)
const [editMode,setEditMoment] = useState (props.editMode)
const inputChange = (e) => {
const name = e.target.name;
const value = e.target.value;
setNewMoment( { ...newMoment,[name]:value});
}
const handleSubmit = (e) => {
e.preventDefault();
if (newMoment.title.length > 0) {
  !editMode
    ? props.addMoment(newMoment)
    : props.updateMoment(newMoment);
}
resetInputsForm();
}

const resetInputsForm = (e) => {
  setNewMoment({
    moment: {
      title: "",
      img_Url: "",
      descripcion: "",
    },
  });
}
  return (
    <form onSubmit={handleSubmit}>
    <input name="title" onChange={inputChange} type="text" id="title" value={newMoment.title} placeholder="Title" />
    <input name="descripcion" onChange={inputChange} type="text" id="descripcion" value={ newMoment.descripcion} placeholder="descripcion" /> 
    <input name="img_Url" onChange={inputChange} type="url" id="img_Url" value={newMoment.img_Url} placeholder="Image" />
    {editMode?
    <button type="submit">Edit</button>:
    <button type="submit">Add</button>}
  </form>
  )
}

