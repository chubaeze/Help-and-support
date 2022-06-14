import { Fragment } from 'react'
import Link from 'next/link'

const Vendor = () => {
  return (
    <Fragment>
      <div>
        <Link href="/">
          <h1>Let's Help</h1>
        </Link>
        <div>
          <p>
            Feel stuck? Find the answers to your questions here in our Help &
            Support page.
          </p>
        </div>
        <div>
          <input className="" placeholder="Search stuff" type="text"></input>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="flex-col justify-between flex-1 align-top bg-black justify-items-center">
        <div className="">
          <div className="">
            <label className="bg-black">ERRORS WITH ORDERS</label>
          </div>
          <div className="" tw="">
            <label>DELAYS IN FULFILMENT</label>
          </div>
          <div className="" tw="">
            <label>SUBMIT QUERIES</label>
          </div>
          <div className="" tw="">
            <label>ACCOUNT AND LOGIN</label>
          </div>
          <div className="" tw="">
            <label>VENDOR NOT RESPONDING</label>
          </div>
        </div>
        <br></br>
        <div>
          <div className="">
            <label>Adding a new bank account</label>
          </div>
          <div className="" tw="">
            <label>Upgrading from Individual Account to Business</label>
          </div>
          <div className="" tw="">
            <label>Changing your freelancer</label>
          </div>
          <div className="" tw="">
            <label>I got charged twice</label>
          </div>
          <div className="" tw="">
            <label>How long does it take to withdraw?</label>
          </div>
          <div className="" tw="">
            <label>Why aren't there recurring gigs?</label>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Vendor
