import React, { useEffect, useState } from 'react'
import '../css/content.css'
import {Course} from '../model/Course';
import CourseSourceFactory from './CourseSource';



export function Content() {
    const [name] = useState(localStorage.getItem("name"));
    const [surname] = useState(localStorage.getItem("surname"));

    return (      
        <div className='bg'>
            <div className="middle">
              <h1>{` Hoş geldin ${name} ${surname}`}</h1>
              <h2>{`Yukardan bir kurs seç ve hemen öğrenmeye başlayalım`}</h2>
              <hr />
              <p>-VisualDataStructureCourse-</p>
            </div>
        </div>
    )
}

export function Profile(){
    return (
        <div>profile</div>
    )
}



function Render(courseName){
    const [course,setCourse] = useState(new Course(0))
    const [currentSection,setCurrentSection]= useState();
    const [sectionIndex,setSectionIndex] = useState(0);
    const [confirm,setConfirm] = useState(false);

    const isItCourse=()=>{
        console.log(courseName+"çalışti")
        return (courseName !== "profile" && courseName !== "content");
    }

    useEffect(()=>{
       if(isItCourse()){
            async function fetchData(){
                await CourseSourceFactory(courseName).then((res)=>{
                    setCourse(res);
                    console.log("deneme");
                })
            }   

            fetchData();
       }
    },[courseName])

   
    useEffect(()=>{
        if(course.id!== 0){
            let section=course.sections[0];
            setSectionIndex(0);
            setCurrentSection(section);
        }
    },[course])

    useEffect(()=>{
        if(currentSection !== undefined){
            setCurrentSection(course.sections[sectionIndex]);
            document.getElementById("section"+sectionIndex).style.border =  "4px solid purple";
        }
            
    },[sectionIndex])

    useEffect(()=>{
        if(currentSection !== undefined){
            setConfirm(true);
        }
            
    },[currentSection])

    

    const forwardPage = () => {
        const newIndex=sectionIndex+1;
        if( !(newIndex >= course.sections.length) ){
            document.getElementById("section"+sectionIndex).style.border = "none";
            setSectionIndex(newIndex);
        }
            
    }

    const backwardPage = () => {
        const newIndex = sectionIndex-1;
        if( !(newIndex < 0)){
            document.getElementById("section"+sectionIndex).style.border = "none";
            setSectionIndex(newIndex);
        }
    }

    const handleSectionSelect = (e,index)=>{
        setCurrentSection(course.sections[index]);
        document.getElementById("section"+sectionIndex).style.border = "none";
        setSectionIndex(index);
    }

    if(courseName === "profile"){
        return <Profile/>
    }
    else if(courseName === "content"){
        return <Content/>
    }
    if(!confirm){
        return(
            <div>Loading</div>
        )
    }
    else{
        
        return (
        <div className="sidebar">
    
            <ul className="sidelist">
                <h1 className="align-center">{course.name}</h1>
                {course.sections.map((element,index)=>{
                    return (
                        <li id = {`section${index}`} className="glow-on-hover" key={index} onClick={(e) => handleSectionSelect(e,index)}>{element.title}</li>
                    )
                    })
                }
                
            </ul>
            <div className="content textcontent">
                <h2>{currentSection.title}</h2>
                <p>{currentSection.contentText}</p>
                <button onClick={()=>{backwardPage()}}><i className="fa fa-play" style={{fontsize:'3rem', transform: 'scaleX(-1)'}}></i></button>
                <button onClick={()=>{forwardPage()}} className='rightitem'><i className="fa fa-play" style={{fontsize:'3rem'}}></i></button>
            </div>
            <ul className="content">
                <li>
                    {currentSection.imagePaths.map((path)=>{//fix picture
                        return (
                            <img key={path} src={path} width={256} height={256}></img>
                        )
                    })}
                </li>
                
            </ul>
        </div>
        )
    }
   
    
}


export default function ContentFactory(course){
    return Render(course);
}
