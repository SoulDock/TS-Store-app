import React from 'react'

interface LoaderErrorProps {
    error: string
}

export default function LoaderError({error}: LoaderErrorProps) {
  return (
    <p className='text-center text-red-500 font-black'>{error}</p>
  )
}
