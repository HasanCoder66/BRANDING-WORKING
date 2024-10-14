
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { RiSearchLine } from "react-icons/ri";
const initialRows = [
    // { id: 1, gender: 'Male', Email: 'Snow@gmail.com', fullname: 'Jon', status: 'rejected' },
    //   { id: 2, gender: 'Male', Email: 'Lannister@gmail.com', fullname: 'Cersei', status: 'rejected' },
    //   { id: 3, gender: 'Male', Email: 'Lannister@gmail.com', fullname: 'Jaime', status: 'rejected' },
    //   { id: 4, gender: 'Male', Email: 'Stark@gmail.com', fullname: 'Arya', status: 'rejected' },
    //   { id: 5, gender: 'Male', Email: 'Targaryen@gmail.com', fullname: 'Daenerys', status: 'rejected' },
    //   { id: 6, gender: 'Female', Email: 'Melisandre@gmail.com', fullname: null, status: 'rejected' },
    //   { id: 7, gender: 'Female', Email: 'Clifford@gmail.com', fullname: 'Ferrara', status: 'rejected' },
    //   { id: 8, gender: 'Female', Email: 'Frances@gmail.com', fullname: 'Rossini', status: 'rejected' },
    //   { id: 9, gender: 'Female', Email: 'Roxie@gmail.com', fullname: 'Harvey', status: 'rejected' },
    //   { id: 10, gender: 'Male', Email: 'Snow@gmail.com', fullname: 'Jon', status: 'rejected' },
      
  ];
  
  const columns = [
    {
      field: 'fullname',
      headerName: 'Full Name',
      width: 250,
      editable: false,
    },
    {
      field: 'gender',
      headerName: 'Gender',
      width: 120,
      editable: false,
    },
    {
      field: 'Email',
      headerName: 'Email Address',
      width: 257,
      editable: false,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 180,
      editable: false,
      renderCell: (params) => (
        <Select
          value={params.value || 'rejected'}
          onChange={(event) => {
            const newValue = event.target.value;
            params.api.updateRows([{ id: params.id, status: newValue }]);
          }}
          displayEmpty
          fullWidth
          IconComponent={null}
          sx={{
            '& .MuiSelect-select': {
              padding: '5px 32px',
              textAlign: 'center',
              borderBottom: 'none', // Removing bottom border from the dropdown menu
              outline: 'none',
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
      width: 160,
      editable: false,
      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <IconButton aria-label="edit" size="small">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" size="small">
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];
  

const RejectedPhysiciansTable = () => {
    const [rows, setRows] = React.useState(initialRows);

    const handleProcessRowUpdate = (newRow) => {
      const updatedRows = rows.map((row) => (row.id === newRow.id ? { ...row, status: newRow.status } : row));
      setRows(updatedRows);
      return newRow;
    };
  return (
    <div className='bg-white ml-5 mr-5 mb-5 py-3'>
    
<div className='flex justify-end px-8 py-4'>
 <input type="text" className='border  focus:outline-none focus:ring-0 focus:border-gray-600'/>
 <button className='bg-sky-800 text-white px-2 py-2 '><RiSearchLine/></button>
</div>
    <Box sx={{ height: 400, width: '95%', backgroundColor: 'white' , marginLeft:'25px' }}>
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
          '& .css-14s9430-MuiDataGrid-root': {
            backgroundColor: 'gray',
            borderBottom: '1px solid #e0e0e0',
          
          },
          '& .MuiDataGrid-column': {
            borderRight: '1px solid #e0e0e0',
          },
          '& .MuiDataGrid-cell': {
            borderRight: '1px solid #e0e0e0',
          },
          '& .MuiDataGrid-columnSeparator': {
            display: 'none',
          },
          '& .MuiDataGrid-columnHeader': {
            borderRight: '1px solid #e0e0e0',
            backgroundColor:'rgba(211, 211, 211, 1)',
           fontSize:'18px',
           textAlign:'center'
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
    
  )
}

export default RejectedPhysiciansTable