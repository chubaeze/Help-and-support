import { Fragment, useState } from 'react'
import 'twin.macro'
import Link from 'next/link'
import SideBar from '../../components/SideBar'
import HeadBar from '../../components/HeadBar'
import Tiptap from '../../components/TipTap'

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

const Error_ArticleOne = () => {
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
                    <div tw="bg-purple-100">
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
                    <div>
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
                  <div tw="[>div]:(m-2 h-auto p-4 border-black rounded-xl w-11/12 hover:shadow) bg-white flex flex-col justify-between rounded-xl lg:([>div]:(m-2 h-auto p-4 border-black rounded-xl w-11/12 hover:shadow) bg-white flex flex-col justify-between rounded-xl w-8/12)">
                    <div>
                      <Tiptap></Tiptap>
                    </div>
                  </div>
                </div>
                <div tw="pb-2 flex flex-row text-xs justify-center items-center space-x-1 lg:(flex flex-row items-end justify-end w-full pr-[185px])">
                  <p>Can't find what you're looking for? </p>
                  <Link href="./SubFolders/Account">
                    <p tw="underline cursor-pointer font-bold text-purple-600">
                      Contact support
                    </p>
                  </Link>
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
      </div>
    </Fragment>
  )
}

export default Error_ArticleOne
