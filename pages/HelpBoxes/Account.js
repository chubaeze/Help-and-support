import { Fragment, useState } from 'react'
import Link from 'next/link'
import 'twin.macro'
import Head from '/components/Head'

const Account = () => {

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
          <p tw="text-purple-600">ACCOUNT & LOGIN</p>
        </div>
        <div tw="mt-2 pl-44 pr-44 pb-24 flex w-auto">
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
            <div tw=" [>div]:(w-44 flex items-center justify-center border cursor-pointer p-7 rounded-xl bg-white) gap-2 p-20 pt-10 grid grid-cols-1 md:(grid-cols-2 grid-rows-2) lg:(grid-cols-4 grid-rows-2)">
              <Link href="./AccountBoxes/Recover">
                <div>
                  <h2 tw="text-sm font-bold ">Recover Password</h2>
                </div>
              </Link>
              <Link href="./AccountBoxes/Log">
                <div>
                  <h2 tw="text-sm font-bold">Log In Details</h2>
                </div>
              </Link>
              <Link href="./AccountBoxes/Pay">
                <div>
                  <h2 tw="text-sm font-bold">Payment Details</h2>
                </div>
              </Link>
              <Link href="./AccountBoxes/Manage">
                <div>
                  <h2 tw="text-sm font-bold">Manage Account</h2>
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
