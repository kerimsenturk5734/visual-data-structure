
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import {AuthCheckBuilder} from './AuthCheck'
import ContentFactory from './Content';
import '../css/layout.css'
//import * as Loader from 'react-loader-spinner'

export default function CourseMain() {
    const location = useLocation();
    const isAuth = location.state;

    const [name,] = useState(localStorage.getItem("name"));
    const [surname,] = useState(localStorage.getItem("surname"));
    const [currentContent,setCurrentContent] = useState("content");

    if(isAuth === true){
        return (
            <div className="courseMainBody">
                <nav className="container-fluid">
                    <div className="lefttitem">
                        <ul>
                            <li style={{backgroundColor:'blueviolet'}}>
                                <img src="https://cdn-icons-png.flaticon.com/32/10061/10061724.png" alt='freeSpace' /> 
                                Go To Free Space
                            </li>
                        </ul>
                    </div>
                    <div className="centeritem">
                        <ul>
                            <li onClick={()=>{setCurrentContent("stack")}}>
                                <img src="https://cdn-icons-png.flaticon.com/32/2111/2111690.png" alt='Stack' /> 
                                Stack
                            </li>
                            <li onClick={()=>{setCurrentContent("queue")}}>
                                <img src="https://cdn-icons-png.flaticon.com/32/8201/8201691.png" alt='Queue' /> 
                                Queue
                            </li>
                            <li onClick={()=>{setCurrentContent("linkedlist")}}>
                                <img src="https://cdn-icons-png.flaticon.com/32/3462/3462381.png" alt='Linked List' /> 
                                Linked List
                            </li>
                            <li onClick={()=>{setCurrentContent("tree")}}>
                                <img src="https://cdn-icons-png.flaticon.com/32/4160/4160135.png" alt='Tree' /> 
                                Tree
                            </li>
                            <li onClick={()=>{setCurrentContent("graph")}}>
                                <img src="https://cdn-icons-png.flaticon.com/32/4858/4858761.png" alt='Graph' /> 
                                Graph
                            </li>
                        </ul>
                    </div>
                    <div className="rightitem ">
                        <ul>
                            <li className="bg-dark" 
                                onClick={()=>{setCurrentContent("profile")}}>
                                <i className="fa fa-user fa-xl"></i>
                                {` ${name} ${surname}`}
                            </li>
                            <li id="logout" 
                                className="bg-danger" 
                                style={{padding:'10px'}}
                                onClick={()=>{}}>
                                Log Out
                            </li>
                        </ul>
                    </div>
                </nav>
                <div>
                    {ContentFactory(currentContent)};
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


