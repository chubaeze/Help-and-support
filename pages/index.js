import { Fragment } from 'react'
import Link from 'next/link'
import 'twin.macro'
//padding in the wrapper, flex, flex-col, align-itm-center,
//Lets, search, icon - flex, width - 100%, justify-space, icon sep box
//cards, grid, grid col 3, grid row 2, grid gap 2, wrap and put width 100%, grid col 2 tablet, grid desktop 3 and above
function Home() {
  return (
    <Fragment>
      <div tw="flex flex-col pb-80 bg-neutral">
        <div tw="p-20 pt-14 pb-6 bg-white">
          <div tw="flex justify-between items-center">
            <div>
              <Link href="/">
                <h1 tw="text-5xl font-bold cursor-pointer font-sans">
                  Let's Help
                </h1>
              </Link>
              <div tw="w-3/4">
                <p tw="text-base text-gray-500 mt-2">
                  Feel stuck? Find the answers to your questions here in our
                  Help & Support page.
                </p>
              </div>
            </div>
            <div tw="text-right">ICON</div>
          </div>
          <div tw="items-center flex justify-center">
            <input
              placeholder="Search stuff"
              type="text"
              tw="border mt-10 text-sm w-2/3 rounded-md p-4 hover:border-black "
            ></input>
          </div>
        </div>
        <div tw=" [>div]:(max-w-lg m-3 border cursor-pointer pt-16 pr-3 pl-6 pb-5 rounded-xl bg-white) p-20 pt-14 pb-6 grid grid-cols-1 gap-2 md:(grid-cols-2 grid-rows-3) lg:(grid-cols-3 grid-rows-2)">
          <Link href="../HelpBoxes/Vendor">
            <div>
              <h2 tw="text-lg font-bold ">VENDOR NOT RESPONDING?</h2>
              <p tw="text-sm">For all vendor related complaints</p>
            </div>
          </Link>
          <Link href="../HelpBoxes/Account">
            <div>
              <h2 tw="text-lg font-bold">ACCOUNT & LOGIN</h2>
              <p tw="text-sm">For all vendor related complaints</p>
            </div>
          </Link>
          <Link href="../HelpBoxes/Refunds">
            <div>
              <h2 tw="text-lg font-bold">REFUNDS & COMPLAINTS</h2>
              <p tw="text-sm">For all vendor related complaints</p>
            </div>
          </Link>
          <Link href="../HelpBoxes/Delays">
            <div>
              <h2 tw="text-lg font-bold">DELAYS IN FULFILMENT</h2>
              <p tw="text-sm">For all vendor related complaints</p>
            </div>
          </Link>
          <Link href="../HelpBoxes/Errors">
            <div>
              <h2 tw="text-lg font-bold">ERRORS WITH ORDERS</h2>
              <p tw="text-sm">For all vendor related complaints</p>
            </div>
          </Link>
          <Link href="../HelpBoxes/Submit">
            <div>
              <h2 tw="text-lg font-bold">SUBMIT QUERIES</h2>
              <p tw="text-sm">For all vendor related complaints</p>
            </div>
          </Link>
        </div>
      </div>
    </Fragment>
  )
}

export default Home
