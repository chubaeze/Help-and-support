import Link from 'next/link'
import { useState } from 'react'
import 'twin.macro'
import Modal from './Modal'
import DATA from './data.json'

import {
  faComments,
  faXmark,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Portal from './Portal'

const HeadLess = () => {
  const [modal, setModal] = useState()

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <div tw="p-[6%] max-w-screen-2xl mx-auto pb-6 bg-white lg:(p-10 pt-14)">
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
            <FontAwesomeIcon tw="text-4xl text-purple-600" icon={faComments} />
          </button>
          {modal && (
            <Portal>
              <Modal closeModal={toggleModal} />
            </Portal>
          )}
        </div>
      </div>
    </div>
  )
}

export default HeadLess
