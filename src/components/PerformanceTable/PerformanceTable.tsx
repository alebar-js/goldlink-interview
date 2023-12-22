import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '../Card';
import { DataTableRow, data, data as tableDataMock} from './constants';
import Tag from './Tag';

interface IPNLCellProps {
    pnl: number
}
const PNLCell = ({ pnl }: IPNLCellProps) => {
    const positive = pnl >= 0
    return <span style={{ color: positive ? '#3CC13B' : '#F03738'}}>
        {`${positive ? '+' : '-'} $${Math.abs(pnl)}`}
    </span>
}

const PerformanceTable = () => {
    const [tableData, setTableData] = useState<DataTableRow[]>()
    
    useEffect(() => {
        setTableData(data)
    }, [])


    return (
    <Card>
        <div className='mb-8 '>Strategy Performance</div>

        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Strategy</TableCell>
                        <TableCell>TVL</TableCell>
                        <TableCell>Volatility</TableCell>
                        <TableCell>Collateral</TableCell>
                        <TableCell>PNL</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData?.map((row, i) => <TableRow key={`dataTableRow-${i}`}>
                        <TableCell>{row.strategy}</TableCell>
                        <TableCell>{row.tvl}</TableCell>
                        <TableCell><Tag volatility={row.volatility} /></TableCell>
                        <TableCell>{row.collateral}</TableCell>
                        <TableCell><PNLCell pnl={row.pnl} /></TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    </Card>
    )
}

export default PerformanceTable