import { Fragment, useState } from 'react'
import Link from 'next/link'
import 'twin.macro'
import Head from '../../components/Head'
import Modal from '../../components/Modal'

import { faXmark, faComments } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Refunds = () => {
     const [modal, setModal] = useState()

     const toggleModal = () => {
       setModal(!modal)
     }
  const initialValues = {
    nameVendor: '',
    description: '',
    complaint: '',
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

  return (
    <Fragment>
      <Head />
      <div tw="max-w-screen-2xl mx-auto pb-72 bg-neutral">
        <br></br>
        <div tw="pl-44 text-xs flex space-x-2">
          <Link href="/">
            <p tw="cursor-pointer">Home</p>
          </Link>
          <div>{'>'}</div>
          <p tw="text-purple-600">REFUNDS & COMPLAINTS</p>
        </div>
        <div tw="flex flex-row pl-44 pr-44 pb-24 mt-2 w-auto space-x-32">
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
            <div>
              <Link href="./Vendor">
                <label tw="cursor-pointer">VENDOR NOT RESPONDING</label>
              </Link>
            </div>
            <br></br>
            <div tw="bg-purple-100">
              <Link href="./Refunds">
                <label tw="cursor-pointer">REFUNDS & COMPLAINTS</label>
              </Link>
            </div>
          </div>
          <br></br>
          <div tw="flex border mx-auto pr-20 pt-4 pl-10 pb-10 rounded-2xl">
            <form onSubmit={submitHandler}>
              <label>Name of Vendor</label>
              <input
                name="nameVendor"
                value={formValues.nameVendor}
                required
                type="text"
                tw="border p-1 pr-2 pl-2 rounded-lg w-full bg-white"
                onChange={changeHandler}
              ></input>
              <br></br>
              <br></br>
              <label>Description of job</label>
              <input
                name="description"
                required
                value={formValues.description}
                type="text"
                tw="border p-1 pr-2 pl-2 rounded-lg w-full bg-white"
                onChange={changeHandler}
              ></input>
              <br></br>
              <br></br>
              <label>Please state your complaint here</label>
              <input
                name="complaint"
                required
                value={formValues.complaint}
                type="text"
                tw="border rounded-lg p-1 pr-2 pl-2 w-full h-28 bg-white align-top"
                onChange={changeHandler}
              ></input>
              <br></br>
              <br></br>
              <div tw="flex items-center space-x-1">
                <input type="checkbox" tw="cursor-pointer" />
                <label tw="cursor-pointer">Apply for a refund?</label>
              </div>
              <br></br>
              <div tw="flex space-x-36">
                <div tw="text-white bg-purple-600 flex justify-center items-center border p-3 pr-8 pl-8 rounded-2xl text-sm">
                  <button>Submit</button>
                </div>
                <br></br>
                <div tw=" pl-8 rounded-sm p-4 text-sm text-purple-600">
                  <button onClick={clearHandler}>Clear form</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div tw="mr-44 border mt-20 items-end justify-end flex">
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

export default Refunds
