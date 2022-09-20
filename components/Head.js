import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
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

const Head = () => {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  },[])

  const [modal, setModal] = useState()
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')

  const toggleModal = () => {
    setModal(!modal)
  }

  const changeHandler = event => {
    const searchWord = event.target.value
    setWordEntered(searchWord)
    const newFilter = DATA.filter(value => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase())
    })
    if (searchWord === '') {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }

  const clearInput = () => {
    setFilteredData([])
    setWordEntered('')
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
      <div tw="items-center w-[1210px] flex flex-col justify-center">
        <div tw="w-2/3 mt-10 border h-[60px] rounded-md items-center flex justify-center hover:border-purple-600 focus:outline-none focus:border-purple-600">
          <input
            placeholder="Search stuff"
            type="text"
            tw=" text-sm focus:outline-none w-screen p-4 lg:(w-screen)"
            value={wordEntered}
            onChange={changeHandler}
            ref={inputRef}
          ></input>
          {filteredData.length === 0 ? (
            <FontAwesomeIcon
              tw="text-base text-purple-600 pr-4"
              icon={faMagnifyingGlass}
            />
          ) : (
            <FontAwesomeIcon
              tw="text-base text-purple-600 pr-4 cursor-pointer"
              icon={faXmark}
              onClick={clearInput}
            />
          )}
        </div>
        {filteredData.length != 0 && (
          <div tw=" w-screen lg:(mt-[2px] w-2/3) border rounded-md pt-2 h-[100px] overflow-hidden overflow-y-auto scrollbar-hide bg-white ">
            {filteredData.slice(0, 15).map((val, key) => {
              return (
                <a
                  tw="w-[100%] h-[40px] hover:bg-gray-100 pl-4 flex items-center text-black"
                  href={val.link}
                >
                  <p tw="w-[100%] h-[40px] underline text-blue-600 flex items-center">
                    {val.title} ...in {val.category}
                  </p>
                </a>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default Head
