import {
  faComment,
  faFolderOpen,
  faPenToSquare,
} from '@fortawesome/free-regular-svg-icons'
import {
  faArrowLeft,
  faBagShopping,
  faBookOpen,
  faBriefcase,
  faCircleExclamation,
  faEnvelopesBulk,
  faHandshakeSlash,
  faLock,
  faMagnifyingGlass,
  faPeopleGroup,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Select from 'react-select'
import 'twin.macro'

const options = [
  {
    label: 'faCircleExclamation',
    value: 'faCircleExclamation',
    icon: <FontAwesomeIcon icon={faCircleExclamation} />,
  },
  {
    label: 'faHandshakeSlash',
    value: 'faHandshakeSlash',
    icon: <FontAwesomeIcon icon={faHandshakeSlash} />,
  },
  {
    label: 'faArrowLeft',
    value: 'faArrowLeft',
    icon: <FontAwesomeIcon icon={faArrowLeft} />,
  },
  {
    label: 'faMagnifyingGlass',
    value: 'faMagnifyingGlass',
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
  },
  {
    label: 'faFolderOpen',
    value: 'faFolderOpen',
    icon: <FontAwesomeIcon icon={faFolderOpen} />,
  },
  { label: 'faComment', value: 'faComment',
    icon: <FontAwesomeIcon icon={faComment} />},
  {
    label: 'faRightFromBracket',
    value: 'faRightFromBracket',
    icon: <FontAwesomeIcon icon={faRightFromBracket} />,
  },
  {
    label: 'faBriefcase',
    value: 'faBriefcase',
    icon: <FontAwesomeIcon icon={faBriefcase} />,
  },
  {
    label: 'faBagShopping',
    value: 'faBagShopping',
    icon: <FontAwesomeIcon icon={faBagShopping} />,
  },
  {
    label: 'faPenToSquare',
    value: 'faPenToSquare',
    icon: <FontAwesomeIcon icon={faPenToSquare} />,
  },
  {
    label: 'faEnvelopesBulk',
    value: 'john',
    icon: <FontAwesomeIcon icon={faEnvelopesBulk} />,
  },
  {
    label: 'faPeopleGroup',
    value: 'faPeopleGroup',
    icon: <FontAwesomeIcon icon={faPeopleGroup} />,
  },
  {
    label: 'faBookOpen',
    value: 'faBookOpen',
    icon: <FontAwesomeIcon icon={faBookOpen} />,
  },
  {
    label: 'faLock',
    value: 'faLock',
    icon: <FontAwesomeIcon icon={faLock} />,
  },
]

const ReactSelect = ({ input, setInput }) => {
  const [selectedOption, setSelectedOption] = useState(null)

  const handleChange = e => {
    setSelectedOption(e)
    setInput({
      title: input.title,
      link: input.link,
      desc: input.desc,
      icon: e.value,
    })
  }
  return (
    <div>
      <Select
        tw="border hover:border-purple-600 h-10 focus:outline-none focus:border-purple-600 rounded-md"
        placeholder="Choose an icon.."
        value={selectedOption}
        options={options}
        onChange={handleChange}
        getOptionLabel={e => (
          <div tw="flex flex-row justify-between">
            <div tw="flex items-center justify-center text-xl text-purple-700">
              {e.icon}
            </div>
            <div>
              <span>{e.label}</span>
            </div>
          </div>
        )}
      />
    </div>
  )
}

export default ReactSelect
