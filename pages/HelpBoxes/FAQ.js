import { Fragment } from 'react'
import 'twin.macro'
import Link from 'next/link'
import Head from '../../components/Head'

import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FAQ = () => {
  return (
    <Fragment>
      <div tw="max-w-screen-2xl mx-auto pb-32 bg-neutral">
        <Head></Head>
        <div tw="items-center flex justify-center pb-10 pb-72 bg-neutral">
          <div tw="border-red-500 container rounded-lg w-5/6 mt-16 h-96 bg-purple-100 p-20 pt-6 pb-6">
            <div tw="mt-1">
              <h2 tw="text-2xl font-bold">FAQs.</h2>
              <div tw="w-full bg-white border mt-5 p-1 pl-4">
                <FontAwesomeIcon
                  tw="text-base pr-4 justify-center items-center"
                  icon={faCaretRight}
                />
                What is Frolancer and how does it work?
              </div>
              <div tw="w-full bg-white border mt-5 p-1 pl-4">
                <FontAwesomeIcon
                  tw="text-base pr-4 justify-center items-center"
                  icon={faCaretRight}
                />
                How would I get paid for my services and in what currency?
              </div>
              <div tw="w-full bg-white border mt-5 p-1 pl-4">
                <FontAwesomeIcon
                  tw="text-base pr-4 justify-center items-center"
                  icon={faCaretRight}
                />
                How would I get jobs and who would give me jobs?
              </div>
              <div tw="w-full bg-white border mt-5 p-1 pl-4">
                <FontAwesomeIcon
                  tw="text-base pr-4 justify-center items-center"
                  icon={faCaretRight}
                />
                Can a business request for a refund if they are unhappy with the
                work I did?
              </div>
              <div tw="w-full bg-white border mt-5 p-1 pl-4">
                <FontAwesomeIcon
                  tw="text-base pr-4 justify-center items-center"
                  icon={faCaretRight}
                />
                Can I be removed from Frolancer?
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default FAQ
