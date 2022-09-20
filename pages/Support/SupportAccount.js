import { Fragment, useState } from 'react'
import Link from 'next/link'
import 'twin.macro'
import HeadLess from '../../components/HeadNoSearch'

const SupportAccount = () => {
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
          <p>ACCOUNT & LOGIN</p>
          <div>{'>'}</div>
          <p tw="text-purple-600">CONTACT SUPPORT</p>
        </div>
        <div tw="pl-10 pr-10 flex space-x-1 lg:(pl-44 mt-2 pb-4 w-auto flex flex-row space-x-16)">
          <div tw="hidden md:(block) lg:([>div]:(pl-5 pr-10 pb-4 pt-4 border rounded-xl w-full))">
            <div>
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
            <div tw="bg-purple-100">
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

          <div>
            <div tw="flex justify-center items-center text-center lg:(mt-5 text-2xl) font-bold">
              <h3>
                What part of Account {'&'} Log In do you need assistance in?
              </h3>
            </div>
            <div tw=" [>div]:(w-44 flex items-center justify-center border cursor-pointer p-7 rounded-xl bg-white) gap-2 p-20 pt-10 grid grid-cols-1 md:(grid-cols-2 grid-rows-2) lg:([>div]:(w-36 flex items-center justify-center border cursor-pointer p-3 rounded-xl bg-white ) grid-cols-4 grid-rows-2)">
              <Link href="../HelpBoxes/AccountBoxes/Recover">
                <div>
                  <h2 tw="text-sm font-bold ">Recover Password</h2>
                </div>
              </Link>
              <Link href="../HelpBoxes/AccountBoxes/Log">
                <div>
                  <h2 tw="text-sm font-bold">Log In Details</h2>
                </div>
              </Link>
              <Link href="../HelpBoxes/AccountBoxes/Pay">
                <div>
                  <h2 tw="text-sm font-bold">Payment Details</h2>
                </div>
              </Link>
              <Link href="../HelpBoxes/AccountBoxes/Manage">
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

export default SupportAccount
