import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
        <div className="container">
            <div className="p-5 text-center bg-light-dard rounded">
                <h1 className="text-light">Stock Prediction App</h1>
                <p className="lead text-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis hic voluptatum praesentium, veniam, blanditiis laboriosam laborum fuga amet obcaecati nemo repudiandae mollitia magni. Aliquid reiciendis nobis, ducimus maxime vel, nostrum, excepturi suscipit tenetur tempore omnis facilis? Et iste, eos, natus tenetur nihil ducimus asperiores possimus neque obcaecati, eligendi unde nulla.
                </p>
                <Button text='Explore Now' class='btn-outline-info'/>
            </div>
        </div>
    </>
  )
}

export default Main