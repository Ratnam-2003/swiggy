import React, { useState } from 'react'
import { useSelector } from 'react-redux'


function Cart() {
   
  const cartItems = useSelector((state) => {
    return state.cart.items
  })
  const totalMoney = cartItems.reduce((prev, curr) => {
    return prev+(curr.price/100)
  }, 0)

  function handlePayment() {
      console.log(`paying total amount of ${totalMoney}`)
      
      const options = {
        key: 'rzp_test_R7HiwY7wvcy3JEghhhiri', // Replace with your Razorpay Test/Live Key ID
        amount:totalMoney*100, // Amount in paise (₹5.00 = 500 paise)
        currency: 'INR',
        name: 'Biryani center',
        handler: async function (response) {
          // Verify payment on backend
          try {
            const verifyResponse = await axios.post('http://localhost:8080/verify-payment', {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });
            if (verifyResponse.data.success) {
              alert('Payment successful!');
            } else {
              alert('Payment verification failed!');
            }
          } catch (error) {
            alert('Payment verification error: ' + error.message);
          }
        },
      };

      const rzpl= new window.Razorpay(options);
        rzpl.on('payment.failed',(response)=>{
          alert('Payment failed:' +response.error.description);
        })
      rzpl.open();
    }
  return (
    <div>
      {
        cartItems.map((x) => {
          return <div className='cart-items'>
            <h1>{x.name}</h1>
            <h1>{x.price/100}</h1>
          </div>
        })
      }
      <center>
        <button onClick={handlePayment} className='pay-btn'>Pay Now {totalMoney}</button>
      </center>
    </div>
  )
}

export default Cart
