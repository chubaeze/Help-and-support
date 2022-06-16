import { Fragment } from 'react'
import Link from 'next/link'
import 'twin.macro'

const Account = () => {
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
                  Account & Log in optons.
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
          <p tw="text-purple-600">ACCOUNT & LOGIN</p>
        </div>
        <div tw="pl-20 mt-2 flex w-full space-x-9">
          <div tw="[>div]:(border pl-5 pr-10 pb-4 pt-4 rounded-xl w-full)">
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
            <div tw="bg-purple-100">
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
          <div>
            <div tw="flex justify-center items-center mt-5 text-2xl font-bold">
              What part of Account & Log In do you need assistance in?
            </div>
            <div tw=" space-x-2 [>div]:(w-4/5 flex items-center justify-center border cursor-pointer p-7 w-60 rounded-xl bg-white) p-20 pt-10 grid grid-cols-1 md:(grid-cols-2 grid-rows-2) lg:(grid-cols-4 grid-rows-2)">
              <Link href="../AccountBoxes/Recover">
                <div>
                  <h2 tw="text-base font-bold ">Recover Password</h2>
                </div>
              </Link>
              <Link href="../AccountBoxes/Log">
                <div>
                  <h2 tw="text-base font-bold">Log In Details</h2>
                </div>
              </Link>
              <Link href="../AccountBoxes/Pay">
                <div>
                  <h2 tw="text-base font-bold">Payment Details</h2>
                </div>
              </Link>
              <Link href="../AccountBoxes/Manage">
                <div>
                  <h2 tw="text-base font-bold">Manage Account</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Account
