import { Fragment, useState } from 'react'
import Link from 'next/link'
import 'twin.macro'
import HeadLess from '../../../components/HeadNoSearch'

const Recover = () => {
  const clickHandler = e => {
    e.preventDefault()
  }

  return (
    <Fragment>
      <HeadLess />
      <div tw="max-w-screen-2xl mx-auto bg-neutral pb-[65%] lg:(pb-56)">
        <br></br>
        <div tw="pl-10 text-xs flex space-x-1 mb-3 lg:(pl-44 text-xs flex space-x-2)">
          <Link href="/">
            <p tw="cursor-pointer">Home</p>
          </Link>
          <div>{'>'}</div>
          <Link href="/">
            <p tw="">ACCOUNT & LOGIN</p>
          </Link>
          <div>{'>'}</div>
          <Link href="/">
            <p tw="text-purple-600">RECOVER PASSWORD</p>
          </Link>
        </div>
        <div tw="pl-10 pr-10 flex space-x-1 lg:(pl-44 mt-2 pb-4 w-screen flex flex-row space-x-32)">
          <div tw="hidden md:(block) lg:([>div]:(pl-5 pr-10 pb-4 pt-4 border rounded-xl w-56))">
            <div tw="bg-purple-100">
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
            <div>
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
          <div tw='w-[500px] border'>
            <form
              onSubmit={clickHandler}
              tw="flex flex-col lg:(pr-20 pt-4 pl-10 pb-10) rounded-2xl "
            >
              <div tw="lg:(w-80 text-xl) text-sm flex items-center justify-center">
                <p tw="">
                  Please input your registered email for this account and a
                  password reset link will be sent to you.
                </p>
              </div>

              <br></br>
              <br></br>
              <label tw="font-bold text-sm lg:(text-base)">Email</label>
              <input
                type="email"
                required
                tw="border lg:(w-4/6) rounded-xl hover:border-purple-600 focus:outline-none focus:border-purple-600"
              ></input>
              <br></br>
              <div>
                <button tw="border lg:(text-base) text-sm p-2 pl-6 pr-6 rounded-xl bg-purple-600 text-white">
                  Send me my reset link
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Recover
