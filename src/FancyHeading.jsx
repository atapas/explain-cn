import React from 'react'
import { cn } from './lib/utils'

const FancyHeading = ({className, variant, title}) => {

  function getVariantStyle(variant) {
    switch (variant) {
      case 'primary':
        return "text-center text-3xl text-blue-500"
      
      case 'secondary':  
        return "text-center  text-xl text-green-500"

      default:
        return "text-center text-grey-800"  
    }
  }

  return (
    <h1
        className={cn(getVariantStyle(variant), className)}
      >{title}</h1>
  )
}

export default FancyHeading