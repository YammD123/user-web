import React from 'react'
const formatter = new Intl.NumberFormat("id-ID",{
    minimumFractionDigits:0,
    style:"currency",
    currency:"IDR",
  })
export default function Currecy({value}:{value:number}) {
  return (
    <div className='font-semibold'>
        {formatter.format(value)}
    </div>
  )
}
