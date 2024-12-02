import { useEffect, useState } from "react";


const Counter=({value})=>{
    // const array=useState()
    // const count=array[0]
    // const setCount=array[1]
    const [count,setCount]=useState(value)
    // let count=0;
    useEffect(()=>{
        console.log(value);
    },[])
    return (
        <div className="counter" style={{margin:'50px 0'}}>
            <h1>Counter : <span>{count}</span></h1>
            <button onClick={(e)=>{setCount(count+1)}}>count</button>
            <button onClick={(e)=>{
                if(count!=0)
                    setCount(count-1)
            }}>decrease</button>
            <button onClick={(e)=>{setCount(0)}}>reset</button>
        </div>
    )
}


export default Counter;