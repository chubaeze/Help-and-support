import { Fragment, useState } from 'react'
import Link from 'next/link'
import 'twin.macro'
import Modal from './Modal'

import { faXmark, faComments } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Head = () => {
  const [modal, setModal] = useState()

  const toggleModal = () => {
    setModal(!modal)
  }
  return (
    <div tw="p-44 max-w-screen-2xl mx-auto pt-14 pb-6 bg-white">
      <div tw=" flex justify-between items-center">
        <div>
          <Link href="/">
            <h1 tw="text-5xl font-bold font-headings cursor-pointer">
              Let's Help
            </h1>
          </Link>
          <div tw="w-3/4">
            <p tw="text-base text-gray-500 mt-2">
              Feel stuck? Find the answers to your questions here in our Help &
              Support page.
            </p>
          </div>
        </div>
        <div>
          <button onClick={toggleModal}>
            <FontAwesomeIcon tw="fixed text-4xl text-purple-600" icon={faComments} />
          </button>
          {modal && (
            <div tw=" fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-end items-end">
              <div tw="bg-white border w-3/12 h-3/6 rounded-xl mr-10 mb-5 items-center justify-center">
                <div tw="flex justify-between mx-4 my-4">
                  <Modal />
                  <div>
                    <button onClick={toggleModal}>
                      <FontAwesomeIcon tw="text-lg" icon={faXmark} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div tw="items-center flex justify-center">
        <input
          placeholder="Search stuff"
          type="text"
          tw="border mt-10 text-sm w-2/3 rounded-md p-4 hover:border-black "
        ></input>
      </div>
    </div>
  )
}

export default Head
