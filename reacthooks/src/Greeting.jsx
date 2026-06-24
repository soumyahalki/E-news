import React from 'react'

export default function Greeting(props) {
  return (
    <div>
      <h3>Hello, {props.fn}!, Your name is {props.name}?</h3>
      
    </div>
  )
}