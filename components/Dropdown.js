import { Fragment, useState } from 'react'
import 'twin.macro'

const Dropdown = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => {
    setShowMenu(!showMenu)
  }
  return (
    <Fragment>
      <div tw="h-10 border w-40 flex justify-center items-center">
        <div tw="relative inline-block text-left">
          <div>
            <button
              onClick={handleClick}
              type="button"
              tw="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              Content Menu
              <svg
                tw="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          {showMenu && (
            <div
              tw="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div tw="py-1" role="none">
                <a
                  href="Admin/FAQMenu"
                  tw="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  FAQ
                </a>
                <a
                  href="Admin/SubCatMenu"
                  tw="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                >
                  Sub-categories
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  )
}

export default Dropdown
