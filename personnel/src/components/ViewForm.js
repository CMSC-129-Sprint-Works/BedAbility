import React, { useMemo } from 'react'
//import Table from 'react-table'
import { useTable } from 'react-table'  
import HOSPITAL_DATA from './HOSPITAL_DATA.json'
import { COLUMNS } from './columns'
import './table.css'

export const Table = () => {
    //memorizes the output of the function
    const columns = useMemo (() => COLUMNS, [])
    const data = useMemo (() => HOSPITAL_DATA, []) // the data isn't recreated on every render

    const tableInstance = useTable({
        //object properties       
        columns,
        data
    })

    //functions and arrays that the useTable hook from react table package has given to us to enable easy table creation
    const { 
        getTableProps, 
        getTableBodyProps,
        headerGroups, 
        rows, 
        prepareRow
    } = tableInstance   

    return (
        //destructure
        <table {...getTableProps}>
            {/* //render the list of elements in any other components*/}
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(( column) => (
                           <th {...column.getHeaderProps()}> {column.render('Header')} </th>
                        ))}
                    </tr>
                ))}
            </thead>

            <tbody {...getTableBodyProps}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                                {
                                    //access individual row cell
                                    row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    }) 
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
export default Table;
