import React, { useEffect, useState } from 'react'
import '../css/content.css'
import {Course} from '../model/Course';
import StackSource from '../course_sources/stack';

function Content() {
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

function Stack(){
    return Render();
}

function LinkedList(){
    return (
        <div>LinkedList</div>
    )
}

function Tree(){
    return (
        <div>Tree</div>
    )
}

function Profile(){
    return (
        <div>profile</div>
    )
}

function Render(){
    const course = new Course();
    const [currentSection,setCurrentSection] = useState(course.sections[0]);
    const [sectionIndex,setSectionIndex] = useState(0);

   StackSource().then((res)=>{console.log(res)});

    useEffect(()=>{
        setCurrentSection(course.sections[sectionIndex]);

    },[sectionIndex])

    const forwardPage = () => {
        const newIndex=sectionIndex+1;
        if( !(newIndex >= course.sections.length) )
            setSectionIndex(newIndex);
    }

    const backwardPage = () => {
        const newIndex = sectionIndex-1;
        if( !(newIndex < 0))
            setSectionIndex(newIndex);
    }

    return (
        <div className="sidebar">

            <ul className="sidelist">
                <h1 className="align-center">{course.name}</h1>
                {course.sections.map((element,index)=>{
                    return (
                        <li key={index} onClick={() => setCurrentSection(element)}>{element.title}</li>
                    )
                    })
                }
                
            </ul>
            <div className="content">
                <h2>{currentSection.title}</h2>
                <p>{currentSection.contentText}</p>
                <button onClick={backwardPage()}><i className="fa fa-play" style={{fontsize:'3rem', transform: 'scaleX(-1)'}}></i></button>
                <button onClick={forwardPage()}className='rightitem'><i className="fa fa-play" style={{fontsize:'3rem'}}></i></button>
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



export default function ContentFactory(course){

    const returnContent = (content) => {
        switch (content) {
            case "stack":
                return <Stack />

            case "linkedlist":
                return <LinkedList />

            case "tree":
                return <Tree />
            
            case "profile":
                return <Profile />

            default:
                return <Content />
        }
    }

    return (returnContent(course))
}