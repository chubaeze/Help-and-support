import { Fragment } from 'react'
import Link from 'next/link'
import 'twin.macro'

function Home() {
  return (
    <Fragment>
      <div tw="focus-within:" className="home">
        <Link href="/">
          <h1>Let's Help</h1>
        </Link>
        <div>
          <p>
            Feel stuck? Find the answers to your questions here in our Help &
            Support page.
          </p>
        </div>
        <div className="search-input">
          <input
            className="search-input"
            placeholder="Search stuff"
            type="text"
            tw="border hover:border-black"
          ></input>
        </div>
      </div>
      <div></div>
      <br></br>
      <br></br>

      <div className="section-box">
        <Link href="../HelpBoxes/Vendor">
          <div className="section-card">
            <h2>VENDOR NOT RESPONDING?</h2>
            <p>For all vendor related complaints</p>
          </div>
        </Link>
        <Link href="../HelpBoxes/Account">
          <div className="section-card">
            <h2>ACCOUNT & LOGIN</h2>
            <p>For all vendor related complaints</p>
          </div>
        </Link>
        <Link href="../HelpBoxes/Refunds">
          <div className="section-card">
            <h2>REFUNDS & COMPLAINTS</h2>
            <p>For all vendor related complaints</p>
          </div>
        </Link>
        <Link href="../HelpBoxes/Delays">
          <div className="section-card">
            <h2>DELAYS IN FULFILMENT</h2>
            <p>For all vendor related complaints</p>
          </div>
        </Link>
        <Link href="../HelpBoxes/Errors">
          <div className="section-card">
            <h2>ERRORS WITH ORDERS</h2>
            <p>For all vendor related complaints</p>
          </div>
        </Link>
        <Link href="../HelpBoxes/Submit">
          <div className="section-card">
            <h2>SUBMIT QUERIES</h2>
            <p>For all vendor related complaints</p>
          </div>
        </Link>
      </div>
    </Fragment>
  )
}

export default Home
