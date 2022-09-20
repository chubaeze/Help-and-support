import { Fragment, useState } from 'react'
import Link from 'next/link'
import 'twin.macro'
import HeadLess from '../../components/HeadNoSearch'

const Errors = () => {
  const initialValues = {
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
  }
  //const [formErrors, setFormErrors] = useState({});
  const [checkValues, setCheckValues] = useState(initialValues)
  const [isSubmit, setIsSubmit] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const checkHandler = e => {
    if (e.target.checked) {
      setIsChecked(true)
      console.log(isChecked)
    } else if (!e.target.checked) {
      setIsChecked(false)
    }
  }

  const submitHandler = e => {
    if (isChecked === true) {
      e.preventDefault()
      setIsSubmit(true)
      console.log(isSubmit)
    }
  }

  const clearHandler = e => {
    console.log(checkValues)
  }

  return (
    <Fragment>
      <HeadLess />
      <div tw="max-w-screen-2xl mx-auto bg-neutral lg:(pb-10)">
        <br></br>
        <div tw="pl-10 text-xs flex space-x-1 lg:(pl-44 text-xs flex space-x-2)">
          <Link href="/">
            <p tw="cursor-pointer">Home</p>
          </Link>
          <div>{'>'}</div>
          <p tw="text-purple-600">ERRORS WITH ORDERS</p>
        </div>
        <div tw="pl-10 pr-10 flex space-x-1 lg:(pl-44 mt-2 pb-4 w-auto flex flex-row space-x-32)">
          <div tw="hidden md:(block) lg:([>div]:(pl-5 pr-10 pb-4 pt-4 border rounded-xl w-full))">
            <div tw="bg-purple-100">
              <Link href="./Errors">
                <label tw="cursor-pointer">ERRORS WITH ORDERS</label>
              </Link>
            </div>
            <br></br>
            <div>
              <Link href="./Delays">
                <label tw="cursor-pointer">DELAYS IN FULFILMENT</label>
              </Link>
            </div>
            <br></br>
            <div>
              <Link href="./Submit">
                <label tw="cursor-pointer">SUBMIT QUERIES</label>
              </Link>
            </div>
            <br></br>
            <div>
              <Link href="./Account">
                <label tw="cursor-pointer">ACCOUNT & LOGIN</label>
              </Link>
            </div>
            <br></br>
            <div>
              <Link href="./Vendor">
                <label tw="cursor-pointer">VENDOR NOT RESPONDING</label>
              </Link>
            </div>
            <br></br>
            <div>
              <Link href="./Refunds">
                <label tw="cursor-pointer">REFUNDS & COMPLAINTS</label>
              </Link>
            </div>
          </div>
          <br></br>
          <div tw="[>div]:(cursor-pointer m-2 h-auto p-4 border-black rounded-xl w-11/12 hover:shadow) bg-white flex flex-col justify-between rounded-xl lg:([>div]:(cursor-pointer m-2 h-auto p-4 border-black rounded-xl w-11/12 hover:shadow) bg-white flex flex-col justify-between rounded-xl w-8/12)">
            <Link href="./AccountBoxes/ArticleBoxes/ErrorArticles/ArticleOne">
              <div>
                <h3 tw="text-lg">Adding a new Bank account</h3>
                <p tw="text-sm text-gray-400">1 Article</p>
              </div>
            </Link>
            <Link href="./AccountBoxes/ArticleBoxes/ErrorArticles/ArticleTwo">
              <div>
                <h3 tw="text-lg">
                  Upgrading from Individual Account to Business
                </h3>
                <p tw="text-sm text-gray-400">1 Article</p>
              </div>
            </Link>
            <Link href="./AccountBoxes/ArticleBoxes/ErrorArticles/ArticleThree">
              <div>
                <h3 tw="text-lg">Changing your freelancer</h3>
                <p tw="text-sm text-gray-400">1 Article</p>
              </div>
            </Link>
            <Link href="./AccountBoxes/ArticleBoxes/ErrorArticles/ArticleFour">
              <div>
                <h3 tw="text-lg">"I got charged twice!"</h3>
                <p tw="text-sm text-gray-400">1 Article</p>
              </div>
            </Link>
            <Link href="./AccountBoxes/ArticleBoxes/ErrorArticles/ArticleFive">
              <div>
                <h3 tw="text-lg">How long does it take to withdraw?</h3>
                <p tw="text-sm text-gray-400">1 Article</p>
              </div>
            </Link>
            <Link href="./AccountBoxes/ArticleBoxes/ErrorArticles/ArticleSix">
              <div tw="mb-2">
                <h3 tw="text-lg">Why aren't there recurring gigs?</h3>
                <p tw="text-sm text-gray-400">1 Article</p>
              </div>
            </Link>
          </div>
        </div>
        <div tw="pb-2 flex flex-row text-xs justify-center items-center mt-2 space-x-1 lg:(flex flex-col items-end justify-end w-full pr-[185px])">
          <p>Can't find what you're looking for?</p>
          <Link href="../Support/SupportError">
            <p tw="underline cursor-pointer font-bold text-purple-600">
              Contact support
            </p>
          </Link>
        </div>
      </div>
    </Fragment>
  )
}

export default Errors
