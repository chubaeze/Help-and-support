import { Fragment, useState } from 'react'
import Link from 'next/link'
import 'twin.macro'
import Head from '/components/Head'

const Pay = () => {
  return (
    <Fragment>
      <Head />
      <div tw="max-w-screen-2xl mx-auto pb-80 bg-neutral">
        <br></br>
        <div tw="pl-44 text-xs flex space-x-2">
          <Link href="/">
            <p tw="cursor-pointer">Home</p>
          </Link>
          <div>{'>'}</div>
          <Link href="/">
            <p>ACCOUNT & LOGIN</p>
          </Link>
          <div>{'>'}</div>
          <Link href="/">
            <p tw="text-purple-600">PAYMENT DETAILS</p>
          </Link>
        </div>
        <div tw="flex flex-row pl-44 pr-44 pb-56 mt-2 w-auto space-x-32">
          <div tw="[>div]:(pl-5 pr-10 pb-4 pt-4 border rounded-xl w-full)">
            <div>
              <Link href="./Recover">
                <label tw="cursor-pointer">RECOVER PASSWORD</label>
              </Link>
            </div>
            <br></br>
            <div>
              <Link href="./Log">
                <label tw="cursor-pointer">LOG IN DETAILS</label>
              </Link>
            </div>
            <br></br>
            <div tw="bg-purple-100">
              <Link href="./Pay">
                <label tw="cursor-pointer">PAYMENT DETAILS</label>
              </Link>
            </div>
            <br></br>
            <div>
              <Link href="./Manage">
                <label tw="cursor-pointer">MANAGE ACCOUNT</label>
              </Link>
            </div>
          </div>
          <br></br>
          <div tw=" flex-col w-4/12 pr-20 pt-4 pl-10 pb-10 rounded-2xl">
            <div>
              <span tw="text-2xl">Primary Card</span>
              <div tw="flex space-x-5">
                <input
                  type="text"
                  tw="pl-2 border text-center text-left items-center rounded-lg w-full hover:border-purple-600 focus:outline-none focus:border-purple-600"
                ></input>
              </div>

              <div tw="flex space-x-5">
                <input tw="pl-2 border text-center text-left items-center rounded-lg w-full hover:border-purple-600 focus:outline-none focus:border-purple-600"></input>
              </div>

              <div tw="flex flex-row space-x-5">
                <input tw="pl-2 border text-center text-left items-center rounded-lg w-full hover:border-purple-600 focus:outline-none focus:border-purple-600"></input>
              </div>

              <div tw="flex flex-row space-x-5">
                <input
                  type="date"
                  tw="pl-2 border text-center text-left items-center rounded-lg w-full hover:border-purple-600 focus:outline-none focus:border-purple-600"
                ></input>
              </div>

              <div tw="flex flex-row space-x-5">
                <input
                  type="tel"
                  tw="pl-2 border text-center text-left items-center rounded-lg w-full hover:border-purple-600 focus:outline-none focus:border-purple-600"
                ></input>
              </div>

              <div tw="flex flex-row space-x-5">
                <input
                  type="email"
                  tw="pl-2 border text-center text-left items-center rounded-lg w-full hover:border-purple-600 focus:outline-none focus:border-purple-600"
                ></input>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Pay
