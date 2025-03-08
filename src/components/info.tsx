"use client"

import React from 'react'
import { Product } from '../../types'
import Currecy from './ui/currecy'
import { Button } from './ui/button'
interface InfoProps {
    data:Product
}


export default function Info({data}:InfoProps) {
    async function handlePay() {
        const randomOrderId = `${data.id}-${Date.now()}`; 
        try {
          const res = await fetch("/api/payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              orderId: randomOrderId,
              price: Number(data.price),
            }),
          });
    
          const result: any = await res.json();
          
          if (result.token) {
            window.snap.pay(result.token, {
              onSuccess: function (result: any) {
                console.log("Payment success", result);
              },
              onPending: function (result: any) {
                console.log("Payment pending", result);
              },
              onError: function (result: any) {
                console.log("Payment failed", result);
              },
              onClose: function () {
                console.log("Customer closed the popup without finishing the payment");
              },
            });
          } else {
            console.log("Token tidak ditemukan");
          }
        } catch (error) {
          console.log("Error saat pembayaran", error);
        }
      }
  return (
    <div>
        <h1 className="font-bold text-3xl">{data.name}</h1>
        <div className='mt-3 flex items-end justify-between'>
            <p className='text-2xl text-gray-900'><Currecy value={Number(data?.price)} /></p>
        </div>
        <hr  className='my-4'/>
        <div className='mt-10 flex items-center gap-x-3'>
            <Button onClick={handlePay} className='flex items-center gap-x-2'>
                Buy
            </Button>
        </div>
    </div>
  )
}
