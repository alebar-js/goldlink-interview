import React from 'react'

const colors = {
    low: '#7879F1',
    medium: '#9B51E0',
    high: '#6148C2'
}


interface ITagProps {
    volatility: 'low' | 'medium' | 'high'
}
const Tag = ({ volatility }: ITagProps) => {
  return (
    <div style={{ backgroundColor: colors[volatility]}} className={`py-1 px-3 rounded-full text-white`}>{volatility}</div>
  )
}

export default Tag