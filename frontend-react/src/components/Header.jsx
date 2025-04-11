import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <>
        <nav class="navbar container pt-3 pb-3 align-items-start">

            <a class="navbar-brand text-light" href="#">Stock Prediction Portal</a>

            <div>
                <Button text='Login' class='btn-outline-info'/>
                &nbsp;
                <Button text='Register' class='btn-info'/>
            </div>
        </nav>
    </>
  )
}

export default Header