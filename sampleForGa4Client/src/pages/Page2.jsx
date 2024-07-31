import React from 'react'
import App from '../App'

export default function Page2() {
  return (
    <div className='h-screen w-screen flex gap-16'>
      <h1>Page 2</h1>
      <a href={App}><button>GO BACK</button></a>
    </div>
  )
}
