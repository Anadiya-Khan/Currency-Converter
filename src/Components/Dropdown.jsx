import React from 'react'

const Dropdown = ({title,Currencies,setCurrencies}) => {
  return (
    <div>
      <label htmlFor='title'>{title}</label>

      <div>
        {/* // taking the user input */}
        <select onChange={(e)=>setCurrencies(e.target.value)}  className='w-full bg-white rounded-lg h-10 hover:ring-5 hover:ring-indigo-800'> 
            {Currencies.map((code)=>(
            <option  key={code} value={code}>{code}</option>
             )) }
        </select>
      </div>
    </div>
  )
}

export default Dropdown
