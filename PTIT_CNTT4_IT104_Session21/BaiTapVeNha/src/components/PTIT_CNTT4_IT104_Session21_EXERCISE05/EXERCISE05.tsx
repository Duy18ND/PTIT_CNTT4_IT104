import React from 'react'

export default function EXERCISE05() {
  return (
    <div className='border-20 border-[#d7f2fe] w-[350px] h-[200px] rounded-[12px] ml-[100px] mt-[50px] bg-[#b7e8fd] relative border-[#a4dbf3]'>
        <div className='p-5 text-[#0369a1] font-[500]'>Relative parent</div>
        <div className='font-[500] text-[#fffffe] bg-[#0ea5e9] w-[130px] p-3 rounded-[7px] absolute left-0 top-[70%]'>Absolute child</div>
    </div>
  )
}
