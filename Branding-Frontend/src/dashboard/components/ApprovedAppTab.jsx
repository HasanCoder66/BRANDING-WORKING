import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridAddIcon } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { RiSearchLine } from "react-icons/ri";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import TaskIcon from '@mui/icons-material/Task'
const initialRows = [
  { id: 1, amount: '250$', time: '11:47 Am', date: '5/18/24', status:"approved" ,track:  '2024-000030', Email: 'Snow@gmail.com', fullname: 'Salik Abdul Samad Sheikh', invoice: 'paid' },
  { id: 2, amount: '250$', time: '11:47 Am', date: '5/18/24', status:"approved" ,track:  '2024-000030', Email: 'Lannister@gmail.com', fullname: 'Cersei', invoice: 'paid' },
  { id: 3, amount: '250$', time: '11:47 Am', date: '5/18/24', status:"approved" ,track:  '2024-000030', Email: 'Lannister@gmail.com', fullname: 'Jaime', invoice: 'paid' },
  { id: 4, amount: '250$', time: '11:47 Am', date: '5/18/24', status:"approved" ,track:  '2024-000030', Email: 'Stark@gmail.com', fullname: 'Arya', invoice: 'paid' },
  { id: 5, amount: '250$', time: '11:47 Am', date: '5/18/24', status:"approved" ,track:  '2024-000030', Email: 'Targaryen@gmail.com', fullname: 'Daenerys', invoice: 'pending payment' },
  { id: 6, amount: '250$', time: '11:47 Am', date: '5/18/24', status:"approved" ,track:  '2024-000030', Email: 'Melisandre@gmail.com', fullname: 'Syed Hamza Bashir', invoice: 'pending payment' },
  { id: 7, amount: '250$', time: '11:47 Am', date: '5/18/24', status:"approved" ,track:  '2024-000030', Email: 'Clifford@gmail.com', fullname: 'Ferrara', invoice: 'pending payment' },
  { id: 8, amount: '250$', time: '11:47 Am', date: '5/18/24', status:"approved" ,track:  '2024-000030', Email: 'Frances@gmail.com', fullname: 'Rossini', invoice: 'paid' },
  { id: 9, amount: '250$', time: '11:47 Am', date: '5/18/24', status:"approved" ,track:  '2024-000030', Email: 'Roxie@gmail.com', fullname: 'Harvey', invoice: 'pending payment' },
  { id: 10, amount: '250$', time: '11:47 Am', date: '5/18/24',status:"approved" , track:  '2024-000030', Email: 'Snowwwwwwwwwwwwwwwwwwwwww@gmail.com', fullname: 'Jon', invoice: 'pending payment' },
];

const columns = [
  {
    field: 'track',
    headerName: 'Track BY',
    width: 110,
    editable: false,
  },
  {
    field: 'Email',
    headerName: 'Checked By',
    width: 170,
    editable: false,
    renderCell: (params) => (
      <div style={{ whiteSpace: 'normal', wordBreak: 'break-word', lineHeight: '1.2', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', textAlign: 'center' }}>
        {params.value}
      </div>
    ),
  },
  {
    field: 'fullname',
    headerName: 'Assign To',
    width: 150,
    editable: false,
    renderCell: (params) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', textAlign: 'center', whiteSpace: 'normal', wordBreak: 'break-word', lineHeight: '1.2' }}>
        {params.value}
      </div>
    ),
  },
  {
    field: 'time',
    headerName: 'Desired Time',
    width: 100,
    editable: false,
    renderCell: (params) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', textAlign: 'center', whiteSpace: 'normal', wordBreak: 'break-word', lineHeight: '1.2' }}>
        {params.value}
      </div>
    ),
  },
  {
    field: 'date',
    headerName: 'Desired Date',
    width: 100,
    editable: false,
    renderCell: (params) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', textAlign: 'center', whiteSpace: 'normal', wordBreak: 'break-word', lineHeight: '1.2' }}>
        {params.value}
      </div>
    ),
  },
  {
    field: 'invoice',
    headerName: 'Invoice',
    width: 100,
    editable: false,
    renderCell: (params) => (
      <div style={{
        whiteSpace: 'normal',
        wordBreak: 'break-word',
        lineHeight: '1.2',
        textAlign: 'center',
        padding: '4px 8px',
        borderRadius: '4px',
        backgroundColor: params.value === 'paid' ? 'rgba(144, 238, 144, 0.3)' : 'rgba(255, 255, 0, 0.3)'
      }}>
        {params.value}
      </div>
    ),
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 130,
    editable: false,
    renderCell: (params) => (
      <Select
        value={params.value || 'approved'}
        onChange={(event) => {
          const newValue = event.target.value;
          params.api.updateRows([{ id: params.id, status: newValue }]);
        }}
        displayEmpty
        fullWidth
        IconComponent={null}
        sx={{
          '& .MuiSelect-select': {
        padding:'4px',
            textAlign: 'center',
            borderBottom: 'none', // Removing bottom border from the dropdown menu
            outline: 'none',
            fontSize:'12px',
            whiteSpace: 'normal',
            wordBreak: 'break-word',
            marginLeft:'16px'
           
          
          },
          backgroundColor:
            params.value === 'approved'
              ? 'darkgreen'
              : params.value === 'rejected'
              ? 'darkred'
              : 'darkgoldenrod',
          color: '#fff',
          borderRadius: '10px',
        }}
      >
      
        <MenuItem value="approved">Approved</MenuItem>
        <MenuItem value="rejected">Rejected</MenuItem>
      </Select>
    ),
  },
  {
    field: 'actions',
    headerName: '',
    width: 130,
    editable: false,
    renderCell: (params) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', textAlign: 'center' }}>
        <IconButton aria-label="edit" size="small">
          <EditIcon/>
        </IconButton>
        <IconButton aria-label="delete" size="small">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" size="small">
          <GridAddIcon />
        </IconButton>
        <IconButton aria-label="delete" size="small">
          <TaskIcon/>
        </IconButton>
      </div>
    ),
  },
];

export default function ApprovedAppTab() {
  const [rows, setRows] = React.useState(initialRows);

  const handleProcessRowUpdate = (newRow) => {
    const updatedRows = rows.map((row) => (row.id === newRow.id ? { ...row, status: newRow.status } : row));
    setRows(updatedRows);
    return newRow;
  };

  return (
    <div className='bg-white ml-5 mr-5 mb-5 py-3'>
      <h1 className='text-md font-semibold mx-8'>Approved Appointments</h1>
      <div className='flex justify-end px-8 py-4'>
        <input type="text" className='border focus:outline-none focus:ring-0 focus:border-gray-600' />
        <button className='bg-sky-800 text-white px-2 py-2 '><RiSearchLine /></button>
      </div>
      <Box sx={{ height: 'auto', width: '97%', backgroundColor: 'white', marginLeft: '18px' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          processRowUpdate={handleProcessRowUpdate}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          sx={{
            '& .MuiDataGrid-columnHeaders': {
            //   backgroundColor: 'rgba(214, 214, 214, 1)',
              fontSize: '18px',
              whiteSpace: 'normal',
              wordBreak: 'break-word',
            },
            '& .MuiDataGrid-columnHeaderTitleContainer': {
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
            },
            '& .MuiDataGrid-columnHeader': {
              borderRight: '1px solid #e0e0e0',
              backgroundColor: 'rgba(211, 211, 211, 1)',
              fontSize: '16px',
              whiteSpace: 'normal',
              wordBreak: 'break-word',
            },
            '& .MuiDataGrid-column': {
              borderRight: '1px solid #e0e0e0',
            },
            '& .MuiDataGrid-cell': {
              borderRight: '1px solid #e0e0e0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              whiteSpace: 'normal',
              wordBreak: 'break-word',
            },
            '& .MuiDataGrid-columnSeparator': {
              display: 'none',
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              borderRight: '1px solid #e0e0e0',
              backgroundColor: 'rgba(211, 211, 211, 1)',
              fontSize: '12px',
              fontWeight: 'bold',
            },
            '& .MuiDataGrid-columnHeader:last-child': {
              borderRight: 'none',
            },
            '& .MuiDataGrid-cell:last-child': {
              borderRight: 'none',
            },
          }}
        />
      </Box>
    </div>
  );
}
