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

const HeadBar = () => {
  return (
    <Fragment>
      <div tw="border w-[100%] h-[44px] flex flex-row items-center p-6 bg-white justify-between">
        <div>
          <img tw="rounded-md" width={110} src="/frolancer-logo.svg"></img>
        </div>
        <div>
          <div tw="flex items-center justify-center ml-7 border border-gray-400 rounded-md bg-neutral p-4 pl-2 h-10">
            <FontAwesomeIcon tw="text-gray-400" icon={faMagnifyingGlass} />
            <input
              tw="bg-neutral ml-2 rounded-md p-1 pl-2 focus:outline-none"
              placeholder="Search..."
            ></input>
          </div>
        </div>
        <div tw="flex items-center space-x-6 mr-4">
          <div tw="items-center text-purple-500 flex">
            <FontAwesomeIcon tw="text-2xl" icon={faBell} />
          </div>
          <div tw="flex items-center space-x-2">
            <div tw="border bg-gray-400 h-8 w-8 flex items-center justify-center text-white">
              <FontAwesomeIcon tw="text-xl" icon={faUser} />
            </div>
            <p tw="font-bold text-darkpurple">Chuba Ezeigbo</p>
          </div>
          <div tw="flex items-center justify-center space-x-2 border p-2 pl-10 pr-10">
            <FontAwesomeIcon icon={faRightFromBracket} />
            <p tw=" text-[14px]">Signout</p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default HeadBar
