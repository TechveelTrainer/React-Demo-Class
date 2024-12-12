module.exports=(data)=>{
    const pairs=data.split('|')    
    const result=pairs.map((singledata)=>{
        const datas=singledata.split(',')
        const obj={}
        datas.forEach(element => {
            const [key,value]=element.split('=')
            obj[key]=value
        });
        return obj
    })
   return result
}