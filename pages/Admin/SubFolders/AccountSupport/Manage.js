import { Fragment, useState } from 'react'
import 'twin.macro'
import Link from 'next/link'
import SideBar from '../../../../components/SideBar'
import HeadBar from '../../../../components/HeadBar'

import { faBell, faUser } from '@fortawesome/free-regular-svg-icons'
import {
  faChartPie,
  faPen,
  faBan,
  faComment,
  faRightFromBracket,
  faCircleQuestion,
  faBriefcase,
  faBagShopping,
  faPenToSquare,
  faEnvelopesBulk,
  faPeopleGroup,
  faStore,
  faBookOpen,
  faArrowDownWideShort,
  faFilter,
  faMagnifyingGlass,
  faArrowLeft,
  faPlus,
  faHandshakeSlash,
  faLock,
  faFolderOpen,
  faCalendarXmark,
  faCircleExclamation,
  faFilePen,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Manage = () => {
  return (
    <Fragment>
      <div tw="flex bg-neutral1 h-screen">
        <SideBar></SideBar>
        <div tw="w-screen">
          <HeadBar></HeadBar>
          <div tw=" h-[750px] w-[100%] flex flex-col">
            <div tw="pl-14 mt-4 w-full h-20 flex space-x-2 ">
              <div tw="pt-1">
                <Link href="../Account">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
              </div>
              <div tw="border bg-white h-8 text-xs flex items-center text-darkpurple font-bold rounded-xl">
                <p tw="pl-4 pr-4 flex">Help {'&'} Support</p>
              </div>
            </div>
            <div tw="flex space-x-2 items-center">
              <div tw="ml-14 rounded-lg bg-white w-max text-2xl font-bold">
                <h1 tw="p-1 pr-3">Sub-Categories</h1>
              </div>
              <div tw="bg-purple-600 w-max h-5 pl-6 pr-6 rounded-xl text-white text-sm font-bold">
                Custom
              </div>
            </div>
            <div tw="p-2 border bg-white h-[600px] rounded-lg mx-2">
              <div tw="w-full flex items-center justify-between h-10 ">
                <div tw="flex items-center h-10">
                  <div tw="ml-12 border bg-purple-200 rounded-xl flex justify-between p-1 items-center h-7 w-16">
                    <FontAwesomeIcon
                      tw="text-xs text-purple-600"
                      icon={faPen}
                    />
                    <p tw="text-[7px]">Edit {'&'} Review</p>
                  </div>
                  <div tw="ml-1 border bg-purple-200 rounded-xl flex justify-between  p-1 items-center h-7 w-12">
                    <FontAwesomeIcon
                      tw="text-xs text-purple-600"
                      icon={faBan}
                    />
                    <p tw="text-[7px]">Delete</p>
                  </div>
                </div>
                <div tw="mb-4 w-24 h-8 flex items-center rounded-xl border bg-neutral1 justify-center">
                  <FontAwesomeIcon
                    tw="text-xs text-gray-400"
                    icon={faMagnifyingGlass}
                  />
                  <input
                    tw="w-12 rounded-xl text-xs p-1 bg-neutral1"
                    placeholder="Search"
                  ></input>
                </div>
              </div>
              <div tw="w-[1000px]">
                <div tw="pl-5 pr-10 flex space-x-1 lg:(pl-20 mt-2 pb-4 w-auto flex flex-row space-x-32)">
                  <div tw="hidden md:(block) lg:([>div]:(pl-5 pr-10 pb-4 pt-4 border rounded-xl w-full))">
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
                    <div>
                      <Link href="./Payment">
                        <label tw="cursor-pointer">PAYMENT DETAILS</label>
                      </Link>
                    </div>
                    <br></br>
                    <div tw="bg-purple-100">
                      <Link href="./Manage">
                        <label tw="cursor-pointer">MANAGE ACCOUNT</label>
                      </Link>
                    </div>
                  </div>
                  <br></br>
                  <div tw=" flex-col lg:(w-6/12 pr-20 pt-4 pl-10 pb-10) rounded-2xl">
                    <div>
                      <label>First Name</label>
                      <div tw="flex space-x-5">
                        <input
                          type="email"
                          placeholder="Chuba"
                          tw="pl-2 border text-center border text-left items-center rounded-lg w-full hover:border-purple-600 focus:outline-none focus:border-purple-600"
                        ></input>
                        <button tw="border bg-purple-600 text-white p-1 pl-9 pr-9 rounded-lg">
                          Edit
                        </button>
                      </div>
                      <br></br>
                      <label>Last Name</label>
                      <div tw="flex flex-row space-x-5">
                        <input
                          type="password"
                          placeholder="Ezeigbo"
                          tw="pl-2 border text-center text-left items-center rounded-lg lg:(w-full) w-52 hover:border-purple-600 focus:outline-none focus:border-purple-600"
                        ></input>
                        <button tw="border bg-purple-600 text-white p-1 pl-9 pr-9 rounded-lg">
                          Edit
                        </button>
                      </div>
                      <br></br>
                      <label>Date of Birth</label>
                      <div tw="flex flex-row space-x-5">
                        <input
                          type="date"
                          placeholder="29/04/1999"
                          tw="pl-2 border text-center text-left items-center rounded-lg lg:(w-full) w-52 hover:border-purple-600 focus:outline-none focus:border-purple-600"
                        ></input>
                        <button tw="border bg-purple-600 text-white p-1 pl-9 pr-9 rounded-lg">
                          Edit
                        </button>
                      </div>
                      <br></br>
                      <label>Contact Number</label>
                      <div tw="flex flex-row space-x-5">
                        <input
                          type="tel"
                          placeholder="07490284884"
                          tw="pl-2 border text-center text-left items-center rounded-lg lg:(w-full) w-52 hover:border-purple-600 focus:outline-none focus:border-purple-600"
                        ></input>
                        <button tw="border bg-purple-600 text-white p-1 pl-9 pr-9 rounded-lg">
                          Edit
                        </button>
                      </div>
                      <br></br>
                      <label>Contact Email</label>
                      <div tw="flex flex-row space-x-5">
                        <input
                          type="email"
                          placeholder="chubaezeigbo@gmail.com"
                          tw="pl-2 border text-center text-left items-center rounded-lg lg:(w-full) w-52 hover:border-purple-600 focus:outline-none focus:border-purple-600"
                        ></input>
                        <button tw="border bg-purple-600 text-white p-1 pl-9 pr-9 rounded-lg">
                          Edit
                        </button>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div tw="flex mr-3 ml-[410px] h-10 ">
                  <FontAwesomeIcon
                    tw="border text-darkpurple rounded-md text-xl p-1 ml-[196px]"
                    icon={faPlus}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Manage
