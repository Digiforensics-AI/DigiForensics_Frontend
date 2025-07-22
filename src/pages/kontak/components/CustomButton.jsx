import React from 'react'
import { Link } from 'react-router';
export default function CustomButton({to, name, className}) {
  return (
    <>
  <Link className={className} to={to}>
  {name}
  </Link>

    </>
  )
}
