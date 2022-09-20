import { Fragment, useState } from 'react'
import 'twin.macro'
import Link from 'next/link'
import SideBar from '../../components/SideBar'
import HeadBar from '../../components/HeadBar'

import { faBell, faUser } from '@fortawesome/free-regular-svg-icons'
import {
  faChartPie,
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
  faPen,
  faBan,
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

const SubCatPath_Submit = () => {
  return (
    <Fragment>
      <div tw="flex bg-neutral1 h-screen">
        <SideBar></SideBar>
        <div tw="w-screen">
          <HeadBar></HeadBar>
          <div tw=" h-[750px] w-[100%] flex flex-col">
            <div tw="pl-14 mt-4 w-full h-20 flex space-x-2 ">
              <div tw="pt-1">
                <Link href="./SubCatMenu">
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
                <div tw="pl-10 pr-10 flex space-x-1 lg:(pl-20 mt-2 pb-4 w-auto flex flex-row space-x-20)">
                  <div tw="hidden md:(block) lg:([>div]:(pl-2 pr-5 pb-2 pt-2 border rounded-xl w-52 text-sm))">
                    <div>
                      <Link href="./SubCatPath_Errors">
                        <label tw="cursor-pointer">ERRORS WITH ORDERS</label>
                      </Link>
                    </div>
                    <br></br>
                    <div>
                      <Link href="./SubCatPath_Delays">
                        <label tw="cursor-pointer">DELAYS IN FULFILMENT</label>
                      </Link>
                    </div>
                    <br></br>
                    <div tw="bg-purple-100">
                      <Link href="./SubCatPath_Submit">
                        <label tw="cursor-pointer">SUBMIT QUERIES</label>
                      </Link>
                    </div>
                    <br></br>
                    <div>
                      <Link href="./SubCatPath_Account">
                        <label tw="cursor-pointer">ACCOUNT & LOGIN</label>
                      </Link>
                    </div>
                    <br></br>
                    <div>
                      <Link href="./SubCatPath_Vendor">
                        <label tw="cursor-pointer">VENDOR NOT RESPONDING</label>
                      </Link>
                    </div>
                    <br></br>
                    <div>
                      <Link href="./SubCatPath_Refund">
                        <label tw="cursor-pointer">REFUNDS & COMPLAINTS</label>
                      </Link>
                    </div>
                  </div>
                  <br></br>
                  <div tw="flex flex-wrap border mx-auto pr-4 pt-2 pl-4 pb-2 rounded-2xl">
                    <form>
                      <label>Name</label>
                      <input
                        name="name"
                        type="text"
                        tw="flex flex-wrap border bg-white w-[100%] hover:border-purple-600 focus:outline-none focus:border-purple-600 p-1 pr-0 pl-2 rounded-lg lg:(border p-1 pr-2 pl-2 rounded-lg w-full bg-white hover:border-purple-600 focus:outline-none focus:border-purple-600)"
                        required
                      ></input>

                      <br></br>
                      <label>Email</label>
                      <input
                        name="email"
                        type="email"
                        tw="flex flex-wrap border bg-white w-[100%] hover:border-purple-600 focus:outline-none focus:border-purple-600 p-1 pr-0 pl-2 rounded-lg lg:(border p-1 pr-2 pl-2 rounded-lg w-full bg-white hover:border-purple-600 focus:outline-none focus:border-purple-600)"
                        required
                      ></input>

                      <br></br>
                      <label>What do you use the platform for?</label>
                      <input
                        name="platform"
                        type="text"
                        tw="flex flex-wrap border bg-white w-[100%] hover:border-purple-600 focus:outline-none focus:border-purple-600 p-1 pr-0 pl-2 rounded-lg lg:(border p-1 pr-2 pl-2 rounded-lg w-full bg-white hover:border-purple-600 focus:outline-none focus:border-purple-600)"
                        required
                      ></input>

                      <br></br>
                      <label>Please what is your query?</label>
                      <input
                        name="query"
                        type="text"
                        tw="hover:border-purple-600 border rounded-lg w-[100%] p-1 pl-2 h-20 focus:outline-none focus:border-purple-600 lg:(border rounded-lg w-full p-1 pr-2 pl-2 h-14 bg-white align-top hover:border-purple-600 focus:outline-none focus:border-purple-600)"
                        required
                      ></input>
                      <br></br>
                      <br></br>
                      <div tw="flex w-full justify-between">
                        <div tw="text-[10px] p-2 text-white bg-purple-600 flex justify-center items-center border rounded-2xl lg:(text-white bg-purple-600 flex justify-center items-center border p-3 pr-8 pl-8 rounded-2xl text-sm)">
                          <button>Submit</button>
                        </div>
                        <br></br>
                        <div tw="text-[10px] rounded-sm p-3 lg:(pl-8 rounded-sm p-4 text-sm text-purple-600)">
                          <button>Clear form</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div tw="flex mr-3 ml-[310px] h-10 ">
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

export default SubCatPath_Submit
