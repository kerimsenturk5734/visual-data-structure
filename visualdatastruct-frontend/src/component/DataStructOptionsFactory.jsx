import React from 'react'
import Stack from '../utils/data-structures/stack/Stack';
import * as d3 from 'd3';
import { useEffect } from 'react';


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
      .style("fill", "steelblue");

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
            <input id="input-data" type="text" placeholder='(1), or (1,2,3)'/>
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

function QueueOptions() {

  const enqueue = () => {

  }

  const dequeue = () => {

  }

  const peek = () => {

  }

  return (
    <>
      <span><center style={{backgroundColor : "#bbaacc"}}>Queue Functions</center></span>
      <hr />
      <form>
        <ol>
          <li>
            <label htmlFor="enqueue">Enqueue</label>
            <input type="text" name="" id="enqueue" />
            <div className="btn btn-answer" onClick={enqueue}>Uygula</div>
          </li>
          <li>
            <label htmlFor="dequeue">Dequeue</label>
            <input type="text" name="" id="dequeue" />
            <div className="btn btn-answer" onClick={dequeue}>Uygula</div>
          </li>
          <li>
            <label htmlFor="peek">Peek</label>
            <input type="text" name="" id="peek" />
            <div className="btn btn-answer" onClick={peek}>Uygula</div>
          </li>
        </ol>
      </form>
    </>

  )
}

function LinkedListOptions() {
    return (
      <>
      <span><center style={{backgroundColor : "#ccaabb"}}>Linked List Functions</center></span>
      <hr />
      <form>
        <ol>
          <li>
            <label htmlFor="push">Push</label>
            <input type="text" name="" id="push" />
            <button>Uygula</button>
          </li>
          <li>
            <label htmlFor="push">Push</label>
            <input type="text" name="" id="push" />
            <button>Uygula</button>
          </li>
          <li>
            <label htmlFor="push">Push</label>
            <input type="text" name="" id="push" />
            <button>Uygula</button>
          </li>
          <li>
            <label htmlFor="push">Push</label>
            <input type="text" name="" id="push" />
            <button>Uygula</button>
          </li>
          <li>
            <label htmlFor="push">Push</label>
            <input type="text" name="" id="push" />
            <button>Uygula</button>
          </li>
        </ol>
      </form>
    </>

  
    )
  }
  
function TreeOptions() {
    return (
      <>
      <span><center style={{backgroundColor : "#ccbbaa"}}>Tree Functions</center></span>
      <hr />
      <form>
        <ol>
          <li>
            <label htmlFor="push">Push</label>
            <input type="text" name="" id="push" />
            <button>Uygula</button>
          </li>
          <li>
            <label htmlFor="push">Push</label>
            <input type="text" name="" id="push" />
            <button>Uygula</button>
          </li>
          <li>
            <label htmlFor="push">Push</label>
            <input type="text" name="" id="push" />
            <button>Uygula</button>
          </li>
          <li>
            <label htmlFor="push">Push</label>
            <input type="text" name="" id="push" />
            <button>Uygula</button>
          </li>
          <li>
            <label htmlFor="push">Push</label>
            <input type="text" name="" id="push" />
            <button>Uygula</button>
          </li>
        </ol>
      </form>
    </>

    )
}
  
function GraphOptions() {
    return (
      <>
      <span><center style={{backgroundColor : "#aaccbb"}}>Graph Functions</center></span>
      <hr />
      <form>
        <ol>
          <li>
            <label htmlFor="push">Push</label>
            <input type="text" name="" id="push" />
            <button>Uygula</button>
          </li>
          <li>
            <label htmlFor="push">Push</label>
            <input type="text" name="" id="push" />
            <button>Uygula</button>
          </li>
          <li>
            <label htmlFor="push">Push</label>
            <input type="text" name="" id="push" />
            <button>Uygula</button>
          </li>
          <li>
            <label htmlFor="push">Push</label>
            <input type="text" name="" id="push" />
            <button>Uygula</button>
          </li>
          <li>
            <label htmlFor="push">Push</label>
            <input type="text" name="" id="push" />
            <button>Uygula</button>
          </li>
        </ol>
      </form>
    </>

  
    )
}
  
export default function DataStructOptionsFactory(props) {
    switch (props.dataType) {
        case "stack":
            return <StackOptions dataStruct={props.dataStruct}/>;

        case "queue":
            return <QueueOptions dataStruct={props.dataStruct}/>;
            
        case "linkedlist":
            return <LinkedListOptions dataStruct={props.dataStruct}/>;

        case "tree":
            return <TreeOptions dataStruct={props.dataStruct}/>;

        case "graph":
            return <GraphOptions dataStruct={props.dataStruct}/>;

       default:
            return <StackOptions dataStruct={props.dataStruct}/>;
    }
}
  
