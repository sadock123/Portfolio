/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './main.css';
import Image from './image/Sadock.jpeg'
import Avatar from '@mui/material/Avatar';
function main() {
  return (
    <div className='root'>
        <div className="heading"><h3>Welcome to Sadock's Portfolio</h3></div>
        <div className="contents">
        <div className="writing">
         Hey, My name is Sadock Chakma and I am at my pre-final year of his college Life in Indian Institue of Technology, Dharwad.
          <br/>My major is in Electrical Engineering, but my hobby is in Coding .
          <br/>
          <br/>
          <br/>
          I use Cpp, Python, Javascript for my programmes.
            </div>
        <div className='image'>
          <div className="myphoto">
          <Avatar
        alt="Sadock Chakma"
        src={Image}
        sx={{ width: '15vw', height: '40vh' }}
      />
          </div>
        </div>
          </div>
    </div>
  )
}

export default main