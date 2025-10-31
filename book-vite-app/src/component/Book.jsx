import React from 'react'
import './Book.css'
const Book = () => {
  return (
    <div className='card'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-Pj3GLKl1TXKSCsKHtfhg3HeHcXY86mrHg&s" alt="book image" width={200} height={200} />
      <h3>Title: Physics</h3>
      <h4>Price: ₹456/-</h4>
      <button>Add To Cart</button>
    </div>
  )
}

export default Book
