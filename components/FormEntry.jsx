"use client"

import React, { useState } from 'react'

import { palikaSCData } from '@/utility/data'

const FormEntry = () => {

  const [palikaCa , setPalikaCa] = useState(palikaSCData.Kamal)

  const handelPalikaChange = (e) =>{

    setPalikaCa(palikaSCData[e.target.value])
  }

  return (
    <>
    <div className=' flex justify-center items-center'>
    <form className='max-w-screen-xl w-1/3' >
      <div className='grid grid-cols-2 gap-3 my-4'>
      <label> Type of water users </label>
      <select className='p-1 '>
        <option value="Owner">Owner</option>
        <option value="Rental">Rental</option>
      </select>
      </div>

      <div className='grid grid-cols-2 gap-3 my-4 items-center'>
      <label> Name of Users </label>
      <input type="text" className='border border-solid border-gray-500 p-1 rounded-md' placeholder='Your Name'/>
      </div>

      <div className='grid grid-cols-2 gap-3 my-4 items-center'>
      <label> Citizenship </label>
      <input type="text" className='border border-solid border-gray-500 p-1 rounded-md' placeholder='Citizenship'/>
      </div>

      <div className='grid grid-cols-2 gap-3 my-4 items-center'>
      <label> Palika </label>
      <select onChange={handelPalikaChange} className='p-1 '>
        <option value="Kamal">Kamal</option>
        <option value="Gauriganj">Gauriganj</option>
        <option value="Gauradaha">Gauradaha</option>
        <option value="Shivasatakshi">Shivasatakshi</option>
      </select>
      </div>

      <div className='grid grid-cols-2 gap-3 my-4 items-center'>
      <label> Secondary  </label>
      <select className='p-1 '>
        {palikaCa.map((item)=>{
          return <option key={item} value={item}>{item}</option>
        })}
      </select>
      </div>


      
    </form>
    </div>
    </>
  )
}

export default FormEntry