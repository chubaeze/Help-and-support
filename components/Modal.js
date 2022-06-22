import React, { Fragment, useState } from 'react'
import 'twin.macro'

import { faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Modal = () => {
  const [username, setUsername] = useState('username')
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')

  const submit = e => {
    e.preventDefault()
  }

  return (
    <Fragment>
      <div tw="container">
        <div>
          <div>
            <h2 tw="text-lg font-bold mb-1 font-headings">Messenger</h2>
            <div tw="border border-purple-300 mt-4 ml-3 rounded-md h-96">
              {messages.map(message => {
                return (
                  <div>
                    <div>
                      <strong>{message.username}</strong>
                    </div>

                    <div>{message.message}</div>
                  </div>
                )
              })}
            </div>
            <div tw="">
              <div tw="flex ml-3 h-full mt-4">
                <input
                  tw="w-max border text-gray-300 border-gray-200 p-2 rounded-lg"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <form
          tw="flex justify-center space-x-3 items-center mt-5"
          onSubmit={submit}
        >
          <input
            tw="w-5/6 rounded-lg p-1 border border-gray-200"
            placeholder="Write a message"
            value={message}
            onChange={e => setMessage(e.target.value)}
          ></input>
          <button>
            <div>
              <FontAwesomeIcon
                tw="text-xl text-purple-600"
                icon={faPaperclip}
              />
            </div>
          </button>
          <button type="submit">
            <div>
              <FontAwesomeIcon
                tw="text-xl text-purple-600"
                icon={faPaperPlane}
              />
            </div>
          </button>
        </form>
      </div>
    </Fragment>
  )
}

export default Modal
