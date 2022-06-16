import { Fragment } from 'react'
import Link from 'next/link'
import 'twin.macro'

const Refunds = () => {
  return (
    <Fragment>
      <div tw="flex flex-col pb-48 bg-neutral">
        <div tw="p-20 pt-14 pb-6 bg-white">
          <div tw="flex justify-between items-center">
            <div>
              <Link href="/">
                <h1 tw="text-5xl font-bold cursor-pointer font-sans">
                  Let's Help
                </h1>
              </Link>
              <div tw="w-3/4">
                <p tw="text-base w-max text-gray-500 mt-2">
                  Complain about a job and/or apply for a refund.
                </p>
              </div>
            </div>
            <div tw="text-right">ICON</div>
          </div>
          <div tw="items-center flex justify-center">
            <input
              placeholder="Search stuff"
              type="text"
              tw="border mt-10 text-sm w-2/3 rounded-md p-4 hover:border-black "
            ></input>
          </div>
        </div>
        <br></br>
        <div tw="pl-20 text-xs flex space-x-2">
          <Link href="/">
            <p tw="cursor-pointer">Home</p>
          </Link>
          <div>{'>'}</div>
          <p tw="text-purple-600">REFUNDS & COMPLAINTS</p>
        </div>
        <div tw="flex flex-row pl-20 mt-2 w-auto space-x-80">
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
            <form>
              <label>Name of Vendor</label>
              <input type="text" tw="border rounded-lg w-full bg-white"></input>
              <br></br>
              <br></br>
              <label>Description of job</label>
              <input type="text" tw="border rounded-lg w-full bg-white"></input>
              <br></br>
              <br></br>
              <label>Please state your complaint here</label>
              <input
                type="text"
                tw="border rounded-lg w-full h-28 bg-white align-top"
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
                  <button>Clear form</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Refunds
