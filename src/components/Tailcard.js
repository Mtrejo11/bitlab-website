import React from 'react';

import '../styles/index.css'
export default ({ body, image }) => {
  return (
    <div className=" flex-row rounded cursor-pointer card py-8 px-8 hover:shadow-2xl">
      <img src={image} alt=""></img>
      <div className="">
        <p className="card__body"> {body}</p>
      </div>
    </div>
  )
}