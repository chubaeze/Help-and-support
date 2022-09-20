import { Fragment, useState } from 'react'
import Link from 'next/link'
import 'twin.macro'
import HeadLess from '../../../../../components/HeadNoSearch'

import { faXmark, faComments } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ArticleTwo = () => {
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
      <HeadLess />
      <div tw="max-w-screen-2xl mx-auto bg-neutral lg:(pb-10)">
        <br></br>
        <div tw="pl-10 text-xs flex space-x-1 lg:(pl-44 text-xs flex space-x-2)">
          <Link href="/">
            <p tw="cursor-pointer">Home</p>
          </Link>
          <div>{'>'}</div>
          <p tw="text-purple-600">VENDOR NOT RESPONDING</p>
        </div>
        <div tw="pl-10 pr-10 lg:(flex flex-row pl-44 pr-44 pb-4 mt-2 w-auto space-x-32)">
          <div tw="hidden md:(block) lg:([>div]:(pl-5 pr-10 pb-4 pt-4 border rounded-xl w-full))">
            <div>
              <Link href="../../../Errors">
                <label tw="cursor-pointer">ERRORS WITH ORDERS</label>
              </Link>
            </div>
            <br></br>
            <div>
              <Link href="../../../Delays">
                <label tw="cursor-pointer">DELAYS IN FULFILMENT</label>
              </Link>
            </div>
            <br></br>
            <div>
              <Link href="../../../Submit">
                <label tw="cursor-pointer">SUBMIT QUERIES</label>
              </Link>
            </div>
            <br></br>
            <div>
              <Link href="../../../Account">
                <label tw="cursor-pointer">ACCOUNT & LOGIN</label>
              </Link>
            </div>
            <br></br>
            <div tw="bg-purple-100">
              <Link href="../../../Vendor">
                <label tw="cursor-pointer">VENDOR NOT RESPONDING</label>
              </Link>
            </div>
            <br></br>
            <div>
              <Link href="../../../Refunds">
                <label tw="cursor-pointer">REFUNDS & COMPLAINTS</label>
              </Link>
            </div>
          </div>
          <div tw="[>div]:(cursor-pointer m-2 h-auto p-4 border-black rounded-xl w-11/12 hover:shadow) bg-white flex flex-col justify-between rounded-xl lg:([>div]:(cursor-pointer m-2 h-auto p-4 border-black rounded-xl w-11/12 hover:shadow) bg-white flex flex-col justify-between rounded-xl w-8/12)">
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Maecenas pharetra convallis posuere morbi leo. Id diam maecenas
                ultricies mi eget mauris pharetra et ultrices. Eleifend mi in
                nulla posuere sollicitudin aliquam ultrices sagittis. Nec
                feugiat in fermentum posuere urna nec tincidunt praesent semper.
                Nulla at volutpat diam ut venenatis tellus. Id cursus metus
                aliquam eleifend mi in nulla. Tempor orci dapibus ultrices in
                iaculis nunc sed. Pellentesque adipiscing commodo elit at. Est
                ultricies integer quis auctor elit sed vulputate mi. Ultrices in
                iaculis nunc sed augue. Sit amet commodo nulla facilisi nullam
                vehicula ipsum a arcu. Eros in cursus turpis massa tincidunt dui
                ut ornare. Nibh venenatis cras sed felis eget velit aliquet
                sagittis. Mauris ultrices eros in cursus turpis massa tincidunt.
                Nisi lacus sed viverra tellus in hac habitasse platea dictumst.
                Volutpat odio facilisis mauris sit amet massa.
              </p>
            </div>
          </div>
        </div>
        <div tw="pb-2 flex flex-row text-xs justify-center items-center mt-2 space-x-1 lg:(flex flex-col items-end justify-end w-full pr-[185px])">
          <p>Can't find what you're looking for?</p>
          <Link href="../../../../Support/SupportVendor">
            <p tw="underline cursor-pointer font-bold text-purple-600">
              Contact support
            </p>
          </Link>
        </div>
      </div>
    </Fragment>
  )
}

export default ArticleTwo
