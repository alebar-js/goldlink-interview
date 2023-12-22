import React from 'react'

interface ICardProps {
    children?: React.ReactNode
}

const Card: React.FC<ICardProps> = ({ children }: ICardProps) => {
  return (
    <article className='rounded-lg shadow-md p-4'>
        {children}
    </article>
  )
}

export default Card