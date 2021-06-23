import React, { useMemo } from 'react'
import { useTable } from 'react-table' 
import {Container} from 'react-bootstrap'; 
import HOSPITAL_DATA from './HOSPITAL_DATA.json'

export const BasicTable = (props) => {
    const next = e => {
        e.preventDefault();
        props.nextStep();
    };
      
    const COLUMNS = [
      {
          Header: 'HOSPITAL NAME',
          accessor: 'hospital_name'
      },
      {
          Header: 'TOTAL BED CAPACITY',
          accessor: 'total_bed_capacity'
      },
      {
          Header: 'CURRENT BED COUNT',
          accessor: 'current_bed_count'
      },
      {
          Header: 'BED AVAILABILITY STATUS',
          accessor: 'bed_availability_status'
      }
  ]
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
      <Container className = "App-table">
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
                            <tr {...row.getRowProps()} onClick = {next}>
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

      </Container>
    )
}
export default BasicTable;