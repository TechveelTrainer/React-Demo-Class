import { useState } from "react"


const Calculator=()=>{
    const keys=['+','-','/','%',0,1,2,3,4,5,6,7,8,9,'=']
    const [result,setResult]=useState(0)
    const handleClick=(key)=>{
        let ans=result;
        if(ans===0){
            ans=key
        }else if(key==='=')
            ans=eval(result)
        else{
            ans+=''+key
        }
        setResult(ans)
    }
    return (
        <div className="row border border-2 p-0" style={{maxWidth:'350px',margin:'50px auto'}}>
            <div className="row m-0 text-black p-3 border border-2 ">
                {result  }
            </div>
            <div className="row m-0">
                {
                    keys.map(value=><button className="btn btn-primary border-white col-4" onClick={()=>handleClick(value)} key={value}>{value}</button>)
                }
            </div>
        </div>
    )
}

export default Calculator