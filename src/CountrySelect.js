import { useEffect, useState } from "react";
import axios from "./axios"


const CountrySelect = () => {
    const [country, setCountry] = useState([])
    const [name,setName]=useState('')
    const apiCall = async () => {
        try {
            const response = await axios.get('/v3.1/all')
            // const response=await axios.post('/v3.1/all',{})
            const countryList = response.data.map(value => value.name.common)
            setCountry(countryList.sort())
        } catch (err) {
            console.log(err.message);
        }
    }
    useEffect(() => {
        apiCall()
    }, [])

    const handleChange=(e)=>{
        setName(e.target.value)
    }

    return (
        <>
            <div className="text-start w-50 mt-4 mx-auto">
                <label>Name</label>
                <input value={name} onChange={handleChange} className="form-control" type='text' />
            </div>
            <div className="text-start w-50 mt-4 mx-auto">
                <label>Country</label>
                <select className="form-control">
                    <option className="d-none" value={''}>--select country --</option>
                    {
                        country.length === 0 && <option>-- No data found -- </option>
                    }{
                        country.map(value => <option value={value} key={value}>{value}</option>)
                    }
                </select>
            </div>
        </>
    )
}

export default CountrySelect