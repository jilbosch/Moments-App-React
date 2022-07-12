import React from 'react'
import { useState } from 'react'
export function Form (){

const [newMoment,setNewMoment] = useState ({title:"",description:"",img_Url:""})
const [editMode,setEditMoment] = useState ({})
const inputChange = (e) => {
const name = e.target.name;
const value = e.target.value;
setNewMoment( { ...newMoment,[name]:value});
}
const handleSubmit = (e) => {
// e.preventDefault();
// !editMode?
// props.addMoment(newMoment):
// props.updateMoment(newMoment)
// resetInputsForm(e)};
}
const resetInputsForm = (e) => {
    e.target.title.value = ""
    e.tareget.description.value=""
    e.target.img_Url.value = ""
}
  return (
    <form onSubmit={handleSubmit}>
    <input name="title" onChange={inputChange} type="text" id="title" value={newMoment.title} placeholder="Title" />
    <input name="description" onChange={inputChange} type="text" id="description" value={ newMoment.age} placeholder="description" /> 
    <input name="img_Url" onChange={inputChange} type="url" id="img_Url" value={newMoment.img_Url} placeholder="Image" />
    {editMode?
    <button type="submit">Edit</button>:
    <button type="submit">Add</button>}
  </form>
  )
}

