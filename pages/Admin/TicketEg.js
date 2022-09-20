import { Fragment, useState } from 'react'
import 'twin.macro'
import Link from 'next/link'

import {
  faBell,
  faUser,
  faFaceSmile,
} from '@fortawesome/free-regular-svg-icons'
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
  faAt,
  faMagnifyingGlass,
  faArrowLeft,
  faPaperclip,
  faHashtag,
  faCircleXmark,
  faCheck,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeadBar from '../../components/HeadBar'
import SideBar from '../../components/SideBar'

const TicketEg = () => {
  const [comments, setComments] = useState()

  const clickHandle = () => {
    setComments(!comments)
  }
  return (
    <Fragment>
      <div tw="flex bg-neutral1 h-[1400px]">
        <SideBar></SideBar>
        <div tw="w-screen">
          <HeadBar></HeadBar>
          <div tw=" h-[750px] w-[100%] flex flex-col">
            <div tw="pl-14 mt-4 w-full h-20 flex space-x-2 ">
              <div tw="pt-1">
                <Link href="./">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
              </div>
              <div tw="border bg-white h-8 text-xs flex items-center text-darkpurple font-bold rounded-xl">
                <p tw="pl-4 pr-4 flex">from Help {'&'} Support</p>
              </div>
            </div>
            <div tw="flex flex-col space-y-10">
              <div tw="flex-wrap flex space-x-5">
                <div tw="pl-10 flex flex-col space-y-5">
                  <div tw="border bg-white h-[250px] w-[600px] rounded-lg mx-2">
                    <div tw="pl-5 pt-4 border h-[250px]">
                      <h3>Location</h3>
                      <h4>Raised on Frolancer</h4>
                      <div tw="flex flex-row items-center space-x-7">
                        <div>
                          <img
                            tw="rounded-md"
                            width={250}
                            src="/biafraPlane.jpeg"
                          ></img>
                        </div>
                        <div tw="flex flex-row items-center justify-between h-[140px] w-[550px]">
                          <p tw="text-xs w-64">
                            FULLY CRAFTED MINIATURE 3D MODEL OF A BIAFRAN
                            AIRLIFT WITH REMOTE CONTROL
                          </p>
                          <p tw="text-xs"></p>
                        </div>
                      </div>
                      <div tw="flex justify-end text-xs space-x-3 items-end pr-4">
                        <button tw="px-4 py-2 border bg-neutral1 rounded-md">
                          Contact Axel
                        </button>
                        <button tw="px-4 py-2 border rounded-md bg-purple-600">
                          View Order Confirmation
                        </button>
                      </div>
                    </div>
                  </div>
                  <div tw="border flex flex-row text-sm justify-between font-bold bg-white h-[250px] w-[600px] rounded-lg mx-2">
                    <div tw="flex flex-col pl-6 pt-4">
                      <div tw="flex space-x-2 items-center pb-6 font-bold text-sm">
                        <FontAwesomeIcon
                          tw="text-red-500"
                          icon={faCircleXmark}
                        />
                        <h3>Unresolved</h3>
                      </div>
                      <div tw="text-sm space-y-5 font-bold">
                        <p>Date complaint was raised</p>
                        <p>Appointed Vendor</p>
                        <p>Date order was initially fulfilled</p>
                        <p>Order Description</p>
                      </div>
                    </div>
                    <div tw=" pr-6 space-y-5 flex flex-col mt-[58.8px]">
                      <p>20th May</p>
                      <p>Wole Adeyemi</p>
                      <p>19/05/2022</p>
                      <p>Remote controlled plane</p>
                    </div>
                  </div>
                </div>
                <div tw="border bg-white w-[350px] ">
                  <div tw="border pl-4 pt-3 h-24">
                    <h2 tw="underline font-bold">Axel Malankov</h2>
                    <p tw="text-sm">1 order(s)</p>
                  </div>
                  <div>
                    <div tw="border pl-4 pr-3 pt-3 h-28 space-y-2">
                      <div tw="flex justify-between">
                        <h2 tw="font-bold">Contact Information</h2>
                        <p tw="text-sm underline text-darkpurple">Edit</p>
                      </div>
                      <p tw="text-sm">a.malank@gmail.com</p>
                      <p>+447390487886</p>
                    </div>
                  </div>
                  <div>
                    <div tw="border pl-4 pr-3 pt-3 h-32 space-y-2">
                      <div tw="flex justify-between">
                        <h2 tw="font-bold">Description of Complaint</h2>
                        <p tw="text-sm underline text-darkpurple">Edit</p>
                      </div>
                      <p tw="text-sm">
                        Axel is missing a part of the product he ordered to have
                        the full model for what he asked for from his vendor. He
                        has contacted his vendor to no response.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div tw="border pl-4 pr-3 pt-3 h-24 space-y-2">
                      <div tw="flex justify-between">
                        <h2 tw="font-bold">Ticket assignment</h2>
                        <p tw="text-sm underline text-darkpurple">Edit</p>
                      </div>
                      <p tw="text-sm">Christian Ubosi</p>
                    </div>
                  </div>
                  <div>
                    <div tw="pl-4 pr-3 pt-3 h-20 space-y-2">
                      <div tw="flex justify-between">
                        <h2 tw="font-bold">Ticket assignment</h2>
                        <p tw="text-sm underline text-darkpurple">Edit</p>
                      </div>
                      <p tw="text-sm">Error with Order</p>
                    </div>
                  </div>
                </div>
              </div>
              <div tw="flex flex-col">
                <div tw="flex flex-row w-[647px] items-center justify-between">
                  <div tw="pl-10 mx-2">
                    <h3 tw="text-sm font-bold">Timeline</h3>
                  </div>
                  <div tw="flex items-center space-x-1">
                    <input onClick={clickHandle} type="checkbox"></input>
                    <p tw="text-sm font-bold">View Comments</p>
                  </div>
                </div>
                <div tw="w-[600px] h-[0.5px] ml-12 mt-4 bg-gray-500"></div>
                {comments && (
                  <div>
                    <div tw="w-[498px] h-8 ml-[150px] mt-3 px-2 flex items-center justify-between bg-white">
                      <div>
                        <input
                          tw="text-sm w-[330px]"
                          placeholder="Leave a comment..."
                        ></input>
                      </div>
                      <div tw="space-x-2 flex text-gray-500 text-lg">
                        <FontAwesomeIcon icon={faAt} />
                        <FontAwesomeIcon icon={faPaperclip} />
                        <FontAwesomeIcon icon={faHashtag} />
                        <FontAwesomeIcon icon={faFaceSmile} />
                        <div tw="text-xs border px-2 text-gray-500 rounded-md bg-neutral1">
                          Post
                        </div>
                      </div>
                    </div>
                    <div tw="ml-36 mt-16 text-gray-400">Today</div>
                    <div tw="w-[600px] h-20 ml-12 mt-4 flex flex-col bg-white">
                      <div tw="flex flex-row justify-between">
                        <div>
                          <div tw="flex items-center space-x-2 pl-4 pt-4">
                            <div tw="ml-20">John Doe</div>{' '}
                            <div tw="text-sm">12:30</div>
                          </div>
                          <div tw="ml-20 pl-4 pb-3 mt-1 text-xs">
                            Christian Ubosi please let me know what's the hold
                            up with this issue.
                          </div>
                        </div>
                        <div tw="pr-2">x</div>
                      </div>
                    </div>
                    <div tw="ml-36 mt-10 text-gray-400 text-sm">22 May</div>
                    <div tw="ml-36 mt-3 text-black font-bold text-sm">
                      Axel Malankov asked for an update with their complaint
                    </div>
                    <div tw="ml-36 mt-10 text-gray-400 text-sm">21 May</div>
                    <div tw="ml-36 mt-3 text-black font-bold text-sm">
                      Christian Ubosi has contacted the vendor
                    </div>
                    <div tw="ml-36 mt-4 text-black font-bold text-sm">
                      Christian Ubosi sent an order complaint receipt email to
                      Axel Malankov (@a.malank@gmail.com)
                    </div>
                    <div tw="ml-36 mt-7 text-black font-bold text-sm">
                      Christian Ubosi has been assigned to this ticket
                    </div>
                    <div tw="ml-36 mt-10 text-gray-400 text-sm">20 May</div>
                    <div tw="ml-36 mt-2 text-black font-bold text-sm">
                      Axel Malankov raised a complaint about an error with their
                      current order
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default TicketEg
