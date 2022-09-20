import { Fragment, useState } from 'react'
import { data } from '/components/line'
import { dataa } from '/components/bar'
import dynamic from 'next/dynamic'
import 'twin.macro'
import Dropdown from '../../components/Dropdown'
import Link from 'next/link'
import SideBar from '../../components/SideBar'
import HeadBar from '../../components/HeadBar'

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

const MyResponsiveLine = dynamic(() => import('/components/line'), {
  ssr: false,
})

const Bar = dynamic(() => import('/components/bar'), {
  ssr: false,
})

const Admin = () => {
  return (
    <Fragment>
      <div tw="flex bg-neutral1 h-screen">
        <SideBar></SideBar>
        <div tw="w-screen">
          <HeadBar></HeadBar>
          <div tw="h-[750px] w-[100%] flex flex-col">
            <div tw="w-full h-20 flex justify-between">
              <div tw="p-2">
                <h1 tw="text-3xl ml-3 font-black">Help {'&'} Support</h1>
              </div>
              <div tw="flex">
                <div>
                  <Dropdown></Dropdown>
                </div>
                <div tw="border bg-white h-10 items-center flex justify-center w-60 rounded-md">
                  <div tw="flex px-2 justify-between h-[25px] w-[200px] items-center">
                    <p tw="text-sm bg-purple-100 justify-center items-center flex w-8 p-1">
                      1D
                    </p>
                    <p tw="text-sm w-8 p-1 justify-center items-center">30D</p>
                    <p tw="text-sm w-8 p-1 justify-center items-center">1Y</p>
                    <p tw="text-sm w-8 p-1 justify-center items-center">All</p>
                    <FontAwesomeIcon
                      tw="text-sm w-4 p-1 justify-center items-center"
                      icon={faCalendar}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div tw="flex flex-col space-y-3">
              <div tw="flex flex-row space-x-8">
                <div tw="flex flex-col">
                  <div tw="flex space-x-12 ml-5">
                    <div tw="bg-white flex space-x-3 items-center justify-start pl-4 w-44 h-20 rounded-lg">
                      <FontAwesomeIcon tw="text-purple-600" icon={faShop} />
                      <div>
                        <p tw="font-black">2021</p>
                        <p tw="text-xs text-gray-400">Total Tickets</p>
                      </div>
                    </div>
                    <div tw="bg-white flex space-x-3 items-center justify-start pl-4 w-44 h-20 rounded-lg">
                      <FontAwesomeIcon tw="text-purple-600" icon={faShop} />
                      <div>
                        <p tw="font-black">121</p>
                        <p tw="text-xs text-gray-400">Unresolved Tickets</p>
                      </div>
                    </div>
                    <div tw="bg-white flex space-x-3 items-center justify-start pl-4 w-44 h-20 rounded-lg">
                      <FontAwesomeIcon tw="text-purple-600" icon={faShop} />
                      <div>
                        <p tw="font-black">1900</p>
                        <p tw="text-xs text-gray-400">Resolved Tickets</p>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div tw="ml-5 bg-white w-44 h-52 w-[623px] p-4 pl-3 rounded-lg">
                    <h3 tw="font-bold">Tickets Chart</h3>
                    <div tw="h-40 border">
                      <MyResponsiveLine data={data} />
                    </div>
                  </div>
                </div>
                <div tw="h-[312px] w-[380px] rounded-lg bg-white p-4 pl-3">
                  <h3 tw="font-bold ">Ratings Chart</h3>
                  <div tw="h-[280px] w-[350px]">
                    <Bar data={data} />
                  </div>
                </div>
              </div>
              <div tw="h-[330px] w-[1035px] flex flex-col ml-5 bg-white p-4 pb-2 pl-3 rounded-lg">
                <div tw="flex justify-between mb-4 w-[1020px]">
                  <div>
                    <h3 tw="font-bold">Tickets</h3>
                  </div>
                  <div tw="border w-28 px-1 flex justify-between items-center rounded-md">
                    <p tw="text-xs">All Tickets</p>
                    <FontAwesomeIcon
                      tw="text-purple-600 text-xs"
                      icon={faAngleDown}
                    />
                  </div>
                </div>
                <div tw="flex flex-col space-y-4 items-center text-xs">
                  <div tw="flex flex-row w-[1020px] justify-between mb-2 pl-7 pr-52">
                    <div>Name</div>
                    <div>Date</div>
                    <div>Status</div>
                    <div>Topic</div>
                  </div>
                  <div tw="flex flex-row w-[1035px] items-center space-x-[180px] pl-6 pr-24">
                    <div tw="w-20">John Smith</div>
                    <div tw="w-20">May 20,2022</div>
                    <div tw="border p-1 pl-4 pr-4 rounded-md text-green-500">
                      Resolved
                    </div>
                    <div tw="w-32">Vendor not Responding</div>
                  </div>
                  <div tw="flex flex-row w-[1035px] items-center space-x-[180px] pl-6 pr-24">
                    <div tw="w-20">Joseph</div>
                    <div tw="w-20">May 20,2022</div>
                    <div tw="border p-1 pl-4 pr-4 rounded-md text-green-500">
                      Resolved
                    </div>
                    <div tw="w-32">Vendor not Responding</div>
                  </div>
                  <div tw="flex flex-row w-[1035px] items-center space-x-[180px] pl-6 pr-24">
                    <div tw="w-20">Mobu E.</div>
                    <div tw="w-20">May 20,2022</div>
                    <div tw="border p-1 pl-4 pr-5 rounded-md text-purple-500">
                      Pending
                    </div>
                    <div tw="w-32">Vendor not Responding</div>
                  </div>
                  <div tw="flex flex-row w-[1035px] items-center space-x-[180px] pl-6 pr-24">
                    <div tw="w-20">Lily Mall</div>
                    <div tw="w-20">May 20,2022</div>
                    <div tw="border p-1 pl-4 pr-4 rounded-md text-green-500">
                      Resolved
                    </div>
                    <div tw="w-32">Vendor not Responding</div>
                  </div>
                  <Link href="Admin/TicketEg">
                    <div tw="flex flex-row w-[1035px] items-center space-x-[180px] pl-6 pr-[100px]">
                      <div tw="w-20">Axel Malankov</div>
                      <div tw="w-20">May 20,2022</div>
                      <div tw="border p-1 pl-3 pr-3 rounded-md text-red-500">
                        Unresolved
                      </div>
                      <div tw="w-32">Errors with order</div>
                    </div>
                  </Link>
                </div>
                <div tw="h-[25px] w-[full] flex items-center justify-center mt-2">
                  <div tw="flex px-2 border justify-between h-[25px] w-[200px] items-center">
                    <FontAwesomeIcon
                      tw="text-xs w-4 text-purple-600 justify-center"
                      icon={faAngleLeft}
                    />
                    <p tw="text-xs bg-purple-100 justify-center flex w-4">1</p>
                    <p tw="text-xs w-4 justify-center">2</p>
                    <p tw="text-xs w-4 justify-center">3</p>
                    <p tw="text-xs w-4 justify-center">4</p>
                    <FontAwesomeIcon
                      tw="text-xs w-4 text-purple-600 justify-center"
                      icon={faAngleRight}
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

export default Admin
