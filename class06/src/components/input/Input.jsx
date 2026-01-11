import React from 'react'
import { Form } from 'react-bootstrap'

const Input = ({label,type,ONCHANGE}) => {
  return (
    <>
     <Form.Label>{label}</Form.Label>
          <Form.Control
            onChange={ONCHANGE}
            type={type}
          />

          {/* <h1>input</h1> */}
      
    </>
  )
}

export default Input
