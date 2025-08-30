import React from 'react'

const NextArrow = ({onClick}) => {
  return (
    <div onClick={onClick} className='nextArrows'>
      <svg
  width={24}
  height={24}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M14.43 5.92999L20.5 12L14.43 18.07"
    stroke="#292D32"
    strokeWidth="1.5"
    strokeMiterlimit={10}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M3.5 12H20.33"
    stroke="#292D32"
    strokeWidth="1.5"
    strokeMiterlimit={10}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
    </div>
  )
}

export default NextArrow
