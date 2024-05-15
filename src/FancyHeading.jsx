import React from 'react'
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const FancyHeading = ({isPrimary, title}) => {
  return (
    <h1
        className={twMerge(clsx("text-center text-grey-800", {"text-3xl text-blue-500": isPrimary}))}
      >{title}</h1>
  )
}

export default FancyHeading