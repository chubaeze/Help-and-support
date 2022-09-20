import { Fragment, useState } from 'react'
import Link from 'next/link'
import 'twin.macro'
import HeadLess from '../../components/HeadNoSearch'

const SupportError = () => {
  const initialValues = {
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
  }
  //const [formErrors, setFormErrors] = useState({});
  const [checkValues, setCheckValues] = useState(initialValues)
  const [isSubmit, setIsSubmit] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const checkHandler = e => {
    if (e.target.checked) {
      setIsChecked(true)
      console.log(isChecked)
    } else if (!e.target.checked) {
      setIsChecked(false)
    }
  }

  const submitHandler = e => {
    if (isChecked === true) {
      e.preventDefault()
      setIsSubmit(true)
      console.log(isSubmit)
    }
  }

  const clearHandler = e => {
    console.log(checkValues)
  }

  return (
    <Fragment>
      <HeadLess />
      <div tw="max-w-screen-2xl mx-auto bg-neutral lg:(pb-10)">
        <br></br>
        <div tw="pl-10 text-xs flex space-x-1 mb-3 lg:(pl-44 text-xs flex space-x-2)">
          <Link href="/">
            <p tw="cursor-pointer">Home</p>
          </Link>
          <div>{'>'}</div>
          <p>ERRORS WITH ORDERS</p>
          <div>{'>'}</div>
          <p tw="text-purple-600">CONTACT SUPPORT</p>
        </div>
        <div tw="pl-10 pr-10 flex space-x-1 lg:(pl-44 mt-2 pb-4 w-auto flex flex-row space-x-16)">
          <div tw="hidden md:(block) lg:([>div]:(pl-5 pr-10 pb-4 pt-4 border rounded-xl w-full))">
            <div tw="bg-purple-100">
              <Link href="../HelpBoxes/Errors">
                <label tw="cursor-pointer">ERRORS WITH ORDERS</label>
              </Link>
            </div>
            <br></br>
            <div>
              <Link href="../HelpBoxes/Delays">
                <label tw="cursor-pointer">DELAYS IN FULFILMENT</label>
              </Link>
            </div>
            <br></br>
            <div>
              <Link href="../HelpBoxes/Submit">
                <label tw="cursor-pointer">SUBMIT QUERIES</label>
              </Link>
            </div>
            <br></br>
            <div>
              <Link href="../HelpBoxes/Account">
                <label tw="cursor-pointer">ACCOUNT & LOGIN</label>
              </Link>
            </div>
            <br></br>
            <div>
              <Link href="../HelpBoxes/Vendor">
                <label tw="cursor-pointer">VENDOR NOT RESPONDING</label>
              </Link>
            </div>
            <br></br>
            <div>
              <Link href="../HelpBoxes/Refunds">
                <label tw="cursor-pointer">REFUNDS & COMPLAINTS</label>
              </Link>
            </div>
          </div>
          <br></br>
          <div tw=" [>div]:(space-x-1 mb-1) flex flex-col mx-auto lg:(pr-20 pt-4 pl-10) rounded-2xl">
            <div>
              <input
                name="first"
                value={checkValues.first}
                onChange={checkHandler}
                type="checkbox"
              ></input>
              <label>Past delivery date?</label>
            </div>
            <div>
              <input
                name="second"
                value={checkValues.second}
                onChange={checkHandler}
                type="checkbox"
              ></input>
              <label>
                Was the order delivered perceived to be below the expected
                experience level?
              </label>
            </div>
            <div>
              <input
                name="third"
                value={checkValues.third}
                onChange={checkHandler}
                type="checkbox"
              ></input>
              <label>No reply from your vendor?</label>
            </div>
            <div>
              <input
                name="fourth"
                value={checkValues.fourth}
                onChange={checkHandler}
                type="checkbox"
              ></input>
              <label>Missed step(s) during order cycle?</label>
            </div>
            <div>
              <input
                name="fifth"
                value={checkValues.fifth}
                onChange={checkHandler}
                type="checkbox"
              ></input>
              <label>Missing item(s) or service(s) in order delivery?</label>
            </div>
            <br></br>
            <div tw="flex flex-col">
              <label>
                If you have other errors with your orders not listed above
                please let us know below.
              </label>
              <input
                type="text"
                tw="h-28 p-1 pr-2 pl-2 rounded-2xl border hover:border-purple-600 focus:outline-none focus:border-purple-600"
              ></input>
            </div>
            <br></br>
            <div tw="flex justify-between">
              <button
                onClick={submitHandler}
                tw="text-white bg-purple-600 flex justify-center items-center border rounded-2xl text-xs p-2 pr-4 pl-4 lg:(text-sm p-3 pr-8 pl-8)"
              >
                Next
              </button>
              <button
                onClick={clearHandler}
                tw="rounded-sm text-xs p-2 pl-4 pt-3 lg:(text-sm pl-11) text-purple-600"
              >
                Clear choices
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default SupportError
