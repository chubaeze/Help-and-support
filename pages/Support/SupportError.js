import { Fragment, useState } from 'react'
import Link from 'next/link'
import 'twin.macro'
import Head from '/components/Head'

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
      <Head />
      <div tw="max-w-screen-2xl mx-auto pb-72 bg-neutral">
        <br></br>
        <div tw="pl-44 text-xs flex space-x-2">
          <Link href="/">
            <p tw="cursor-pointer">Home</p>
          </Link>
          <div>{'>'}</div>
          <p>ERRORS WITH ORDERS</p>
          <div>{'>'}</div>
          <p tw="text-purple-600">CONTACT SUPPORT</p>
        </div>
        <div tw="flex flex-row pl-44 pr-44 pb-24 mt-2 w-auto space-x-16">
          <div tw="[>div]:( pl-5 pr-10 pb-4 pt-4 border rounded-xl w-full)">
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

          <div tw=" [>div]:(space-x-1 mb-1) flex flex-col mx-auto pr-20 pt-4 pl-10 rounded-2xl">
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
                tw="border p-1 pr-4 pl-4 rounded-lg bg-purple-600 text-white"
              >
                Next
              </button>
              <button onClick={clearHandler} tw="text-purple-600">
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
