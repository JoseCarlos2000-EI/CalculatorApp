import React from 'react'

export default function Input({  type, plh, set, value }) {
 const handleChangeInput = ({target}) => {
    set( parseInt(target.value))
 }
  return (
    <input 
    type = { type } 
    onChange={ handleChangeInput } 
    value = { value }
    placeholder={plh}
    min = {0}
    max={20}
    />
  )
}
