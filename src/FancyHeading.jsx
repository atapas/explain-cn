import React from 'react'
import clsx from 'clsx';

const FancyHeading = ({isPrimary, title}) => {
  return (
    <h1
        className={clsx("text-center text-grey-800", {"text-3xl text-blue-500": isPrimary})}
      >{title}</h1>
  )
}

export default FancyHeading