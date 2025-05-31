import React from 'react'

const TransactionNull = () => {
  return (
    <div className='flex w-full flex-col items-center gap-9 mt-7'>
      <img src="image\nullState.svg" alt="image" className="w-auto h-auto"/>
      <p className='text-[#767676] font-normal text-sm lg:text-base tracking-wide'>You have no transactions yet</p>
    </div>
  )
}

export default TransactionNull
