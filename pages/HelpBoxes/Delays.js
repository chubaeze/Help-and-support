import { Fragment } from 'react'
import Link from 'next/link'

const Delays = () => {
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
      <div className="">
        <div className="">
          <label>ERRORS WITH ORDERS</label>
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
    </Fragment>
  )
}

export default Delays
