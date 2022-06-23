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
          <div tw="[>div]:(cursor-pointer m-2 h-auto p-4 border-black rounded-xl w-11/12 hover:shadow) bg-white flex flex-col justify-between rounded-xl w-8/12">
            <Link href="/">
              <div>
                <h3 tw="text-lg">Adding a new Bank account</h3>
                <p tw="text-sm text-gray-400">15 Articles</p>
              </div>
            </Link>
            <Link href="/">
              <div>
                <h3 tw="text-lg">
                  Upgrading from Individual Account to Business
                </h3>
                <p tw="text-sm text-gray-400">13 Articles</p>
              </div>
            </Link>
            <Link href="/">
              <div>
                <h3 tw="text-lg">Changing your freelancer</h3>
                <p tw="text-sm text-gray-400">4 Articles</p>
              </div>
            </Link>
            <Link href="/">
              <div>
                <h3 tw="text-lg">"I got charged twice!"</h3>
                <p tw="text-sm text-gray-400">5 Articles</p>
              </div>
            </Link>
            <Link href="/">
              <div>
                <h3 tw="text-lg">How long does it take to withdraw?</h3>
                <p tw="text-sm text-gray-400">3 Articles</p>
              </div>
            </Link>
            <Link href="/">
              <div tw="mb-2">
                <h3 tw="text-lg">Why aren't there recurring gigs?</h3>
                <p tw="text-sm text-gray-400">28 Articles</p>
              </div>
            </Link>
          </div>
        </div>
        <div tw="flex flex-col items-end justify-end w-full pr-[185px]">
          <p>Can't find what you're looking for?</p>
          <Link href="../Support/SupportVendor">
            <p tw="underline cursor-pointer font-bold text-purple-600">
              Contact support
            </p>
          </Link>
        </div>
      </div>
    </Fragment>
  )
}

export default Vendor
