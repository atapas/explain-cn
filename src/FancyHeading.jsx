import React from 'react'
import { cn } from './lib/utils'

const FancyHeading = ({isPrimary, title}) => {
  return (
    <h1
        className={cn("text-center text-grey-800", {"text-3xl text-blue-500": isPrimary})}
      >{title}</h1>
  )
}

export default FancyHeading