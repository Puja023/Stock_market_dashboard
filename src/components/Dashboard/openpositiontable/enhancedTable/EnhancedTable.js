
import React, { useState, useEffect } from 'react';
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material'; 
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './EnhancedTable.css'; 
// Function to sort data
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// Function to get comparator
function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Function for descending comparator
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function EnhancedTable() {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('position');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [emptyRows, setEmptyRows] = useState(0);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/OpenPosition')
      .then(response => response.json())
      .then(data => setRows(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const columns = [
    { label: 'POSITION', key: 'position' },
    { label: 'TYPE', key: 'type' },
    { label: 'VOLUME', key: 'volume' },
    { label: 'MARKET VALUE', key: 'market_value' },
    { label: 'SL', key: 'sl' },
    { label: 'TP', key: 'tp' },
    { label: 'OPEN PRICE', key: 'open_price' },
    { label: 'MARKET PRICE', key: 'market_price' },
    { label: 'GROSS PROFIT', key: 'gross_price' }
  ];

  const visibleRows = stableSort(rows, getComparator(order, orderBy))
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <div className="w-full bg-[#181C1F] text-white border-r-20">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="table-header">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-6 py-3 text-center  text-base font-semibold text-gray-500  uppercase tracking-wider cursor-pointer"
                  onClick={(event) => handleRequestSort(event, column.key)}
                >
                  {column.label}
                  {orderBy === column.key && (
                    order === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-[#181C1F]">
            {visibleRows.map((row) => (
              <tr
                key={row.id}
                className={` ${isSelected(row.id) ? 'bg-gray-600' : ''}`}
                onClick={(event) => handleClick(event, row.id)}
              >
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4 whitespace-nowrap text-white text-base font-semibold">
                    {column.key !== 'position' ? (
                       <div className="flex items-center justify-center">
                      <span>{row[column.key]}</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <span>{row[column.key]}</span>
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end gap-[25px] bg-[#181C1F] rounded-bl-2xl rounded-br-2xl">
        <div className="flex items-center text-lg text-white">
          <span className="pr-2">Rows per page:</span>
          <select
            className="bg-gray-900 rounded-md border-transparent focus:ring-0 focus:border-white"
            value={rowsPerPage}
            onChange={handleChangeRowsPerPage}
          >
            {[5, 10, 25].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center">
  <span className="mr-2">
    {page * rowsPerPage + 1}-{Math.min((page + 1) * rowsPerPage, rows.length)} of {rows.length}
  </span>
  <button
    onClick={() => setPage(page - 1)}
    disabled={page === 0}
    className="px-3 py-2 text-sm font-medium text-white "
  >
        <ArrowBackIos />

  </button>
  <button
    onClick={() => setPage(page + 1)}
    disabled={page >= Math.ceil(rows.length / rowsPerPage) - 1}
    className="px-3 py-2 text-sm font-medium text-white"
  >
    <ArrowForwardIos />

  </button>
</div>

      </div>
    </div>
  );
}

export default EnhancedTable;


