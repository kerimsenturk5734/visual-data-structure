
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
    const [currentCourse,setCurrentCourse] = useState();

    if(isAuth === true){
        console.log(location)
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
                            <li onClick={()=>{setCurrentCourse("stack")}}><img src="https://cdn-icons-png.flaticon.com/32/2111/2111690.png" alt='Stack' /> Stack</li>
                            <li onClick={()=>{setCurrentCourse("queue")}}><img src="https://cdn-icons-png.flaticon.com/32/8201/8201691.png" alt='Queue' /> Queue</li>
                            <li onClick={()=>{setCurrentCourse("linkedlist")}}><img src="https://cdn-icons-png.flaticon.com/32/3462/3462381.png" alt='Linked List' /> Linked List</li>
                            <li onClick={()=>{setCurrentCourse("tree")}}><img src="https://cdn-icons-png.flaticon.com/32/4160/4160135.png" alt='Tree' /> Tree</li>
                            <li onClick={()=>{setCurrentCourse("graph")}}><img src="https://cdn-icons-png.flaticon.com/32/4858/4858761.png" alt='Graph' /> Graph</li>
                        </ul>
                    </div>
                    <div className="rightitem ">
                        <ul>
                            <li className="bg-dark"><i className="fa fa-user fa-xl"></i>{` ${name} ${surname}`}</li>
                            <li id="logout" className="bg-danger" style={{padding:'10px'}}>Log Out</li>
                        </ul>
                    </div>
                </nav>
                <div>
                    {ContentFactory(currentCourse)};
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


