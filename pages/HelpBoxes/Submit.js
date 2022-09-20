import { Fragment, useState } from 'react'
import Link from 'next/link'
import 'twin.macro'
import HeadLess from '../../components/HeadNoSearch'

const Submit = () => {
  const initialValues = {
    name: '',
    email: '',
    platform: '',
    query: '',
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
    clearHandler()
  }

  const clearHandler = e => {
    setFormValues(initialValues)
  }

  return (
    <Fragment>
      <HeadLess />
      <div tw="max-w-screen-2xl mx-auto bg-neutral lg:(pb-10) ">
        <br></br>
        <div tw="pl-10 text-xs flex space-x-1 lg:(pl-44 text-xs flex space-x-2)">
          <Link href="/">
            <p tw="cursor-pointer">Home</p>
          </Link>
          <div>{'>'}</div>
          <p tw="text-purple-600">SUBMIT QUERIES</p>
        </div>
        <div tw="pl-10 pr-10 lg:(flex flex-row pl-44 pr-44 pb-4 mt-2 w-auto space-x-32)">
          <div tw="hidden md:(block) lg:([>div]:(pl-5 pr-10 pb-4 pt-4 border rounded-xl w-full))">
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
            <div tw="bg-purple-100">
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
            <div>
              <Link href="./Refunds">
                <label tw="cursor-pointer">REFUNDS & COMPLAINTS</label>
              </Link>
            </div>
          </div>
          <br></br>
          <div tw="flex flex-wrap border mx-auto pr-4 pt-4 pl-5 pb-10 rounded-2xl">
            <form onSubmit={submitHandler}>
              <label>Name</label>
              <input
                name="name"
                value={formValues.name}
                type="text"
                tw="flex flex-wrap border bg-white w-[100%] hover:border-purple-600 focus:outline-none focus:border-purple-600 p-1 pr-0 pl-2 rounded-lg lg:(border p-1 pr-2 pl-2 rounded-lg w-full bg-white hover:border-purple-600 focus:outline-none focus:border-purple-600)"
                required
                onChange={changeHandler}
              ></input>
              <br></br>
              <br></br>
              <label>Email</label>
              <input
                name="email"
                value={formValues.email}
                type="email"
                tw="flex flex-wrap border bg-white w-[100%] hover:border-purple-600 focus:outline-none focus:border-purple-600 p-1 pr-0 pl-2 rounded-lg lg:(border p-1 pr-2 pl-2 rounded-lg w-full bg-white hover:border-purple-600 focus:outline-none focus:border-purple-600)"
                required
                onChange={changeHandler}
              ></input>
              <br></br>
              <br></br>
              <label>What do you use the platform for?</label>
              <input
                name="platform"
                value={formValues.platform}
                type="text"
                tw="flex flex-wrap border bg-white w-[100%] hover:border-purple-600 focus:outline-none focus:border-purple-600 p-1 pr-0 pl-2 rounded-lg lg:(border p-1 pr-2 pl-2 rounded-lg w-full bg-white hover:border-purple-600 focus:outline-none focus:border-purple-600)"
                required
                onChange={changeHandler}
              ></input>
              <br></br>
              <br></br>
              <label>Please what is your query?</label>
              <input
                name="query"
                value={formValues.query}
                type="text"
                tw="hover:border-purple-600 border rounded-lg w-[100%] p-1 pl-2 h-20 focus:outline-none focus:border-purple-600 lg:(border rounded-lg w-full p-1 pr-2 pl-2 h-28 bg-white align-top hover:border-purple-600 focus:outline-none focus:border-purple-600)"
                required
                onChange={changeHandler}
              ></input>
              <br></br>
              <br></br>
              <div tw="flex w-full justify-between">
                <div tw="text-[10px] p-2 text-white bg-purple-600 flex justify-center items-center border rounded-2xl lg:(text-white bg-purple-600 flex justify-center items-center border p-3 pr-8 pl-8 rounded-2xl text-sm)">
                  <button>Submit</button>
                </div>
                <br></br>
                <div tw="text-[10px] rounded-sm p-3 lg:(pl-8 rounded-sm p-4 text-sm text-purple-600)">
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

export default Submit
