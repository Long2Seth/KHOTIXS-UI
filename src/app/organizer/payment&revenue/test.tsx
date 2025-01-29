import React from 'react'

interface data {
    payment: number,
    currency: string,
}

const test = () => {


    const data: data = {
        payment: 1000,
        currency: "USD"
    }
    const route = `http://localhost:8080/?payment=${data.payment}&currency=${data.currency}`
  return (
    <div>
      
    </div>
  )
}

export default test
