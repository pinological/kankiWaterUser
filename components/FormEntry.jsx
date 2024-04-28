"use client"

import React, { lazy, useEffect, useState } from 'react'

import { palikaSCData } from '@/utility/data'

const FormEntry = () => {

  const [palikaCa , setPalikaCa] = useState(palikaSCData.Kamal)

  const[numberOfLand, setNumberOfLand] = useState(1)

  const [totalLand , setTotalLand] = useState([{bigha:0, kattha:0, dhur:0,prevKey : 0}])

  const handelPalikaChange = (e) =>{

    setPalikaCa(palikaSCData[e.target.value])
  }

  const handleNoOfLandChange = (e) => {
    setNumberOfLand(parseInt(e.target.value))
  }

  const handleTotalCalculation = (e,name,key) => {
    setTotalLand()

   
  }

  useEffect(()=>{
    console.log(totalLand)
  },[totalLand])



  return (
    <>
    <div className=' flex justify-center items-center mx-2'>
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
      <input type="text" className='border border-solid border-gray-300 p-1 rounded-md' placeholder='Citizenship'/>
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
          <select onChange={handleNoOfLandChange} className='p-1 border-input-form'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className=" grid grid-cols-4 ">
          <p className=' border border-solid border-gray-500 p-1'>No of Land</p>
          <p className=' border border-solid border-gray-500 p-1'>Bigha</p>
          <p className=' border border-solid border-gray-500 p-1'>Kattha</p>
          <p className=' border border-solid border-gray-500 p-1'>Dhur</p>
        </div>

        {[...Array(numberOfLand)].map((_,index)=>{
          return(
              <div key={index} className=" my-3 grid grid-cols-4 ">
                <span className='text-center p-1'> Land : {index + 1}</span>
                <input type="number"  placeholder='Bigha' name='bigha' onChange={(e) => handleTotalCalculation(e, 'bigha',index)} className=' mx-2 border-input-form'/>
                <input type="number" placeholder='Kattha' name='kattha' onChange={(e) => handleTotalCalculation(e, 'kattha',index)} className='mx-2 border-input-form'/>
                <input type="number" placeholder='Dhur' name='dhur' onChange={(e) => handleTotalCalculation(e, 'dhur',index)} className='mx-2 border-input-form'/>
              </div>
          )
        })}

      <div className=" grid grid-cols-4 ">
          <p className=' border border-solid border-gray-300 p-1'>Total</p>
          <p className=' border border-solid border-gray-300 p-1'>Bigha</p>
          <p className=' border border-solid border-gray-300 p-1'>Kattha</p>
          <p className=' border border-solid border-gray-300 p-1'>Dhur</p>
        </div>

      </div>

      
    </form>
    </div>
    </>
  )
}

export default FormEntry