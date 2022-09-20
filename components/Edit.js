import { useState } from 'react'
import { faPen, faBan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EditComp from './EditComp'

const Edit = ({ edits, removeEdit, updateEdit }) => {
  const [editt, setEditt] = useState({
    id: null,
    value: '',
  })

  const submitUpdate = value => {
    updateEdit(editt.id, value)
    setEditt({
      id: null,
      value: '',
    })

    if(editt.id) {
        return <EditComp editt={editt} onSubmit={submitUpdate}></EditComp>
    }
  }
  return edits.map((edit, index) => (
    <div
      tw="w-[300px] m-3 border cursor-pointer pt-16 pr-5 pl-6 pb-5 rounded-xl bg-white) p-10 grid grid-cols-3 grid-rows-2 gap-2"
      key={index}
    >
      <div key={edit.id}>{edit.text}</div>
      <div>
        <FontAwesomeIcon
          icon={faPen}
          onClick={() => setEditt({ id: edit.id, value: edit.text})}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faBan}
          onClick={() => removeEdit(edit.id)}
        ></FontAwesomeIcon>
      </div>
    </div>
  ))
}

export default Edit
