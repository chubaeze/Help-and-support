import { Fragment, useState } from 'react'
import Link from 'next/link'
import 'twin.macro'
import Head from '/components/Head'

const Recover = () => {
  const clickHandler = e => {
    e.preventDefault()
  }

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
            <p tw="">ACCOUNT & LOGIN</p>
          </Link>
          <div>{'>'}</div>
          <Link href="/">
            <p tw="text-purple-600">RECOVER PASSWORD</p>
          </Link>
        </div>
        <div tw="flex flex-row pl-44 pr-44 pb-56 mt-2 w-auto space-x-24">
          <div tw="[>div]:(pl-5 pr-10 pb-4 pt-4 border rounded-xl w-56)">
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
          <form
            onSubmit={clickHandler}
            tw="flex flex-col pr-20 pt-4 pl-10 pb-10 rounded-2xl "
          >
            <div tw="w-2/3 flex items-center justify-center">
              <p tw="text-xl">
                Please input your registered email for this account and a
                password reset link will be sent to you.
              </p>
            </div>

            <br></br>
            <br></br>
            <label tw="font-bold ">Email</label>
            <input
              type="email"
              required
              tw="border w-4/6 rounded-xl hover:border-purple-600 focus:outline-none focus:border-purple-600"
            ></input>
            <br></br>
            <div>
              <button tw="border p-2 pl-6 pr-6 rounded-xl bg-purple-600 text-white">
                Send me my reset link
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default Recover
