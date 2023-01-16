import React from 'react'
import { useDispatch } from 'react-redux'

function Home() {

  const dispatch = useDispatch()
  const productAdd = (e)=>{
    e.preventDefault()
    let val = e.target.product.value
    dispatch({type:'ADD' , payload:{'meva':val}})
    console.log(val);
  }

  return (
    <div>
        <h1>Home</h1>
        <form action="/" onSubmit={productAdd}>
          <input name='product' type="text" placeholder='meva' />
          <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Home