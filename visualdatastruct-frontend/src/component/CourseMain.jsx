
import React, { useState } from 'react'
import {useLocation, useNavigate } from 'react-router-dom';
import {AuthCheckBuilder} from './AuthCheck'
import Render from './Content';
import '../css/layout.css';
import '../css/mymodal.css';
import { useEffect } from 'react';
//import * as Loader from 'react-loader-spinner'

import CONTENT_NAME from '../utils/CONTENT_NAME';

export default function CourseMain() {
    const location = useLocation();
    const navigate = useNavigate();
    const isAuth = location.state;

    const [name,] = useState(localStorage.getItem("name"));
    const [surname,] = useState(localStorage.getItem("surname"));
    const [currentContent,setCurrentContent] = useState("content");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=>{
        let modal = document.getElementById("myModal");
        if(modal !== null){
            if(isOpen){
                modal.style.display = "block"; 
            }
            else{
                modal.style.display = "none";
            }
        }
    },[isOpen])

    useEffect(() => {
        console.log(currentContent);
    }, [currentContent])

    const cancel = () =>{
        setIsOpen(false);
    }

    const confirm = () =>{
        localStorage.clear();
        document.getElementById("text-content").textContent = "Çıkış yapılıyor...";
        setTimeout(()=>{navigate("/courseMain")},2000)
    }

    const handleContent = (contentName) => {
        var temp = "";
        Object.assign(temp, currentContent);
        temp = contentName;

        setCurrentContent(contentName);
    }

    if(isAuth === true){
        return (
            <div className="courseMainBody">
                <nav className="container-fluid">
                    <div className="lefttitem">
                        <ul>
                            <li style={{backgroundColor:'blueviolet'}} onClick = {() => {navigate("/freespace")}}>
                                <img src="https://cdn-icons-png.flaticon.com/32/10061/10061724.png" alt='freeSpace' /> 
                                Go To Free Space
                            </li>
                        </ul>
                    </div>
                    <div className="centeritem">
                        <ul>
                            <li onClick={()=>{handleContent(CONTENT_NAME.STACK)}}>
                                <img src="https://cdn-icons-png.flaticon.com/32/2111/2111690.png" alt='Stack' /> 
                                Stack
                            </li>
                            <li onClick={()=>{handleContent(CONTENT_NAME.QUEUE)}}>
                                <img src="https://cdn-icons-png.flaticon.com/32/8201/8201691.png" alt='Queue' /> 
                                Queue
                            </li>
                            <li onClick={()=>{handleContent(CONTENT_NAME.LINKEDLIST)}}>
                                <img src="https://cdn-icons-png.flaticon.com/32/3462/3462381.png" alt='Linked List' /> 
                                Linked List
                            </li>
                            <li onClick={()=>{handleContent(CONTENT_NAME.TREE)}}>
                                <img src="https://cdn-icons-png.flaticon.com/32/4160/4160135.png" alt='Tree' /> 
                                Tree
                            </li>
                            <li onClick={()=>{handleContent(CONTENT_NAME.GRAPH)}}>
                                <img src="https://cdn-icons-png.flaticon.com/32/4858/4858761.png" alt='Graph' /> 
                                Graph
                            </li>
                        </ul>
                    </div>
                    <div className="rightitem ">
                        <ul>
                            <li className="bg-dark" 
                                onClick={()=>{handleContent("profile")}}>
                                <i className="fa fa-user fa-xl"></i>
                                {` ${name} ${surname}`}
                            </li>
                            <li id="logout" 
                                className="bg-danger" 
                                style={{padding:'10px'}}
                                onClick={()=>{setIsOpen(true)}}>
                                Log Out
                            </li>
                        </ul>
                    </div>
                </nav>
                <div>
                    <Render contentName = {currentContent}/>
                    {isOpen
                        ?
                        <div id="myModal" class="modal container-fluid">
                            <div class="modal-content">
                                <span class="close" onClick={()=>{setIsOpen(false)}}>&times;</span>
                                <center id="text-content">Çıkış yapmak istediğinize emin misiniz?</center>
                                <div className='buttons'>
                                    <button className='btn-danger' onClick={cancel}>İptal Et</button>
                                    <button className='btn-alert' onClick={confirm}>Çıkış Yap</button>
                                </div>
                            </div>  
                        </div>
                        :
                        <></>
                    }
                </div>
            </div>
        )
    }
    

    /*else if((isAuth === undefined))
    {
        
        return(
            <Loader.TailSpin
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
            />
        )
    }*/

    else{

        return (AuthCheckBuilder("/courseMain"))
    }
}


