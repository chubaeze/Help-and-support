import { Fragment } from 'react'
import Link from 'next/link'
import 'twin.macro'

const Errors = () => {
  return (
    <Fragment>
      <div tw="flex flex-col pb-44 bg-neutral">
        <div tw="p-20 pt-14 pb-6 bg-white">
          <div tw="flex justify-between items-center">
            <div>
              <Link href="/">
                <h1 tw="text-5xl font-bold cursor-pointer font-sans">
                  Let's Help
                </h1>
              </Link>
              <div tw="w-3/4">
                <p tw="text-base text-gray-500 mt-2 w-max">
                  Please choose from any of the following options to describeany
                  errors faced with orders.
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
          <p tw="text-purple-600">ERRORS WITH ORDERS</p>
        </div>
        <div tw="flex flex-row pl-20 mt-2 w-auto space-x-64">
          <div tw="[>div]:( pl-5 pr-10 pb-4 pt-4 border rounded-xl w-full)">
            <div tw="bg-purple-100">
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
            <div>
              <Link href="./Refunds">
                <label tw="cursor-pointer">REFUNDS & COMPLAINTS</label>
              </Link>
            </div>
          </div>
          <br></br>
          <div tw=" [>div]:(space-x-1 mb-1) flex flex-col mx-auto pr-20 pt-4 pl-10 rounded-2xl">
            <div>
              <input type="checkbox"></input>
              <label>Past delivery date?</label>
            </div>
            <div>
              <input type="checkbox"></input>
              <label>
                Was the order delivered perceived to be below the expected
                experience level?
              </label>
            </div>
            <div>
              <input type="checkbox" tw="rounded-3xl"></input>
              <label>No reply from your vendor?</label>
            </div>
            <div>
              <input type="checkbox"></input>
              <label>Missed step(s) during order cycle?</label>
            </div>
            <div>
              <input type="checkbox"></input>
              <label>Missing item(s) or service(s) in order delivery?</label>
            </div>
            <br></br>
            <div tw="flex flex-col">
              <label>
                If you have other errors with your orders not listed above
                please let us know below.
              </label>
              <input type="text" tw="h-28 rounded-2xl"></input>
            </div>
            <br></br>
            <div tw="flex justify-between">
              <button tw="border p-1 pr-4 pl-4 rounded-lg bg-purple-600 text-white">
                Next
              </button>
              <button tw="text-purple-600">Clear choices</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Errors
