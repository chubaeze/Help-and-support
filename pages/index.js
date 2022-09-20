import { Fragment, useState } from 'react'
import Link from 'next/link'
import 'twin.macro'
import Head from '../components/Head'

import {
  faHandshakeSlash,
  faLock,
  faFolderOpen,
  faCalendarXmark,
  faCircleExclamation,
  faFilePen,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home() {
  return (
    <Fragment>
      <Head />
      <div tw="max-w-screen-2xl mx-auto bg-neutral">
        <div tw="p-5 pr-10 pb-0 grid grid-cols-1 gap-2 [>div]:(flex flex-row justify-between w-[80%] mx-auto mt-1 p-4 border cursor-pointer rounded-xl bg-white) lg:([>div]:(max-w-lg m-3 border cursor-pointer pt-16 pr-5 pl-6 pb-5 rounded-xl bg-white) p-10 grid grid-cols-3 grid-rows-2 gap-2)  md:(grid-cols-2 grid-rows-3)">
          <Link href="../HelpBoxes/Vendor">
            <div tw="flex justify-between">
              <div>
                <h2 tw="text-sm lg:(text-lg font-bold) ">
                  VENDOR NOT RESPONDING?
                </h2>
                <p tw="lg:(text-sm) text-xs">
                  For all vendor related complaints
                </p>
              </div>
              <div>
                <FontAwesomeIcon
                  tw="text-purple-600 text-xl lg:(text-4xl text-purple-600)"
                  icon={faHandshakeSlash}
                />
              </div>
            </div>
          </Link>
          <Link href="../HelpBoxes/Account">
            <div tw="flex justify-between">
              <div>
                <h2 tw="text-sm lg:(text-lg font-bold)">ACCOUNT & LOGIN</h2>
                <p tw="lg:(text-sm) text-xs">
                  For all account related complaints
                </p>
              </div>
              <div>
                <FontAwesomeIcon
                  tw="text-purple-600 text-xl lg:(text-4xl text-purple-600)"
                  icon={faLock}
                />
              </div>
            </div>
          </Link>
          <Link href="../HelpBoxes/Refunds">
            <div tw="flex flex-row justify-between">
              <div>
                <h2 tw="text-sm lg:(text-lg font-bold)">
                  REFUNDS & COMPLAINTS
                </h2>
                <p tw="lg:(text-sm) text-xs ">
                  For all refund related complaints
                </p>
              </div>
              <div>
                <FontAwesomeIcon
                  tw="text-purple-600 text-xl lg:(text-4xl text-purple-600)"
                  icon={faFolderOpen}
                />
              </div>
            </div>
          </Link>
          <Link href="../HelpBoxes/Delays">
            <div tw="flex justify-between">
              <div>
                <h2 tw="text-sm lg:(text-lg font-bold)">
                  DELAYS IN FULFILMENT
                </h2>
                <p tw="lg:(text-sm) text-xs">
                  For all fulfilment related complaints
                </p>
              </div>
              <div>
                <FontAwesomeIcon
                  tw="text-purple-600 text-xl lg:(text-4xl text-purple-600)"
                  icon={faCalendarXmark}
                />
              </div>
            </div>
          </Link>
          <Link href="../HelpBoxes/Errors">
            <div tw="flex justify-between">
              <div>
                <h2 tw="text-sm lg:(text-lg font-bold)">ERRORS WITH ORDERS</h2>
                <p tw="lg:(text-sm) text-xs">
                  For all order related complaints
                </p>
              </div>
              <div>
                <FontAwesomeIcon
                  tw="text-purple-600 text-xl lg:(text-4xl text-purple-600)"
                  icon={faCircleExclamation}
                />
              </div>
            </div>
          </Link>
          <Link href="../HelpBoxes/Submit">
            <div tw="flex justify-between">
              <div>
                <h2 tw="text-sm lg:(text-lg font-bold)">SUBMIT QUERIES</h2>
                <p tw="lg:(text-sm) text-xs">For submitting queries</p>
              </div>
              <div>
                <FontAwesomeIcon
                  tw="text-purple-600 text-xl lg:(text-4xl text-purple-600)"
                  icon={faFilePen}
                />
              </div>
            </div>
          </Link>
        </div>
        <br></br>
        <br></br>
        <div tw=" text-sm flex justify-center items-center lg:(text-xl flex justify-center items-center)">
          No luck finding what you need? Click here for our
          <div tw="p-1">
            <a tw="text-blue-400 underline" href="../HelpBoxes/FAQ">
              FAQs
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home
