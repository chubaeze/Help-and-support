import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { catIcons } from '../pages/Admin/SubCatMenu'
import 'twin.macro'

import { useState } from 'react'

const SubCatItem = ({
  link,
  title,
  desc,
  icon,
  delCat,
  editCat,
  handleFormModal,
}) => {
  const [toggleReview, setToggleReview] = useState(false)

  const review = () => {
    setToggleReview(!toggleReview)
  }

  return (
    <div tw="flex flex-row justify-between">
      <div tw="rounded-xl pr-2 flex flex-col space-y-12 w-max items-center ">
        <FontAwesomeIcon
          tw="text-xs text-purple-600"
          icon={faPen}
          onClick={handleFormModal}
        />
      </div>
      <a href={link}>
        <div>
          <h2 tw="text-sm lg:(text-lg font-bold)">{title}</h2>
          <p tw="lg:(text-sm) text-xs ">{desc}</p>
        </div>
      </a>
      <div tw="flex flex-col space-y-10 items-center justify-center">
        <FontAwesomeIcon
          tw="text-purple-600 text-xl lg:(text-2xl text-purple-600)"
          icon={catIcons[icon]}
        />
        <FontAwesomeIcon
          tw="text-sm text-red-700 pl-[20px]"
          icon={faXmark}
          onClick={() => review()}
        />
      </div>
      {toggleReview && (
        <div tw="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
          <div tw="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-64 m-auto">
            <div tw="w-full h-full text-center">
              <div tw="flex h-full flex-col justify-between">
                <svg
                  width="40"
                  height="40"
                  tw="mt-4 w-12 h-12 m-auto text-indigo-500"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"></path>
                </svg>
                <p tw="text-gray-800 dark:text-gray-200 text-xl font-bold mt-4">
                  Delete category
                </p>
                <p tw="text-gray-600 dark:text-gray-400 text-xs py-2 px-6">
                  Are you sure you want to delete this category ? This action is not reversible.
                </p>
                <div tw="flex items-center justify-between gap-4 w-full mt-8">
                  <button
                    onClick={() => delCat()}
                    type="button"
                    tw="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    tw="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 text-darkpurple w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    onClick={() => review()}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SubCatItem
