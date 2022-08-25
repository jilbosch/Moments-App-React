import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formulari } from "./FormRegister.styled";

export const FormRegister = () => {
    
    const [name , setName] = useState('');
    const [email , setEmail] = useState ('');
    const [password , setPassword] = useState ('');
    const [confPassword , setConfPassword] = useState ('');

    const navigate = useNavigate () ;

    const handleChange = (e) => {
        setName (e.target.value);
    }
    
    const handleEmailChange = (e) => {
        setEmail (e.target.value);
    }

    const handlePasswordChange  = (e) => {
        setPassword (e.target.value);
    }

    const handleConfPassordChange = (e) => {
        setConfPassword (e.target.value);
    }

    const handleSubmit = (e) => {
        if (password!=confPassword)
        {
         alert("La contrasenya no es correcte");   
        }

        else {
            alert(`formulari enviat com a : "${name}"`);
        }

        e.preventDefault();
    }
    return (
        <div>
        <Formulari>

        <form onSubmit={(e) => {handleSubmit(e)}}>

        <h3>Register </h3>
            <label>
            Nom:
            </label><br/>
            <input type="text" value={name}required onChange={function (e) {handleChange(e);}}/><br/>

            <label>
            Email:    
            </label><br/>
            <input type="email" value={email}required onChange={function (e) {handleEmailChange(e);}}/><br/>       
        
            <label>
             Contrasenya:   
            </label><br/>
            <input type="password" value={password}required onChange={function (e) {handlePasswordChange(e);}}/><br/>   
        
            <label>
             Confirmar Contrasenya:   
            </label><br/>
            <input type="password" value={confPassword}required onChange={function (e) {handleConfPassordChange(e);}}/><br/>   
        
            <input type="submit" value= "Submit"/>
            </form>
        </Formulari>
        </div>
       
    );
}