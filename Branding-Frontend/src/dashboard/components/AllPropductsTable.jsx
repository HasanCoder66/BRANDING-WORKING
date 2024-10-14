import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { RiSearchLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";

const initialRows = [
  { id: 1, name: 'Jon', status: 'active', image: 'https://www.shutterstock.com/image-photo/composition-medicine-bottles-pills-isolated-260nw-129916589.jpg' },
  { id: 2, name: 'Cersei', status: 'block', image: 'https://t4.ftcdn.net/jpg/03/08/07/35/360_F_308073521_pLspRn1g6CMNt4s8tFeNsTkfHpSjTE28.jpg' },
  { id: 3, name: 'Jaime', status: 'active', image: 'https://img.freepik.com/premium-photo/medicine-glass-bottle-closed-bottle-isolated-white-background-with-clipping-path_250899-528.jpg?w=360' },
  { id: 4, name: 'Arya', status: 'block', image: 'https://www.shutterstock.com/image-photo/composition-medicine-bottles-pills-isolated-260nw-129916589.jpg' },
  { id: 5, name: 'Daenerys,jasdk ksdj', status: 'block', image: 'https://www.shutterstock.com/image-photo/composition-medicine-bottles-pills-isolated-260nw-129916589.jpg' },
  { id: 6, name: null, status: 'active', image: 'https://img.freepik.com/premium-photo/medicine-glass-bottle-closed-bottle-isolated-white-background-with-clipping-path_250899-528.jpg?w=360' },
  { id: 7, name: 'Ferrara', status: 'block', image: 'https://www.shutterstock.com/image-photo/composition-medicine-bottles-pills-isolated-260nw-129916589.jpg' },
  { id: 8, name: 'Rossini', status: 'active', image: 'https://img.freepik.com/premium-photo/medicine-glass-bottle-closed-bottle-isolated-white-background-with-clipping-path_250899-528.jpg?w=360' }
];

const columns = [
  {
    field: 'image',
    headerName: 'Image',
    width: 180,
    editable: false,
    renderCell: (params) => (
      params.value ? <img src={params.value} alt={params.row.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> : null
    ),
    cellClassName: 'image-cell',
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 450,
    editable: false,
    cellClassName: 'name-cell',
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 180,
    editable: false,
    renderCell: (params) => (
      <Select
        value={params.value || 'active'}
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
            params.value === 'active'
              ? 'darkgreen'
              : params.value === 'block'
                ? 'darkred'
                : 'darkgoldenrod',
          color: '#fff',
          borderRadius: '10px',
        }}
      >
        <MenuItem value="active">Active</MenuItem>
        <MenuItem value="block">Block</MenuItem>
      </Select>
    ),
    cellClassName: 'status-cell',
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
    cellClassName: 'actions-cell',
  },
];

const AllProductsTable = () => {
  const [rows, setRows] = React.useState(initialRows);

  const handleProcessRowUpdate = (newRow) => {
    const updatedRows = rows.map((row) => (row.id === newRow.id ? { ...row, status: newRow.status } : row));
    setRows(updatedRows);
    return newRow;
  };

  return (
    <div className='bg-white ml-5 mr-5 mb-5 py-3'>
      <div className='flex justify-end px-8 py-2'>
        <button className='bg-black text-white p-2 rounded-sm flex'><FaPlus className='m-1' />Add Product</button>
      </div>
      <div className='flex justify-end px-8 py-4'>
        <input type="text" className='border focus:outline-none focus:ring-0 focus:border-gray-600' />
        <button className='bg-sky-800 text-white px-2 py-2'><RiSearchLine /></button>
      </div>
      <Box sx={{ height: 'auto', width: '95%', backgroundColor: 'white', marginLeft: '25px' }}>
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
          rowHeight={120} // Increase the row height here
          sx={{
            '& .MuiDataGrid-root': {
              backgroundColor: 'gray',
              borderBottom: '1px solid #e0e0e0',
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: 'rgba(211, 211, 211, 1)',
              fontSize: '18px',
              textAlign: 'center',
            },
            '& .MuiDataGrid-columnHeader': {
              backgroundColor: 'rgba(211, 211, 211, 1)',
              borderRight: '1px solid #e0e0e0',
              textAlign: 'center',
            },
            '& .MuiDataGrid-columnHeader:last-child': {
              borderRight: 'none',
            },
            '& .MuiDataGrid-cell': {
              borderRight: '1px solid #e0e0e0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              height: '120px', // Set the cell height here
              lineHeight: 'normal', // Ensure text is vertically centered
            },
            '& .MuiDataGrid-cell:last-child': {
              borderRight: 'none',
            },
            '& .name-cell': {
              textAlign: 'center',
            },
            '& .status-cell': {
              textAlign: 'center',
            },
            '& .actions-cell': {
              textAlign: 'center',
            },
            '& .MuiDataGrid-columnHeaderTitleContainer':{
              textAlign:'center',
              display:'flex',
              justifyContent:'center',
              alignItems:'center'
            }
          }}
        />
      </Box>
    </div>
  );
}

export default AllProductsTable;

