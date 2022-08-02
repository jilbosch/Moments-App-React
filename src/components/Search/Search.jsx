import React, { useEffect } from "react";
import { useState } from "react";
import { momentsServices } from "../../services/momentsServices";
import { ContainerMoments, ImageBox, Img, SearchImg} from "./Search.styled";


export const Search =()=>{
  const [searchField,setSearchField]= useState('');
  const [filteredMoments,setFilteredMoments] = useState ([]);
  const [moments,setMoments] = useState([]); 

  useEffect(() => {
    getAllMoments();
  },[]);

  const getAllMoments = () => {
    momentsServices.getAllMoments().then((res) => {
    setMoments(res);
    });
  };
  const search = (data) => {
    momentsServices.getBySearch(data).then((res)=>{
    if (res){setFilteredMoments(res)}
    });
  } 


const handleChange = e => {
  setSearchField(e.target.value);
  search(searchField);
};

return(
  <>
  
  <input typeof="searchField" value={searchField}name="searchField"onChange={handleChange}/>
  <ContainerMoments>
  <ImageBox>
{filteredMoments.map((moments, key)=>(<SearchImg><Img src= {moments.img_Url}></Img></SearchImg>))}
</ImageBox>
</ContainerMoments></> 
)
}
