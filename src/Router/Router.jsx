import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import App from "../App";
import { Form } from "../components/Form";
import Image from "../components/Image/Image";

export default function Router () {

return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element ={<App/>} />
            <Route path="/Image/:id" element = {<Image/>} />
            <Route path="/Form/" element = {<Form/>}/>
        </Routes>
    </BrowserRouter>
    )
}
