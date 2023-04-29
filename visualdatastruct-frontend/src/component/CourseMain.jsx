
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import {AuthCheckBuilder} from './AuthCheck'
import * as Loader from 'react-loader-spinner'

export default function CourseMain() {
    const location = useLocation();
    const isAuth = location.state;
    const confirm = false;

    useEffect(()=>{
        console.log(location)
    },[])

    if(isAuth === true){
        console.log(location)
        return (
            <div>deneme</div>
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


