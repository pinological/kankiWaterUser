"use client"

import React, { useState } from 'react'
import { useRef } from 'react'

const FormEntry = () => {

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
      <select className='p-1 '>
        <option value="Kamal">Kamal</option>
        <option value="Gauriganj">Gauriganj</option>
        <option value="Gauradaha">Gauradaha</option>
        <option value="Shivasatakshi ">Rental</option>
      </select>
      </div>

      <div className='grid grid-cols-2 gap-3 my-4 items-center'>
      <label> Secondary  </label>
      <select className='p-1 '>
        <option value="Kamal">Kamal</option>
        <option value="Gauriganj">Gauriganj</option>
        <option value="Gauradaha">Gauradaha</option>
        <option value="Shivasatakshi ">Rental</option>
      </select>
      </div>
      
    </form>
    </div>
    </>
  )
}

export default FormEntry