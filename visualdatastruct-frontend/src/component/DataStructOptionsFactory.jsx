import React from 'react'

import * as d3 from 'd3';
import { useEffect } from 'react';

import Stack from '../utils/data-structures/stack/Stack';
import Queue from '../utils/data-structures/queue/Queue'
import LinkedList from '../utils/data-structures//linked-list/LinkedList';
import BinarySearchTree from '../utils/data-structures/tree/binary-search-tree/BinarySearchTree';

import CONTENT_NAME from '../utils/CONTENT_NAME';

function StackOptions({dataStruct}) {

  //console.log(dataStruct);

  const data = dataStruct[0];
  const setData = dataStruct[1];
 

  useEffect(() => {

  },[data])

  const push = () => {
    var temp = new Stack();
    Object.assign(temp, data)

    var inputs = document.getElementById('input-data').value;
    var values = [];
    values = inputs.split(",");
  
    console.log(inputs);
    console.log(values);

    values.forEach((val)=>{
      temp.push(val);
    })

    setData(temp)
  }

  const pop = () => {
    peek();
    
   const func = () => {
      var temp = new Stack();
      Object.assign(temp, data)
      temp.pop();
      setData(temp)
   }

   setTimeout(() => {func()}, 1100);
  }

  const peek = () => {
    d3.select("rect")
      .transition()
      .duration(500) // Set the duration of the animation (in milliseconds)
      .attr("transform", "scale(1.2)")
      .style("fill", "orange") // Apply scaling to the selected rectangle
      .transition()
      .duration(500)
      .attr("transform", "scale(1)")
      .style("fill", "#aabbcc");

      d3.select("text")
      .transition()
      .duration(500) // Set the duration of the animation (in milliseconds)
      .attr("transform", "scale(1.2)") // Apply scaling to the selected rectangle
      .transition()
      .duration(500)
      .attr("transform", "scale(1)")
  }

  return (
    <>
      <span><center style={{backgroundColor : "#aabbcc"}}>Stack Functions</center></span>
      <hr />
      <form>
        <ol>
          <li>
            <label htmlFor="push">Push</label>
            <input id="input-data" type="text" placeholder='(1) or (1,2,3)'/>
            <div className="btn btn-answer" onClick={() => {push()}}>Uygula</div>    
          </li>
          <li>
            <label htmlFor="pop">Pop</label>
            <div className="btn btn-answer" onClick={() => {pop()}}>Uygula</div>
          </li>
          <li>
            <label htmlFor="peek">Peek</label>     
            <div className="btn btn-answer" onClick={() => {peek()}}>Uygula</div>
          </li> 
        </ol>
      </form>
    </>

  )
}

function QueueOptions({dataStruct}) {

  const data = dataStruct[0];
  const setData = dataStruct[1];
 
  const enqueue = () => {
    var temp = new Queue();
    Object.assign(temp, data)

    var inputs = document.getElementById('input-data').value;
    var values = [];
    values = inputs.split(",");
  
    console.log(inputs);
    console.log(values);

    values.forEach((val)=>{
      temp.enqueue(val);
    })

    setData(temp)
  }

  const dequeue = () => {
    peek();
      
    const func = () => {
        var temp = new Queue();
        Object.assign(temp, data)
        temp.dequeue();
        setData(temp)
    }

    setTimeout(() => {func()}, 1100);
  }

  const peek = () => {
    d3.select("rect")
    .transition()
    .duration(500) // Set the duration of the animation (in milliseconds)
    .attr("transform", "scale(1.2)")
    .style("fill", "orange") // Apply scaling to the selected rectangle
    .transition()
    .duration(500)
    .attr("transform", "scale(1)")
    .style("fill", "#bbaacc");

    d3.select("text")
    .transition()
    .duration(500) // Set the duration of the animation (in milliseconds)
    .attr("transform", "scale(1.2)") // Apply scaling to the selected rectangle
    .transition()
    .duration(500)
    .attr("transform", "scale(1)")
  }

  return (
    <>
      <span><center style={{backgroundColor : "#bbaacc"}}>Queue Functions</center></span>
      <hr />
      <form>
        <ol>
          <li>
            <label htmlFor="enqueue">Enqueue</label>
            <input type="text" name="" id="input-data" placeholder='(1) or (1,2,3)'/>
            <div className="btn btn-answer" onClick={enqueue}>Uygula</div>
          </li>
          <li>
            <label htmlFor="dequeue">Dequeue</label>
            <div className="btn btn-answer" onClick={dequeue}>Uygula</div>
          </li>
          <li>
            <label htmlFor="peek">Peek</label>
            <div className="btn btn-answer" onClick={peek}>Uygula</div>
          </li>
        </ol>
      </form>
    </>

  )
}

function LinkedListOptions({dataStruct}) {

  const data = dataStruct[0];
  const setData = dataStruct[1];

  const append = () => {
    var temp = new LinkedList();
    Object.assign(temp, data)

    var inputs = document.getElementById('input-data-append').value;
    var values = [];
    values = inputs.split(",");
  
    console.log(inputs);
    console.log(values);

    values.forEach((val)=>{
      if(!isNaN(val)){
        temp.append(parseInt(val))
      }
    })

    setData(temp)
  }

  const prepend = () => {
    var temp = new LinkedList();
    Object.assign(temp, data)

    var inputs = document.getElementById('input-data-prepend').value;
    var values = [];
    values = inputs.split(",");
  
    console.log(inputs);
    console.log(values);

    values.forEach((val)=>{
      if(!isNaN(val)){
        temp.prepend(parseInt(val))
      }
    })

    setData(temp)
  }

  const insert = () => {
    var temp = new LinkedList();
    Object.assign(temp, data)

    var val = document.getElementById('input-data-insert-val').value;
    var index = document.getElementById('input-data-insert-index').value;

    peekLine(index);
    const func = () => {
      if(!isNaN(val)){
        temp.insert(parseInt(val), parseInt(index))
      }
  
      setData(temp)
    }
    
    setTimeout(() => {func()}, 1100);
  }

  const deleteHead = () => {
    peekHead();
      
    const func = () => {
        var temp = new LinkedList();
        Object.assign(temp, data)
        temp.deleteHead();
        setData(temp)
    }

    setTimeout(() => {func()}, 1100);
  }

  const deleteTail = () => {
    peekTail();
      
    const func = () => {
        var temp = new LinkedList();
        Object.assign(temp, data)
        temp.deleteTail();
        setData(temp)
    }

    setTimeout(() => {func()}, 1100);
  }

  const deleteVal = () => {
    var inputs = document.getElementById('input-data-delete').value;
    var values = [];
    values = inputs.split(",");

    const func = (val) => {
      var temp = new LinkedList();
      Object.assign(temp, data)
      temp.delete(parseInt(val));
      console.log();
      setData(temp)
    }

    values.forEach((val)=>{
      peek(val);
      setTimeout(() => {func(parseInt(val))}, 1100);
    })
   
  }

  const peekHead = () => {
    d3.select("circle")
      .transition()
      .duration(500) // Set the duration of the animation (in milliseconds)
      .attr("transform", "scale(1.2)")
      .style("fill", "orange") // Apply scaling to the selected rectangle
      .transition()
      .duration(500)
      .attr("transform", "scale(1)")
      .style("fill", "#ccaabb");

    d3.select("text")
      .transition()
      .duration(500) // Set the duration of the animation (in milliseconds)
      .attr("transform", "scale(1.2)") // Apply scaling to the selected rectangle
      .transition()
      .duration(500)
      .attr("transform", "scale(1)")
  }

  const peekTail = () => {
    var circleClass = `.circle-${data.toArray().length-1}`;

    d3.select(circleClass)
      .transition()
      .duration(500) // Set the duration of the animation (in milliseconds)
      .attr("transform", "scale(1.2)")
      .style("fill", "orange") // Apply scaling to the selected rectangle
      .transition()
      .duration(500)
      .attr("transform", "scale(1)")
      .style("fill", "#ccaabb");

    var textIndexClass = `.text-index-${data.toArray().length-1}`;

    d3.select(textIndexClass)
      .transition()
      .duration(500) // Set the duration of the animation (in milliseconds)
      .attr("transform", "scale(1.2)") // Apply scaling to the selected rectangle
      .transition()
      .duration(500)
      .attr("transform", "scale(1)")
      
  }

  const peek = (val) => {
    var gClass = `.g-${val}`;

    d3.select(gClass)
      .transition()
      .duration(500) // Set the duration of the animation (in milliseconds)
      .attr("transform", "scale(1.2)")
      .style("fill", "orange") // Apply scaling to the selected rectangle
      .transition()
      .duration(500)
      .attr("transform", "scale(1)")
      .style("fill", "#ccaabb");
  }

  const peekLine = (lineIndex) => {
    var lineId = `#line-${lineIndex}`;

    d3.select(lineId)
      .transition()
      .duration(500) // Set the duration of the animation (in milliseconds)
      .attr("transform", "scale(1.2)")
      .style("fill", "orange") // Apply scaling to the selected rectangle
      .transition()
      .duration(500)
      .attr("transform", "scale(1)")
      .style("fill", "#ccaabb");
  }
    return (
      <>
      <span><center style={{backgroundColor : "#ccaabb"}}>Linked List Functions</center></span>
      <hr />
      <form>
        <ol>
          <li>
            <label htmlFor="input-data-append">Append</label>
            <input type="text" name="" id="input-data-append" placeholder='Value (1) or (1,2,3)'/>
            <div className="btn btn-answer" onClick={append}>Uygula</div>
          </li>
          <li>
            <label htmlFor="input-data-prepend">Prepend</label>
            <input type="text" name="" id="input-data-prepend" placeholder='Value (1) or (1,2,3)'/>
            <div className="btn btn-answer" onClick={prepend}>Uygula</div>
          </li>
          <li>
            <label htmlFor="input-data-insert">Insert</label>
            <input type="text" name="" id="input-data-insert-val" placeholder='Value (1)' style={{width:"27%", fontSize:"large"}}/>
            <input type="text" name="" id="input-data-insert-index" placeholder='Index (0 -> length-1)' style={{width:"50%", fontSize:"small"}}/>
            <div className="btn btn-answer" onClick={insert}>Uygula</div>
          </li>
          <li>
            <label htmlFor="input-data-delete">Delete</label>
            <input type="text" name="" id="input-data-delete" placeholder='Value (1) or (1,2,3)'/>
            <div className="btn btn-answer" onClick={deleteVal}>Uygula</div>
          </li>
          <li>
            <label htmlFor="deleteHead">Delete Head</label>
            <div className="btn btn-answer" onClick={deleteHead}>Uygula</div>
          </li>
          <li>
            <label htmlFor="deleteTail">Delete Tail</label>
            <div className="btn btn-answer" onClick={deleteTail}>Uygula</div>
          </li>
        </ol>
      </form>
    </>

  
    )
}
  
function TreeOptions({dataStruct}) {

    const data = dataStruct[0];
    const setData = dataStruct[1];

    const insert = () => {
      var temp = new BinarySearchTree();
      Object.assign(temp, data)

      var inputs = document.getElementById('input-data-insert').value;
      var values = [];
      values = inputs.split(",");
    

      values.forEach((val)=>{
        if(!isNaN(val)){
          temp.insert(parseInt(val))
          console.log(val)
        }
      })

      setData(temp)
    }

    const remove = () => {
      var temp = new BinarySearchTree();
      Object.assign(temp, data)

      var inputs = document.getElementById('input-data-remove').value;
      var values = [];
      values = inputs.split(",");
    
      
      values.forEach((val)=>{
        if(!isNaN(val)){
          try {
            temp.remove(parseInt(val))
            setData(temp)
          } catch (error) {
            console.log(error)
          }
        }
      })
      
    }

    const peek = () => {
      var input = document.getElementById('input-data-peek').value;
      var temp = new BinarySearchTree();
      Object.assign(temp, data)
      temp.root.find(input);
    }

    return (
      <>
      <span><center style={{backgroundColor : "#ccbbaa"}}>Tree Functions</center></span>
      <hr />
      <form>
        <ol>
          <li>
            <label htmlFor="input-data-insert">Insert</label>
            <input type="text" name="" id="input-data-insert" placeholder='Value (1)'/>
            <div className="btn btn-answer" onClick={insert}>Uygula</div>
          </li>
          <li>
            <label htmlFor="input-data-remove">Delete</label>
            <input type="text" name="" id="input-data-remove" placeholder='Value (1)'/>
            <div className="btn btn-answer" onClick={remove}>Uygula</div>
          </li>
          <li>
            <label htmlFor="input-data-peek">Peek</label>
            <input type="text" name="" id="input-data-peek" placeholder='Value (1)'/>
            <div className="btn btn-answer" onClick={peek}>Uygula</div>
          </li>
         
        </ol>
      </form>
    </>

    )
}
  
  
export default function DataStructOptionsFactory(props) {
    switch (props.dataType) {
        case CONTENT_NAME.STACK:
            return <StackOptions dataStruct={props.dataStruct}/>;

        case CONTENT_NAME.QUEUE:
            return <QueueOptions dataStruct={props.dataStruct}/>;
            
        case CONTENT_NAME.LINKEDLIST:
            return <LinkedListOptions dataStruct={props.dataStruct}/>;

        case CONTENT_NAME.TREE:
            return <TreeOptions dataStruct={props.dataStruct}/>;

       default:
            return <>Geçersiz Yapı</>
    }
}
  
