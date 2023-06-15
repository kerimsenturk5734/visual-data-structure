import React from 'react'
import Stack from '../utils/data-structures/stack/Stack';
import Queue from '../utils/data-structures/queue/Queue';
import LinkedList from '../utils/data-structures/linked-list/LinkedList';
import BinarySearchTree from '../utils/data-structures/tree/binary-search-tree/BinarySearchTree';

import CONTENT_NAME from '../utils/CONTENT_NAME';



function StackInfo({data}) {
    var stack = new Stack();
    Object.assign(stack, data);
    const arr = stack.toArray();
    const size = arr.length;
    const top = stack.peek();

  return (
    <>
        <li className='white-shadow-box'> 
            <div>Size:</div>
            <div>{size}</div>                             
        </li>
        <li className='white-shadow-box'> 
            <div>Top:</div>
            <div>{top}</div>                             
        </li>
        
        
    </>
  )
}

function QueueInfo({data}) {
    var queue = new Queue();
    Object.assign(queue, data);
    const arr = queue.toArray();
    const size = arr.length;
    const head = queue.peek();
    const tail = arr[size-1]
  return (
    <>
        <li className='white-shadow-box'> 
            <div>Size:</div>
            <div>{size}</div>                             
        </li>
        <li className='white-shadow-box'> 
            <div>Head:</div>
            <div>{head}</div>                             
        </li>
        <li className='white-shadow-box'> 
            <div>Tail:</div>
            <div>{tail}</div>                             
        </li>   
    </>
  )
}

function LinkedListInfo({data}) {
    var linkedlist = new LinkedList();
    Object.assign(linkedlist, data);
    const arr = linkedlist.toArray();
    const size = arr.length;
    var head = '-';
    var tail = '-';
    if(arr.length !== 0){
        head = arr.at(0).value
        tail = arr.at(size-1).value
    }
        
    
  return (
    <>
        <li className='white-shadow-box'> 
            <div>Size:</div>
            <div>{size}</div>                             
        </li>
        <li className='white-shadow-box'> 
            <div>Head:</div>
            <div>{head}</div>         
        </li>
        <li className='white-shadow-box'> 
            <div>Tail:</div>
            <div>{tail}</div>                             
        </li>   
    </>
  )
}

function TreeInfo({data}) {
    var tree = new BinarySearchTree();
    Object.assign(tree, data);
    const depth = tree.root.height
    const root = tree.root.value;
    var nodeCount = 0;

    function convertToHierarchy(data) {
        const root = { value: data.value, children: [] };

        if (data.left) {
            root.children.push(convertToHierarchy(data.left));
        }
        
        if (data.right) {
            root.children.push(convertToHierarchy(data.right));
        }
        
        nodeCount++;
        return root;
    }

    convertToHierarchy(tree.root);
    
  return (
    <>
        <li className='white-shadow-box'> 
            <div>Node Count:</div>
            <div>{nodeCount}</div>                             
        </li>
        <li className='white-shadow-box'> 
            <div>Depth:</div>
            <div>{depth}</div>         
        </li>
        <li className='white-shadow-box'> 
            <div>Root:</div>
            <div>{root}</div>                             
        </li>   
    </>
  )
}

export default function DataStructInfoFactory({dataType,data}) {

    switch (dataType) {
        case CONTENT_NAME.STACK:
            return <StackInfo data={data}/>;

        case CONTENT_NAME.QUEUE:
            return <QueueInfo data={data}/>;

        case CONTENT_NAME.LINKEDLIST:
            return <LinkedListInfo data={data}/>;

        case CONTENT_NAME.TREE:
            return <TreeInfo data={data}/>;
     

       default:
            return <></>;
    }
}
