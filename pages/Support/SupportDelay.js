import { Fragment, useState } from 'react'
import Link from 'next/link'
import 'twin.macro'
import HeadLess from '../../components/HeadNoSearch'

const SupportDelays = () => {
  const initialValues = {
    startDate: '',
    subject: '',
    dueDate: '',
    contact: '',
    nameVendor: '',
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
        <div tw="pl-10 text-xs flex space-x-1 mb-3 lg:(pl-44 text-xs flex space-x-2)">
          <Link href="/">
            <p tw="cursor-pointer">Home</p>
          </Link>
          <div>{'>'}</div>
          <p>DELAYS IN FULFILMENT</p>
          <div>{'>'}</div>
          <p tw="text-purple-600">CONTACT SUPPORT</p>
        </div>
        <div tw="pl-10 pr-10 flex space-x-1 lg:(pl-44 mt-2 pb-4 w-auto flex flex-row space-x-32)">
          <div tw="hidden md:(block) lg:([>div]:(pl-5 pr-10 pb-4 pt-4 border rounded-xl w-full))">
            <div>
              <Link href="../HelpBoxes/Errors">
                <label tw="cursor-pointer">ERRORS WITH ORDERS</label>
              </Link>
            </div>
            <br></br>
            <div tw="bg-purple-100">
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

          <div tw="lg:(flex border mx-auto pr-20 pt-4 pl-10 rounded-2xl)">
            <form onSubmit={submitHandler}>
              <label>Start date</label>
              <input
                name="startDate"
                value={formValues.startDate}
                type="date"
                required
                tw="border p-1 pr-2 pl-2 rounded-lg w-full bg-white hover:border-purple-600 focus:outline-none focus:border-purple-600"
                onChange={changeHandler}
              ></input>
              <br></br>
              <br></br>
              <label>Subject area</label>
              <input
                name="subject"
                value={formValues.subject}
                type="text"
                required
                tw="border p-1 pr-2 pl-2 rounded-lg w-full bg-white hover:border-purple-600 focus:outline-none focus:border-purple-600"
                onChange={changeHandler}
              ></input>
              <br></br>
              <br></br>
              <label>Initial due date</label>
              <input
                name="dueDate"
                value={formValues.dueDate}
                type="date"
                required
                tw="border p-1 pr-2 pl-2 rounded-lg w-full bg-white hover:border-purple-600 focus:outline-none focus:border-purple-600"
                onChange={changeHandler}
              ></input>
              <br></br>
              <br></br>
              <label>Last time of contact with vendor</label>
              <input
                name="contact"
                value={formValues.contact}
                required
                type="text"
                tw="border p-1 pr-2 pl-2 rounded-lg w-full bg-white hover:border-purple-600 focus:outline-none focus:border-purple-600"
                onChange={changeHandler}
              ></input>
              <br></br>
              <br></br>
              <label>Name of vendor</label>
              <input
                name="nameVendor"
                value={formValues.nameVendor}
                required
                type="text"
                tw="border p-1 pr-2 pl-2 rounded-lg w-full bg-white hover:border-purple-600 focus:outline-none focus:border-purple-600"
                onChange={changeHandler}
              ></input>
              <br></br>
              <br></br>

              <div tw="flex justify-between">
                <div tw="text-white bg-purple-600 flex justify-center items-center border rounded-2xl text-xs p-2 pr-4 pl-4 lg:(text-sm p-3 pr-8 pl-8)">
                  <button>Submit</button>
                </div>
                <br></br>
                <div tw="rounded-sm text-xs p-2 pl-4 pt-3 lg:(text-sm pl-11) text-purple-600">
                  <button onClick={clearHandler}>Clear form</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default SupportDelays
