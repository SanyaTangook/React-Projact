import React, { createRef } from 'react'
import { useForm } from 'react-hook-form'
export default function formvalidation() {
    const cats = [['100' , 'ไอที'], ['200', 'เครื่องกล'] , ['300' ,'เคมีภัณฑ์']]
    const opts = ['Option 1' , 'Option 3' , 'Option 3']
    const inputFile = createRef()

    const {register , handleSubmit , formState:{errors}} = useForm()
  return (
    <div>form-validation</div>
  )
}
