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
    <form className='max-w-screen-xl w-1/1.5' >
      <div className='form-lable-group'>
      <label> Type of water users </label>
      <select className='p-1 border-input-form'>
        <option value="Owner">Owner</option>
        <option value="Rental">Rental</option>
      </select>
      </div>

      <div className='form-lable-group '>
      <label> Name of Users </label>
      <input type="text" className='border-input-form' placeholder='Your Name'/>
      </div>

      <div className='form-lable-group'>
      <label> Citizenship </label>
      <input type="text" className='border border-solid border-gray-500 p-1 rounded-md' placeholder='Citizenship'/>
      </div>

      <div className='form-lable-group'>
      <label> Palika </label>
      <select onChange={handelPalikaChange} className='p-1 border-input-form'>
        <option value="Kamal">Kamal</option>
        <option value="Gauriganj">Gauriganj</option>
        <option value="Gauradaha">Gauradaha</option>
        <option value="Shivasatakshi">Shivasatakshi</option>
      </select>
      </div>

      <div className='form-lable-group'>
      <label> Secondary  </label>
      <select className='p-1 border-input-form'>
        {palikaCa.map((item)=>{
          return <option key={item} value={item}>{item}</option>
        })}
      </select>
      </div>

      <div className="land-cal">
      <div className='form-lable-group'>
      <label> Number of Land </label>
      <select className='p-1 border-input-form'>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      </div>
      </div>

      
    </form>
    </div>
    </>
  )
}

export default FormEntry