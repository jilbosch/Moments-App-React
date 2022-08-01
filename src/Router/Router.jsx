import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import App from "../App";
import Image from "../components/Image/Image";
import { Search } from "../components/Search";

export default function Router () {

return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element ={<App/>} />
            <Route path="/Image/:id" element = {<Image/>} />
            <Route path="/Search" element = {<Search/>} />
        </Routes>
    </BrowserRouter>
    )
}
