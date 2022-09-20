import { useState } from 'react'
import Edit from './Edit'
import EditComp from './EditComp'

const EditList = () => {
  const [edits, setEdits] = useState([])

  const addEdit = edit => {
    if (!edit.text || /^\s*$/.test(edit.text)) {
      return
    }

    const newEdit = [edit, ...edits]
    setEdits(newEdit)
  }

  const updateEdit = (editId, newValue) => {
  

    setEdits(prev => prev.map(item => (item.id === editId ? newValue : item)))
  }

  const removeEdit = id => {
    const removeArr = [...edits].filter(edit => edit.id !== id)

    setEdits(removeArr)
  }

  return (
    <div>
      <EditComp onSubmit={addEdit}></EditComp>
      <Edit edits={edits} removeEdit={removeEdit} updateEdit={updateEdit}></Edit>
    </div>
  )
}

export default EditList
