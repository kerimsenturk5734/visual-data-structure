import React, { useState } from 'react'
import ReactDOM from 'react-dom';

import '../css/exam.css';


import ResultService from '../service/ResultService';

import { confirmAlert } from 'react-confirm-alert';

import {Course} from '../model/Course';
import { Question } from '../model/Question';
import { Choice } from '../model/Choice';
import { CreateResultRequest } from '../model/Result';
import { useEffect } from 'react';


export default function Exam({course, setIsExamOpen}) {
    let currentCourse = new Course();
    currentCourse = course;

    let questions = [new Question()]
    questions = currentCourse.questions;

    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    const [answer, setAnswer] = useState(new Choice());
    const [correctCount, setCorrectCount] = useState(0);
    const [result, setResult] = useState(new CreateResultRequest());
    const [isOpen ,setIsOpen] = useState(false);
    const [isOpenConfirm ,setIsOpenConfirm] = useState(false);
    const [isWritedToDb, setIsWritedToDb] = useState(false);

    const [questionIndex, setQuestionIndex] = useState(0);

    useEffect(() => {
        if(questionIndex === questions.length-1){//Is it last question
            setResult(new CreateResultRequest(correctCount, localStorage.getItem("uid"), currentCourse.id));
            setIsOpen(true);
            
        }
    },[questionIndex])

    const answerQuestion = () => {
        if(answer.isAnswer)
            setCorrectCount(correctCount+1);
  
        if(questionIndex+1 < questions.length){
            let temp = questionIndex+1;
            setQuestionIndex(temp);
            document.getElementById("options").reset();
            setCurrentQuestion(questions[temp]);
        }

        
    }

    const finishExam = () => {
        let el = document.getElementById("description");
        
        el.parentNode.removeChild(el.nextSibling);//removing buttons

        const sendResult = async (result) => {
            await ResultService.add(result)
            var res = ResultService.getResponse();
            
            return res;

        }

        sendResult(result)
            .then((res)=>{
                el.textContent = "Sonuçlar yazılıyor...";

                if(res.status === 204)
                    el.textContent = "Sonuçlar başarılı ile oluşturuldu. Sonucunuzu profil sekmenizden inceleyebilirsiniz.";

                else
                    el.textContent = "Sonuçlar yazılırken bir hata ile karşılaşıldı.";

                setIsWritedToDb(true);
            })
        
        
    }

    return (
       <div className='container-fluid'>
            <div className='exam-root'>
                <div className='quiz-header'>
                    <h2><center>{course.name} Exam</center></h2>
                    <hr />
                    <img src="https://cdn-icons-png.flaticon.com/64/671/671829.png "></img>
                </div>  
                <div className='quiz-body'>
                    {isOpenConfirm
                        ?
                            <>
                                <center id="description"><b>Sınavı bitirmek istediğiniz emin misiniz?</b></center>
                                <div className='container-fluid confirm-buttons'>
                                    <button className='btn-danger col-2' onClick={()=>{setIsOpenConfirm(false)}}>İptal Et</button>
                                    <button className='btn-info col-2 rightitem' onClick={()=>{answerQuestion();finishExam()}}>Sınavı Bitir</button>
                                </div>
                                {isWritedToDb
                                    ?
                                    <center><button className='btn-danger col-2' onClick={()=>{setIsExamOpen(false)}}>Kapat</button></center>
                                    :
                                    <></>
                                }
                            </>
                        :

                        <>
                            <span><b>{`${questionIndex+1}. ${currentQuestion.description} ?`}</b></span>
                            <form className='options' id="options" onChange={(e)=>{setAnswer(currentQuestion.choices[e.target.value])}}>
                                {currentQuestion.choices.map((element, index) => {
                                    let id = `option${index}`;
                                    return (
                                        <div className='option'>
                                            <input type="radio" name="option" id={id} value={index}/>
                                            <label htmlFor={id}>{element.description}</label>
                                        </div>  
                                    )     
                                })}                         
                            </form>
                            <div>
                                {isOpen
                                    ?
                                    <button className="btn-answer-submit col-3" onClick={() => {setIsOpenConfirm(true);}}>  
                                        Cevapla ve Sınavı Bitir&nbsp;
                                        <img src="https://cdn-icons-png.flaticon.com/32/65/65578.png"></img>
                                    </button>
                                    :
                                    <button className="btn-answer col-3" onClick={() => {answerQuestion()}}>  
                                        Cevapla ve İlerle&nbsp;
                                        <img src="https://cdn-icons-png.flaticon.com/32/1055/1055441.png"></img>
                                    </button>
                                }
                            </div>
                        </>
                        }            
                </div>
            </div>
       </div>
    )
}


