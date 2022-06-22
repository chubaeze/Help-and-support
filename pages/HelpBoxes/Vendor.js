import { Fragment, useState } from 'react'
import Link from 'next/link'
import 'twin.macro'
import Head from '../../components/Head'
import Modal from '../../components/Modal'

import { faXmark, faComments } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Vendor = () => {
   const [modal, setModal] = useState()

   const toggleModal = () => {
     setModal(!modal)
   }
  const initialValues = {
    nameVendor: '',
    category: '',
    description: '',
    method: '',
    due: '',
    desSit: '',
  }

  const [formValues, setFormValues] = useState(initialValues)
  //const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false)

  const changeHandler = e => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const submitHandler = e => {
    e.preventDefault()
    setIsSubmit(true)
  }

  const clearHandler = e => {
    setFormValues(initialValues)
  }

  /*const validate = values => {
    const errors = {}
    //const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

    if (!values.nameVendor) {
      errors.nameVendor = 'Name is required';
    }

    if (!values.category) {
      errors.category = 'Category is required';
    }

    if (!values.description) {
      errors.description = 'Description is required';
    }

    if (!values.method) {
      errors.method = 'Method is required';
    }

    if (!values.due) {
      errors.due = 'Due date is required';
    }
    return errors;
  } */

  return (
    <Fragment>
      <Head />
      <div tw="max-w-screen-2xl mx-auto pb-44 bg-neutral">
        <br></br>
        <div tw="pl-44 text-xs flex space-x-2">
          <Link href="/">
            <p tw="cursor-pointer">Home</p>
          </Link>
          <div>{'>'}</div>
          <p tw="text-purple-600">VENDOR NOT RESPONDING</p>
        </div>
        <div tw="flex flex-row pl-44 pr-44 pb-4 mt-2 w-auto space-x-32">
          <div tw="[>div]:(pl-5 pr-10 pb-4 pt-4 border rounded-xl w-full)">
            <div>
              <Link href="./Errors">
                <label tw="cursor-pointer">ERRORS WITH ORDERS</label>
              </Link>
            </div>
            <br></br>
            <div>
              <Link href="./Delays">
                <label tw="cursor-pointer">DELAYS IN FULFILMENT</label>
              </Link>
            </div>
            <br></br>
            <div>
              <Link href="./Submit">
                <label tw="cursor-pointer">SUBMIT QUERIES</label>
              </Link>
            </div>
            <br></br>
            <div>
              <Link href="./Account">
                <label tw="cursor-pointer">ACCOUNT & LOGIN</label>
              </Link>
            </div>
            <br></br>
            <div tw="bg-purple-100">
              <Link href="./Vendor">
                <label tw="cursor-pointer">VENDOR NOT RESPONDING</label>
              </Link>
            </div>
            <br></br>
            <div>
              <Link href="./Refunds">
                <label tw="cursor-pointer">REFUNDS & COMPLAINTS</label>
              </Link>
            </div>
          </div>
          <br></br>
          <div tw="flex border mx-auto pr-20 pt-4 pl-10 rounded-2xl">
            <form onSubmit={submitHandler}>
              <label>Name of Vendor</label>
              <input
                name="nameVendor"
                type="text"
                value={formValues.nameVendor}
                required
                tw="border p-1 pr-2 pl-2 rounded-lg w-full bg-white"
                onChange={changeHandler}
              ></input>

              <br></br>
              <br></br>
              <label>Category of job</label>
              <input
                name="category"
                type="text"
                value={formValues.category}
                required
                tw="border p-1 pr-2 pl-2 rounded-lg w-full bg-white"
                onChange={changeHandler}
              ></input>
              <br></br>
              <br></br>
              <label>Description of job</label>
              <input
                name="description"
                type="text"
                value={formValues.description}
                required
                tw="border p-1 pr-2 pl-2 rounded-lg w-full bg-white"
                onChange={changeHandler}
              ></input>
              <br></br>
              <br></br>
              <label>Method(s) of communication</label>
              <input
                name="method"
                type="text"
                value={formValues.method}
                required
                tw="border p-1 pr-2 pl-2 rounded-lg w-full bg-white"
                onChange={changeHandler}
              ></input>
              <br></br>
              <br></br>
              <label>Due date</label>
              <input
                name="due"
                type="date"
                value={formValues.due}
                required
                tw="border p-1 pr-2 pl-2 rounded-lg w-full bg-white"
                onChange={changeHandler}
              ></input>
              <br></br>
              <br></br>
              <label>Description of the situation</label>
              <input
                name="desSit"
                type="text"
                value={formValues.desSit}
                tw="border p-1 pr-2 pl-2 rounded-lg w-full h-28 bg-white align-top"
                onChange={changeHandler}
              ></input>
              <br></br>
              <br></br>
              <div tw="flex space-x-36">
                <div tw="text-white bg-purple-600 flex justify-center items-center border p-3 pr-8 pl-8 rounded-2xl text-sm">
                  <button type="submit">Submit</button>
                </div>
                <br></br>
                <div tw=" pl-8 rounded-sm p-4 text-sm text-purple-600">
                  <button onClick={clearHandler}>Clear form</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div tw="mr-44 mt-20 items-end justify-end flex">
          <button onClick={toggleModal}>
            <FontAwesomeIcon
              tw="fixed text-4xl text-purple-600"
              icon={faComments}
            />
          </button>
          {modal && (
            <div tw="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-end items-end">
              <div tw="bg-white border w-3/12 h-3/6 rounded-xl mr-10 mb-5 items-center justify-center">
                <div tw="flex justify-between mx-4 my-4">
                  <Modal />
                  <div>
                    <button onClick={toggleModal}>
                      <FontAwesomeIcon tw="text-lg" icon={faXmark} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  )
}

export default Vendor
