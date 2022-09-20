import { Fragment, useState } from 'react'
import 'twin.macro'
import Link from 'next/link'
import SideBar from '../../components/SideBar'
import HeadBar from '../../components/HeadBar'
import EditComp from '../../components/EditComp'

import { faBell, faUser } from '@fortawesome/free-regular-svg-icons'
import {
  faChartPie,
  faComment,
  faRightFromBracket,
  faCircleQuestion,
  faBriefcase,
  faBagShopping,
  faPenToSquare,
  faEnvelopesBulk,
  faPeopleGroup,
  faStore,
  faBookOpen,
  faPen,
  faBan,
  faMagnifyingGlass,
  faArrowLeft,
  faPlus,
  faHandshakeSlash,
  faLock,
  faFolderOpen,
  faCalendarXmark,
  faCircleExclamation,
  faFilePen,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EditList from '../../components/EditList'
import SubCatItem from '../../components/SubCatItem'
import Portal from '../../components/Portal'

export const catIcons = {
  faChartPie,
  faComment,
  faRightFromBracket,
  faCircleQuestion,
  faBriefcase,
  faBagShopping,
  faPenToSquare,
  faEnvelopesBulk,
  faPeopleGroup,
  faStore,
  faBookOpen,
  faPen,
  faBan,
  faMagnifyingGlass,
  faArrowLeft,
  faPlus,
  faHandshakeSlash,
  faLock,
  faFolderOpen,
  faCalendarXmark,
  faCircleExclamation,
  faFilePen,
}

const subCats = [
  {
    id: Math.floor(Math.random() * 10000),
    link: './SubCatPath_Refund',
    title: 'REFUNDS & COMPLAINTS',
    desc: 'For all refund related complaints',
    icon: 'faFolderOpen',
  },
  {
    id: Math.floor(Math.random() * 10000),
    link: './SubCatPath_Account',
    title: 'ACCOUNT & LOGIN',
    desc: 'For all account related complaints',
    icon: 'faLock',
  },
  {
    id: Math.floor(Math.random() * 10000),
    link: './SubCatPath_Vendor',
    title: 'VENDOR NOT RESPONDING',
    desc: 'For all vendor related complaints',
    icon: 'faHandshakeSlash',
  },
  {
    id: Math.floor(Math.random() * 10000),
    link: './SubCatPath_Delays',
    title: 'DELAYS IN FULFILMENT',
    desc: 'For all fulfilment related complaints',
    icon: 'faCalendarXmark',
  },
  {
    id: Math.floor(Math.random() * 10000),
    link: './SubCatPath_Submit',
    title: 'SUBMIT QUERIES',
    desc: 'For submitting queries',
    icon: 'faFilePen',
  },
  {
    id: Math.floor(Math.random() * 10000),
    link: './SubCatPath_Errors',
    title: 'ERRORS WITH ORDERS',
    desc: 'For all order related complaints',
    icon: 'faCircleExclamation',
  },
]

const SubCatMenu = () => {
  const [categories, setCategories] = useState(subCats)
  const [toggle, setToggle] = useState(false)
  const [selectedId, setSelectedId] = useState()
  const [wrong, setWrong] = useState()

  const wrongForm = () => {
    setWrong(!wrong)
  }

  const addCat = newCat => {
    if (
      !newCat.title ||
      /^\s*$/.test(newCat.title) ||
      !newCat.desc ||
      /^\s*$/.test(newCat.desc) ||
      !newCat.icon ||
      /^\s*$/.test(newCat.icon) ||
      !newCat.link ||
      /^\s*$/.test(newCat.link)
    ) {
      setWrong(true)
      setToggle(true)
      return
    }

    const newCategories = [...categories, newCat]

    setCategories(newCategories)
    setToggle(false)
  }

  const editCat = updates => {
    if (!selectedId) return

    setCategories(prev => {
      const index = prev.findIndex(cat => cat.id === selectedId)
      prev[index] = { ...updates, id: selectedId }
      return prev
    })
    setToggle(false)
  }

  const delCat = id => {
    const removeCat = [...categories].filter(cat => cat.id !== id)

    return setCategories(removeCat)
  }

  const handleFormModal = id => {
    setSelectedId(id)
    setToggle(true)
  }

  const handleFormModalAdd = () => {
    setSelectedId('')
    setToggle(true)
  }

  return (
    <Fragment>
      <div tw="flex bg-neutral1 h-screen">
        <SideBar></SideBar>
        <div tw="w-screen">
          <HeadBar></HeadBar>
          <div tw=" h-[750px] w-[100%] flex flex-col">
            <div tw="pl-14 mt-4 w-full h-20 flex space-x-2 ">
              <div tw="pt-1">
                <Link href="./">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
              </div>
              <div tw="border bg-white h-8 text-xs flex items-center text-darkpurple font-bold rounded-xl">
                <p tw="pl-4 pr-4 flex">Help {'&'} Support</p>
              </div>
            </div>
            <div tw="flex space-x-2 items-center">
              <div tw="ml-14 rounded-lg bg-white w-max text-2xl font-bold">
                <h1 tw="p-1 pr-3">Sub-Categories</h1>
              </div>
              <div tw="bg-purple-600 w-max h-5 pl-6 pr-6 rounded-xl text-white text-sm font-bold">
                Custom
              </div>
            </div>
            <div tw="p-2 border bg-white h-[600px] rounded-lg mx-2">
              <div tw="h-[250px] pl-4">
                <div tw="w-[1000px] h-[550px]">
                  {toggle && (
                    <div tw="flex items-center justify-center">
                      <Portal>
                        <EditComp
                          selectedId={selectedId}
                          onSubmit={selectedId ? editCat : addCat}
                          closeModal={() => {
                            setToggle(false)
                          }}
                          defaultCatItem={
                            selectedId
                              ? categories.find(
                                  category => category.id === selectedId,
                                )
                              : undefined
                          }
                          wrong={wrong}
                          wrongForm={wrongForm}
                        />
                      </Portal>
                    </div>
                  )}
                  <div tw="p-5 pr-10 pb-0 grid grid-cols-1 gap-2 [>div]:(flex flex-row justify-between w-[100%] mx-auto mt-1 p-4 border cursor-pointer rounded-xl bg-white) lg:([>div]:(w-[300px] h-[120px] m-3 border cursor-pointer pt-8 pr-5 pl-6 pb-5 rounded-xl bg-white) p-3 grid grid-cols-3 grid-rows-2 gap-2)  md:(grid-cols-2 grid-rows-3)">
                    {categories.map(({ id, link, title, desc, icon }) => (
                      <SubCatItem
                        key={id}
                        title={title}
                        link={link}
                        desc={desc}
                        icon={icon}
                        delCat={delCat.bind(this, id)}
                        categories={categories}
                        editCat={editCat.bind(this, id)}
                        handleFormModal={() => handleFormModal(id)}
                      />
                    ))}
                  </div>
                </div>
                <div tw="flex items-center justify-center h-10 ">
                  <FontAwesomeIcon
                    tw="border text-darkpurple rounded-md text-xl p-1 flex"
                    icon={faPlus}
                    onClick={handleFormModalAdd}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default SubCatMenu
