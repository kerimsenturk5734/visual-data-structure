import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client';

import {Course} from '../model/Course';
import {Result} from '../model/Result'

import CourseSourceFactory from './CourseSource';
import ResultService from '../service/ResultService'

import '../css/profileLayout.css'
import '../css/content.css'

import ProfileCard from './ProfileCard';
import Exam from './Exam';

import CONTENT_NAME from '../utils/CONTENT_NAME';

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
    const [uid] = useState(localStorage.getItem("uid"));
    const [results,setResults] = useState([new Result(0,-1)])
    const [confirm, setConfirm] = useState(false);
    var totalStar = 0;
    var fiveStarCount=0;

    useEffect(()=>{
        async function fetchData(){
            await ResultService.getByUID(uid)
            var res = [];//API returns array
            res = ResultService.getResponse();

            if(res.length === 0)
                setResults(res);
            res.map((element, index) => {
                var el = new Result();

                el.id = element.id;
                el.result = element.result;

                var course = element.course;
                el.course = new Course(course.id,course.name);

                results[index] = el;
            })

            setConfirm(true);
        }

        fetchData();
    },[])

    if(!confirm){
        return <div>Loading</div>
    }
    else if(results.length === 0){
        return (
            <div className='resultContent container-fluid'>
                <ul className="results">
                    <h1 className="align-center">Sonuçlar</h1>
                    <li className="glow-on-hover">
                        Henüz bir sınava girmediniz. Yukardan bir kurs seç ve hemen sınava gir.
                    </li>     
                </ul>
                <ProfileCard resultCount={0} totalStar={0} fiveStarCount={0}/>
            </div>
        )
    }
    return (
        <div className='resultContent container-fluid'>
            <ul className="results">
                <h1 className="align-center">Sonuçlar</h1>
                <hr />
                {results.map((element)=>{
                    totalStar+=element.result;

                    if(element.result === 5)
                        fiveStarCount++;

                    return (
                        <li key={element.id} className='glow-on-hover'>{element.course.name}
                            {
                                [...Array(element.result)].map((e,i) => <span className="fa fa-star fa-spin fa-xl" key={i}></span>)
                            }
                        </li>
                    )
                })}
                
            </ul>
            <ProfileCard resultCount={results.length} totalStar={totalStar} fiveStarCount={fiveStarCount}/>    
        </div>
    )
}



export default function Render({contentName}){
    const [course,setCourse] = useState(new Course(0))
    const [currentSection,setCurrentSection]= useState();
    const [sectionIndex,setSectionIndex] = useState(0);
    const [confirm,setConfirm] = useState(false);
    const [isExamOpen,setIsExamOpen] = useState(false);
    const [isCourseFinished, setIsCourseFinished] = useState(false);
    

    useEffect(()=>{
        const isItCourse=()=>{
            return ((contentName !== CONTENT_NAME.PROFILE) && 
                    (contentName !== CONTENT_NAME.CONTENT));
        }
    
       if(isItCourse()){
            async function fetchData(){
                await CourseSourceFactory(contentName).then((res)=>{
                    var temp = new Course();
                    Object.assign(temp ,res)
                    setCourse(temp);   
                           
                })
            }   
            fetchData();
       }
    },[contentName])

   
    useEffect(()=>{
        if(course.id!== 0){
            let section=course.sections[0];
            setSectionIndex(0);
            setCurrentSection(section);        
        }
        console.log(course)
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

    useEffect(()=>{
        let modal = document.getElementById("myModal");
        if(modal !== null){
            if(isExamOpen){
                modal.style.display = "block"; 
            }
            else{
                modal.style.display = "none";
            }
        }
    },[isExamOpen])

    useEffect(()=>{
        var res = new Result();
        const fetchResults = async () => {
            await ResultService.getByUIDandCourseId(localStorage.getItem("uid"),course.id);

            res=ResultService.getResponse();
            if(res.result === 5)
                setIsCourseFinished(true);
            else
                setIsCourseFinished(false);
        }

        fetchResults();

        
    })
    const forwardPage = () => {
        const newIndex=sectionIndex+1;
        
        if( !(newIndex >= course.sections.length) ){
            document
                .getElementById("section"+sectionIndex)
                .style
                .border = "none";

            setSectionIndex(newIndex);
        }
            
    }

    const backwardPage = () => {
        const newIndex = sectionIndex-1;

        if( !(newIndex < 0)){
            document
                .getElementById("section"+sectionIndex)
                .style
                .border = "none";

            setSectionIndex(newIndex);
        }
    }

    const handleSectionSelect = (e,index)=>{
        setCurrentSection(course.sections[index]);
        document.getElementById("section"+sectionIndex).style.border = "none";
        setSectionIndex(index);
    }

    const openExam = () => {
        let modalContent = document.getElementById("myModalContent")
            .innerHTML="<p class='dot-load'>Sınav Başlıyor...</p>";
        
        setTimeout(()=>{startExam()},2000)
    }

    const startExam = () => {
        const modalContentElement = document.getElementById('myModalContent');
        modalContentElement.style.width = "70%"
        const modalContent = ReactDOM.createRoot(modalContentElement);
        modalContent.render(<Exam course={course} setIsExamOpen={setIsExamOpen}/>)
    }

    if(contentName === CONTENT_NAME.PROFILE){
        return <Profile/>
    }
    else if(contentName === CONTENT_NAME.CONTENT){
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
                        <li id = {`section${index}`} className="glow-on-hover" key={index} onClick={(e) => handleSectionSelect(e,index)}>{`${index+1}. ${element.title}`}</li>
                    )
                    })
                }
                <hr />
                {isCourseFinished
                    ?
                        <li key="exam" className="exam">
                            <center>Bu kursu zaten bitirdiniz.</center>
                        </li>
                    :
                        <li key="exam" className="exam glow-on-hover" onClick={()=>setIsExamOpen(true)} aria-disabled ="true">
                            <img src="https://cdn-icons-png.flaticon.com/32/10803/10803837.png" alt="" className='leftitem'/>
                            <center>Go To The Exam</center>
                        </li>
                }
            </ul>
            <div className="content textcontent">
                <h2>{currentSection.title}</h2>
                <p>{currentSection.contentText}</p>
                
                <button onClick={()=>{backwardPage()}}><i className="fa fa-play" style={{fontsize:'3rem', transform: 'scaleX(-1)'}}></i></button>
                <button onClick={()=>{forwardPage()}} className='rightitem'><i className="fa fa-play" style={{fontsize:'3rem'}}></i></button>
            </div>

            <ul className='images'>
                    {currentSection.imagePaths.map((path)=>{//fix picture
                           
                            return (
                                <li key={path}>
                                    <img src={path} width={300} height={300}/>
                                </li>
                            )
                        })}                      
            </ul>

            {isExamOpen
                ?
                <div id="myModal" class="modal container-fluid">
                    <div id="myModalContent">
                        <span className="close" onClick={() => setIsExamOpen(false)}>&times;</span>
                        <center id="text-content">Sınava girmek istediğinize emin misiniz?</center>
                        <center id="text-content"><i style={{color:"red"}}>*Bir kere girdikten sonra çıkış yapamazsınız</i></center>
                        <div className='buttons'>
                            <button className='btn-danger' onClick={() => setIsExamOpen(false)}>İptal Et</button>
                            <button className='btn-alert' onClick={openExam}>Sınava Gir</button>
                        </div>
                    </div>  
                </div>
                :
                <></>
            }
        </div>
        )
    }
   
    
}