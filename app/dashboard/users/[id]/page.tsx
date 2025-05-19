
import React from 'react'

const page = ({params}:{params:{id:string}}) => {
    const {id}=params
  return (
    <div className='3xl' >User {id}</div>
  )
}

export default page