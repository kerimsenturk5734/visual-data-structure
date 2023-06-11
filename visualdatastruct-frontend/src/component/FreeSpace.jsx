import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import * as d3 from 'd3';
import DataStructOptionsFactory from './DataStructOptionsFactory';
import Stack from '../utils/data-structures/stack/Stack';

import '../css/freespace.css';

export default function FreeSpace() {

    const navigate = useNavigate();

    const svgRef = useRef(null);
    
    const dataStruct = useState(new Stack());

    const data = dataStruct[0];
    const setData = dataStruct[1];

    const [currentDataType, setCurrentDataType] = useState();

    const trigger = useState(false);

    useEffect(() => {
        if(currentDataType !== undefined){
            var randomElements = [];
            var i = 5;

            while(i !== 0){
                randomElements.push(Math.floor(Math.random()*60));
                i--;
            }

            switch(currentDataType){//set selectedDataStruct here
                case "stack":{
                    let stack = new Stack();

                    randomElements.forEach((val) => {
                        stack.push(val);
                    })

                    setData(stack);

                    break;
                }
                case "queue":break;
                case "linkedlist":break;
                case "tree":break;
                case "graph":break;
                default:break;
            }
        }

    },[currentDataType])
    
    useEffect(() => {
        if(data !== undefined){
            drawDataStruct(data);
        }
    },[data])
  

    const drawDataStruct = (drawElement) => {
        //draw data via D3.js
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        switch(currentDataType){
            case "stack":{
                // Get the stack size
                

                // Convert the stack to an array
                const stackArray = drawElement.toArray();
                const stackSize = stackArray.length;
                // Set up the SVG container

                // Set up the scales
                const xScale = d3.scaleLinear()
                    .domain([0, stackSize - 1])
                    .range([50, 350]);

                const yScale = d3.scaleLinear()
                    .domain([0, stackSize - 1])
                    .range([0-stackSize*1, stackSize*70]);

                

                // Draw the stack
                svg.selectAll("rect")
                    .data(stackArray)
                    .enter()
                    .append("rect")
                    .attr("class", `rect-class`)
                    .attr("id", (d, i) => `rect-${d}`)
                    .attr("x", 90)
                    .attr("y", (d, i) => yScale(i))
                    .attr("width", 160)
                    .attr("height", 60)
                    .style("fill", "steelblue");

                // Draw the stack elements
                svg.selectAll("text")
                    .data(stackArray)
                    .enter()
                    .append("text")
                    .attr("x", 160)
                    .attr("y", (d, i) => yScale(i) + 25)
                    .attr("dy", ".45em")
                    .attr("text-anchor", "middle")
                    .attr("font-family", "monospace")
                    .attr("font-size", "larger")
                    .text((d) => d);

                svg
                    .attr("width", 400)
                    .attr("height", 200+65*stackSize);

                console.log("stack çizildi")
                break;
            };
            case "queue":{                

                      
                break;
            }
            case "linkedlist":break;
            case "tree":break;
            case "graph":break;
            default:break;
        }
    }

    return (
        <div>
            <div className="free-space-body">
                <nav className="container-fluid">
                        
                        <div className="leftitem">
                            <ul>
                                <li onClick={() => {setCurrentDataType("stack")}}>
                                    <img src="https://cdn-icons-png.flaticon.com/32/2111/2111690.png" alt='Stack' /> 
                                    Stack
                                </li>
                                <li onClick={() => {setCurrentDataType("queue")}}>
                                    <img src="https://cdn-icons-png.flaticon.com/32/8201/8201691.png" alt='Queue' /> 
                                    Queue
                                </li>
                                <li onClick={() => {setCurrentDataType("linkedlist")}}> 
                                    <img src="https://cdn-icons-png.flaticon.com/32/3462/3462381.png" alt='Linked List' /> 
                                    Linked List
                                </li>
                                <li onClick={() => {setCurrentDataType("tree")}}>
                                    <img src="https://cdn-icons-png.flaticon.com/32/4160/4160135.png" alt='Tree' /> 
                                    Tree
                                </li>
                                <li onClick={() => {setCurrentDataType("graph")}}>
                                    <img src="https://cdn-icons-png.flaticon.com/32/4858/4858761.png" alt='Graph' /> 
                                    Graph
                                </li>
                            </ul>
                        </div>
                        <div className="rightitem">
                            <ul>
                                <li style={{backgroundColor:'cadetblue'}} onClick={()=>navigate("/courseMain")}>
                                    <img src="https://cdn-icons-png.flaticon.com/32/10061/10061724.png" alt='freeSpace' /> 
                                    Go To Course Space
                                </li>
                            </ul>
                        </div>
                    
                </nav>
                <div className='free-space container-fluid'>
                    <div className='sketch white-shadow-box'>
                    <center>
                        <svg ref={svgRef} id="struct"></svg>
                    </center>
                    <div className='data-info'>
                        <li className='white-shadow-box'> 
                            <div>Data Type:</div>
                            <div>{currentDataType}</div>
                        </li>
                        <li className='white-shadow-box'>
                            <div>Size:</div>
                            <div>{data.toArray().length}</div>
                        </li>
                    </div>
                    </div>
                    <div className='options-table white-shadow-box'>
                        <DataStructOptionsFactory 
                            dataType = {currentDataType} 
                            dataStruct = {dataStruct}/>
                    </div>
                </div>
            </div>             
        </div>
    )
}
