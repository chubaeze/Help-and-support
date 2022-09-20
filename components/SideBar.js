import { Fragment, useState } from 'react'
import { data } from '/components/line'
import dynamic from 'next/dynamic'
import 'twin.macro'
import Link from 'next/link'

import { faBell, faUser, faCalendar } from '@fortawesome/free-regular-svg-icons'
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
  faShop,
  faMagnifyingGlass,
  faAngleDown,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SideBar = () => {
  return (
    <Fragment>
      <div tw="border h-full w-[20%] items-center flex flex-col bg-white justify-center">
        <div tw="border w-[80%] bg-purple-600 text-[12px] text-white font-bold mt-2 rounded-lg flex justify-center items-center pl-3 pr-3 p-2">
          Find Gigs
        </div>
        <br></br>
        <div tw="text-[15px] h-[100%] text-darkpurple font-bold">
          <div tw="flex w-44 items-center justify-start space-x-3 ml-4 p-2">
            <FontAwesomeIcon icon={faChartPie} />
            <p tw="">Dashboard</p>
          </div>
          <br></br>
          <br></br>
          <div tw="flex items-center space-x-3 justify-start w-44 ml-4 p-2">
            <FontAwesomeIcon icon={faBriefcase} />
            <p>Jobs</p>
          </div>
          <div tw="flex items-center ml-4 space-x-3 justify-start w-44 p-2">
            <FontAwesomeIcon icon={faBookOpen} />
            <p>Gigs</p>
          </div>
          <div tw="flex items-center ml-4 space-x-3 justify-start w-44 p-2">
            <FontAwesomeIcon icon={faBagShopping} />
            <p>Unpaid Orders</p>
          </div>
          <div tw="flex items-center space-x-3 justify-start w-44 ml-4 p-2">
            <FontAwesomeIcon icon={faPeopleGroup} />
            <p>Clients</p>
          </div>
          <div tw="flex items-center ml-4 space-x-3 justify-start w-44 p-2">
            <FontAwesomeIcon icon={faStore} />
            <p>Vendors</p>
          </div>
          <br></br>
          <div tw="flex items-center ml-4 space-x-3 justify-start w-44 p-2">
            <FontAwesomeIcon icon={faEnvelopesBulk} />
            <p>Admins</p>
          </div>
          <div tw="flex items-center ml-4 space-x-3 justify-start w-44 p-2">
            <FontAwesomeIcon icon={faPenToSquare} />
            <p>CMS</p>
          </div>
          <div tw="flex items-center ml-4 space-x-3 justify-start w-44 p-2">
            <FontAwesomeIcon icon={faComment} />
            <p>Messenger</p>
          </div>
          <div tw="flex items-center ml-4 space-x-3 justify-start w-44 p-2 border bg-purple-100">
            <FontAwesomeIcon icon={faCircleQuestion} />
            <p>Help {'&'} Support</p>
          </div>
          <br></br>
        </div>
      </div>
    </Fragment>
  )
}

export default SideBar
