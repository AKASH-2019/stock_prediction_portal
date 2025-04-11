import React from 'react'

const Button = (props) => {
  return (
    <>
        <a class={`btn ${props.class}`} href=''>{props.text}</a>
    </>
  )
}

export default Button