import React from 'react'
import { Product } from '../../types'
import NoResult from './ui/no-result'
interface ProductListProps {
    title: string,
    item : Product[]
}


export default function ProductList({item,title}: ProductListProps) {
  return (
    <div className='space-y-4'>
        <h3 className='font-bold text-3xl'>{title}</h3>
        {item.length === 0 && <NoResult/>}
    </div>
  )
}
