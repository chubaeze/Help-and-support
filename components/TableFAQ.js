import { useTable } from 'react-table'
import React from 'react'

function TableFAQ() {
  const data = React.useMemo(
    () => [
      {
        col1: '1.',
        col2: 'What is Frolancer and how does it work?',
        col3: 'Taking African talents to the world on the vir...',
      },
      {
        col1: '2.',
        col2: 'How would I get paid for my services a...',
        col3: 'Payments are made after te successful com...',
      },
      {
        col1: '3.',
        col2: 'How would I get jobs and who would gi...',
        col3: 'Frolancer does not give jobs. It only provide...',
      },
      {
        col1: '4.',
        col2: 'Can a business request for refund if the...',
        col3: 'Yes, but Frolancer acts as an intermediary t...',
      },
      {
        col1: '5.',
        col2: 'Can I be removed from frolancer?',
        col3: 'Yes, if the freelance or business does not ad...',
      },
    ],
    [],
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'No.',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Text (Question)',
        accessor: 'col2',
      },
      {
        Header: 'Text (Answer)',
        accessor: 'col3',
      },
      
    ],
    [],
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data })

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px black' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: '',
                  background: 'white',
                  color: 'black',
                  fontWeight: 'bold',
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: 'solid 1px gray',
                      background: 'white',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default TableFAQ
