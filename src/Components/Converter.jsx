import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown'

const Converter = () => {
    const [amt,setAmt] = useState(1);
    const [currency,setCurrency] =useState([]);
    const [from,setFrom] = useState("USD");
    const [to,setTo] = useState("INR");
    const [convertedAmont,setConvertedAmont] = useState(null);
    const [Loading,setLoading] = useState(false);

    const fetchCurrency = async() =>{
        try{
            const res = await fetch("https://api.frankfurter.dev/v1/currencies"); // will be in string 
            const data = await res.json(); // convert into object 
            setCurrency(Object.keys(data));
            console.log(data)
            
        }catch(error){
           console.error("Error while fetching",error);
        }
    }
    useEffect(()=>{
          fetchCurrency();
    },[])

    const convertingFunc = async() =>{
         try{
            if(!amt) return;
            setLoading(true);
            const res = await fetch(`https://api.frankfurter.app/latest?amount=${amt}&from=${from}&to=${to}`);
            const data = await res.json();

            setConvertedAmont(data.rates[to]+" "+ to) // ouput dikhayga code ke sath
         }catch(error){
            console.error(error);
         }finally{
            setLoading(false);
         }
    }


  return (
    <div className='bg-gray-200 rounded-lg shadow-2xl p-10'>
      <h1 className='text-bold text-xl'>Currency Converter</h1>

      <div className='mt-5'>

        <Dropdown title='From' Currencies={currency} setCurrencies={setFrom} />
        
        <Dropdown title='To' Currencies={currency} setCurrencies={setTo}/>
      </div>

      <div>
        <label className='block mt-5 mb-1 text-xl'>Amount : </label>
        <input type='number' onChange={(e)=> setAmt(e.target.value)} value={amt}  className='w-full bg-white rounded-lg h-10 hover:ring-5 hover:ring-indigo-800'/>
      </div>

      <div>
        <button type='submit' onClick={convertingFunc} className='bg-blue-500 rounded-lg mt-5 p-3 hover:ring-2'>Convert</button>
      </div>

      <div>
        {Loading && <p>Loading....</p>}
        {convertedAmont && 
      <p>Converted : {convertedAmont} <br/> From:{from} - To:{to}</p>}</div>
    </div>
  )
}

export default Converter
