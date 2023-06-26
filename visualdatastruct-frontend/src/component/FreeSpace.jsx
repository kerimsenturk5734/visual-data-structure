import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import * as d3 from 'd3';
import DataStructOptionsFactory from './DataStructOptionsFactory';

import Stack from '../utils/data-structures/stack/Stack';
import Queue from '../utils/data-structures/queue/Queue';
import LinkedList from '../utils/data-structures/linked-list/LinkedList';
import BinarySearchTree from '../utils/data-structures/tree/binary-search-tree/BinarySearchTree';

import '../css/freespace.css';
import DataStructInfoFactory from './DataStructInfoFactory';

import CONTENT_NAME from '../utils/CONTENT_NAME';

export default function FreeSpace() {

    const navigate = useNavigate();

    const svgRef = useRef(null);
    
    const dataStruct = useState(new Stack());

    const data = dataStruct[0];
    const setData = dataStruct[1];

    const [currentDataType, setCurrentDataType] = useState();


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
                case "queue":{
                    let queue = new Queue();

                    randomElements.forEach((val) => {
                        queue.enqueue(val);
                    })

                    setData(queue);

                    break;
                }
                case "linkedlist":{
                    let linkedList = new LinkedList();

                    randomElements.forEach((val) => {
                        linkedList.append(val);
                    })

                    setData(linkedList);

                    break;
                }
                case "tree":{
                    let treeRoot = new BinarySearchTree();
                    
                    randomElements.forEach((val) => {
                        treeRoot.insert(val);
                    })
                    
                    setData(treeRoot);

                    break;
                }
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

        //remove svg content
        svg.selectAll("*").remove();

        switch(currentDataType){
            case CONTENT_NAME.STACK:{

                // Convert the stack to an array
                const stackArray = drawElement.toArray();
                const stackSize = stackArray.length;
                // Set up the SVG container

                const yScale = d3.scaleLinear()
                    .domain([0, stackSize - 1])
                    .range([20, stackSize*70]);

                

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
                    .style("fill", "#aabbcc");

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
                    .attr("fill", "white")
                    .text((d) => d);

                svg
                    .attr("width", 400)
                    .attr("height", 200+65*stackSize);

                break;
            };
            case CONTENT_NAME.QUEUE:{                
                const queueArray = drawElement.toArray();

                const yScale = d3.scaleLinear()
                    .domain([0, 3])
                    .range([10, 370]);
                
                // Draw the stack
                svg.selectAll("rect")
                    .data(queueArray)
                    .enter()
                    .append("rect")
                    .attr("class", `rect-class`)
                    .attr("id", (d, i) => `rect-${d}`)
                    .attr("y", 90)
                    .attr("x", (d, i) => yScale(i))
                    .attr("width", 80)
                    .attr("height", 150)

                    .style("fill", "#bbaacc");

                // Draw the stack elements
                svg.selectAll("text")
                    .data(queueArray)
                    .enter()
                    .append("text")
                    .attr("y", 165)
                    .attr("x", (d, i) => yScale(i) + 25)
                    .attr("dx", ".65em")
                    .attr("text-anchor", "middle")
                    .attr("font-family", "monospace")
                    .attr("font-size", "larger")
                    .attr("fill", "white")
                    .text((d) => d);
                
                svg
                    .attr("width", "100%")
                    .attr("height", 400);
                      
                break;
            };
            case CONTENT_NAME.LINKEDLIST:{
                const linkedList = drawElement.toArray();
            
                const nodeRadius = 30;
                const nodeSpacing = 90;

                const nodes = svg.selectAll("g")
                    .data(linkedList)
                    .enter()
                    .append("g")
                    .attr("id", (d, i) => `circle-${i}`)
                    .attr("class", (d, i) => `g-${d}`)
                    .attr("transform", (d, i) => `translate(${100 + i * nodeSpacing}, 160)`);
                  

                // Append circles for nodes
                nodes.append("circle")
                    .attr("r", nodeRadius)
                    .attr("fill", "#ccaabb")
                    .attr("class", (d, i) => `circle-${i}`);

                // Add index numbers as text labels
                nodes.append("text")
                    .text((d, i) => i)
                    .attr("text-anchor", "middle")
                    .attr("font-weight", "bold")
                    .attr("font-size", "medium")
                    .attr("dy", 63)
                    .attr("fill", "red")
                    .attr("class", (d, i) => `text-index-${i}`);

                // Add values as separate text labels
                nodes.append("text")
                    .text((d, i) => d)
                    .attr("text-anchor", "middle")
                    .attr("dy", 5)
                    .attr("fill", "white");

                const links = svg.selectAll("line")
                    .data(linkedList)
                    .enter()
                    .append("line")
                    .attr("x1", (d, i) => 100 + i * nodeSpacing + nodeRadius)
                    .attr("y1", 160)
                    .attr("x2", (d, i) => 100 + (i + 1) * nodeSpacing - nodeRadius)
                    .attr("y2", 160)
                    .attr("stroke", "steelblue")
                    .attr("stroke-width", 2)
                    .attr("id", (d, i) => `line-${i}`)

                svg
                    .attr("width", "100%")
                    .attr("height", 400);

                    break;
            };
            case CONTENT_NAME.TREE:{
                 const treeRoot = drawElement.root; // Assuming the tree has a "root" property

                // Function to convert the tree data to hierarchical structure required by D3.js
                function convertToHierarchy(data) {
                    const root = { value: data.value, children: [] };

                    if (data.left) {
                        root.children.push(convertToHierarchy(data.left));
                    }
                    
                    if (data.right) {
                        root.children.push(convertToHierarchy(data.right));
                    }
                    
                    return root;
                }
                
                // Convert the tree data to hierarchical structure
                const hierarchyData = convertToHierarchy(treeRoot);
                
                // Set up D3.js tree layout
                var width = 300;
                var height = 200;
                const treeLayout = d3.tree().size([width, height]);
                
                // Convert tree data to hierarchical structure
                const hierarchy = d3.hierarchy(hierarchyData);
                
                // Generate tree layout
                const treeData = treeLayout(hierarchy);
                // Create a group element for the tree
                var offSetX = 200;
                var offSetY = 50;

                const treeGroup = svg
                    .selectAll('g')
                    .data(treeData.descendants())
                    .enter()
                    .append('g')
                    .attr('id', (d, i) => `g-${i}-${d.data.value}`)
                    .attr('class', (d, i) => `node-${d.data.value}`)
                    .attr('transform', (d) => {
                        const parent = d.parent;
                            
                        if(parent !== null && parent.children.length !== 2){
                            
                            if(parent.data.value > d.data.value) 
                                d.x = parent.x - 75
                            else{
                                d.x = parent.x + 75
                            }
                             
                        }

                        return `translate(${d.x+offSetX},${d.y+offSetY})`
                    });
                
                treeGroup.append('circle')
                    .attr('r', 15*(1+(1/(treeData.height+1))))
                    .attr('class', (d, i) => `circle-${d.data.value}`)
                    .attr('fill', '#ccbbaa');

                treeGroup.append('text')
                    .attr('text-anchor', 'middle')
                    .attr('font-weight', 'bold')
                    .attr('font-size', 'medium')
                    .attr('dy', 5)
                    .attr('fill', 'white')
                    .text(d => d.data.value);
                
                // Create links for the tree
                // Create links for the tree
                const links = treeData.descendants().slice(1);
                svg
                    .selectAll('.link')
                    .data(links)
                    .enter()
                    .append('path')
                    .attr('class', 'link')
                    .attr('d', d => {
                        const parent = d.parent;
                        if(parent !== null && parent.children.length !== 2){
                            
                            if(parent.data.value > d.data.value) 
                                d.x = parent.x - 75
                            else
                                d.x = parent.x + 75
                        }


                        const sourceX = d.parent.x + offSetX;
                        const targetX = d.x+offSetX;
                        const sourceY = d.parent.y + offSetY;
                        const targetY = d.y + offSetY;
                        
                        return `M${sourceX},${sourceY}C${sourceX},${(sourceY + targetY) / 2} 
                                ${targetX},${(sourceY + targetY) / 2} ${targetX},${targetY}`;
                      })
                    .attr('fill', 'none')
                    .attr('stroke', 'steelblue')
                
                // Adjust the height and width of the SVG container
                svg.attr('height', treeData.height * 50 + 300)
                   .attr('width', '100%');
                
                width *= treeData.height;
                height *= treeData.height;

                treeLayout.size([width, height]);
                break;
            };
            
            default:break;
        }
    }

    const refresh = () => {
        drawDataStruct(data)
    }

    return (
        <div>
            <div className="free-space-body">
                <nav className="container-fluid">
                        
                        <div className="leftitem">
                            <ul>
                                <li onClick={() => {setCurrentDataType(CONTENT_NAME.STACK)}}>
                                    <img src="https://cdn-icons-png.flaticon.com/32/2111/2111690.png" alt='Stack' /> 
                                    Stack
                                </li>
                                <li onClick={() => {setCurrentDataType(CONTENT_NAME.QUEUE)}}>
                                    <img src="https://cdn-icons-png.flaticon.com/32/8201/8201691.png" alt='Queue' /> 
                                    Queue
                                </li>
                                <li onClick={() => {setCurrentDataType(CONTENT_NAME.LINKEDLIST)}}> 
                                    <img src="https://cdn-icons-png.flaticon.com/32/3462/3462381.png" alt='Linked List' /> 
                                    Linked List
                                </li>
                                <li onClick={() => {setCurrentDataType(CONTENT_NAME.TREE)}}>
                                    <img src="https://cdn-icons-png.flaticon.com/32/4160/4160135.png" alt='Tree' /> 
                                    Tree
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
                       {currentDataType !== undefined
                        ?
                        <>
                            <svg ref={svgRef} id="struct"></svg>
                            <div className='data-info'>
                                <li className='white-shadow-box'> 
                                    <div>Data Type:</div>
                                    <div>{currentDataType}</div>                             
                                </li>
                                <DataStructInfoFactory dataType = {currentDataType} data = {data}/>     
                                <li>
                                    <div className='btn btn-info' onClick={refresh}>Refresh</div>
                                </li>
                            </div>
                        </> 
                        :
                        <div className='data-info '>
                           <center> Serbest Geliştirme Ortamına Hoş geldiniz. <br />Lütfen Yukarıdan Bir veri yapısı seçiniz</center>
                        </div>  
                    }
                    </div>
                    <div className='options-table white-shadow-box'>
                        {
                            currentDataType !== undefined
                            ?
                                <DataStructOptionsFactory 
                                dataType = {currentDataType} 
                                dataStruct = {dataStruct}/>
                            :
                            <>
                                Bir veri yapısı seçtiğinizde seçenekler burada belirecektir.
                            </>
                        }
                        
                    </div>
                </div>
            </div>             
        </div>
    )
}
