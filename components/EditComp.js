import { useEffect, useState } from 'react'
import 'twin.macro'
import ReactSelect from './ReactSelect'

const EditComp = ({
  wrong,
  wrongForm,
  selectedId,
  onSubmit,
  closeModal,
  defaultCatItem,
}) => {
  const [input, setInput] = useState({
    title: '',
    link: '',
    desc: '',
    icon: '',
  })

  const [toggleReview, setToggleReview] = useState(false)
  

  const review = () => {
    setToggleReview(!toggleReview)
  }

  useEffect(() => {
    const data = { ...defaultCatItem }
    delete data.id
    setInput(data)
  }, [defaultCatItem])

  const handleChange = e => {
    const { name, value } = e.target
    setInput(prev => {
      return { ...prev, [name]: value }
    })
  }

  const handleSubmit = () => {
    onSubmit({
      id: Math.floor(Math.random() * 10000),
      title: input.title,
      link: input.link,
      desc: input.desc,
      icon: input.icon,
    })
    setToggleReview(false)
  }
  return (
    <div
      tw="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center"
    >
      {selectedId ? (
        <div tw="border p-10 pt-2 w-96 rounded-lg bg-neutral1 space-y-5 flex flex-col justify-between">
          <div>
            <p tw="font-bold text-xl text-darkpurple">Edit category</p>
          </div>
          <div tw="space-y-4 flex flex-col">
            <input
              tw="border hover:border-purple-600 focus:outline-none h-10 focus:border-purple-600 rounded-md px-2"
              type="text"
              placeholder="Add new title.."
              value={input.title}
              name="title"
              onChange={handleChange}
            ></input>
            <input
              tw="border hover:border-purple-600 focus:outline-none h-10 focus:border-purple-600 rounded-md px-2"
              type="text"
              placeholder="Add new link.."
              value={input.link}
              name="link"
              onChange={handleChange}
            ></input>
            <input
              tw="border hover:border-purple-600 focus:outline-none h-10 focus:border-purple-600 rounded-md px-2"
              type="text"
              placeholder="Add new description.."
              value={input.desc}
              name="desc"
              onChange={handleChange}
            ></input>
            <ReactSelect setInput={setInput} input={input} />
          </div>
          <div tw="flex flex-col">
            <button
              tw="border border-black bg-purple-600 text-white p-1 px-2 rounded-md"
              onClick={wrong ? wrongForm : review}
            >
              Submit
            </button>
            <button tw="text-red-500 p-1 px-2 rounded-md" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      ) : (
        <div tw="border p-10 pt-2 w-96 rounded-lg bg-neutral1 space-y-5 flex flex-col justify-between">
          <div>
            <p tw="font-bold text-xl text-darkpurple">Add category</p>
          </div>
          <div tw="space-y-4 flex flex-col">
            <input
              tw="border hover:border-purple-600 focus:outline-none h-10 focus:border-purple-600 rounded-md px-2"
              type="text"
              placeholder="Add new title.."
              value={input.title}
              name="title"
              onChange={handleChange}
            ></input>
            <input
              tw="border hover:border-purple-600 focus:outline-none h-10 focus:border-purple-600 rounded-md px-2"
              type="text"
              placeholder="Add new link.."
              value={input.link}
              name="link"
              onChange={handleChange}
            ></input>
            <input
              tw="border hover:border-purple-600 focus:outline-none h-10 focus:border-purple-600 rounded-md px-2"
              type="text"
              placeholder="Add new description.."
              value={input.desc}
              name="desc"
              onChange={handleChange}
            ></input>
            <ReactSelect setInput={setInput} input={input} />
          </div>
          <div tw="flex flex-col">
            <button
              tw="border border-black bg-purple-600 text-white p-1 px-2 rounded-md"
              onClick={wrong ? wrongForm : review}
            >
              Submit
            </button>
            <button tw="text-red-500 p-1 px-2 rounded-md" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
      {toggleReview &&
        (selectedId ? (
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
                    Save category
                  </p>
                  <p tw="text-gray-600 dark:text-gray-400 text-xs py-2 px-6">
                    Are you sure you want to save these changes ?
                  </p>
                  <div tw="flex items-center justify-between gap-4 w-full mt-8">
                    <button
                      onClick={() => handleSubmit()}
                      type="button"
                      tw="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                      Save
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
        ) : (
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
                    Add category
                  </p>
                  <p tw="text-gray-600 dark:text-gray-400 text-xs py-2 px-6">
                    Are you sure you want to add this category ?
                  </p>
                  <div tw="flex items-center justify-between gap-4 w-full mt-8">
                    <button
                      onClick={handleSubmit}
                      type="button"
                      tw="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                      Add
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
        ))}
      {wrong && (
        <div tw="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
          <div tw="shadow-lg rounded-2xl p-4 bg-white dark:bg-purple-200 w-96 h-32 flex justify-between flex-col m-auto">
            <p tw="text-center">
              Some fields have not been properly filled, please add the
              respective details.
            </p>
            <button tw="text-red-500" onClick={wrongForm}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default EditComp
