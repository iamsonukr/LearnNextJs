
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <h1>This is me</h1>
      {children}
      </div>
  )
}

export default layout