/* eslint-disable react/prop-types */
import { useMemo } from 'react';
import { useTable } from 'react-table';
import { Link } from 'react-router-dom';

import '../styles/datatable.css';

const DataTable = ({ data, movePostToTrash, deletePost, recoverPost }) => {
  const columns = useMemo(
    () => [
      {
        Header: 'No',
        accessor: 'rowNumber',
        Cell: ({ row }) => row.index + 1,
      },
      {
        Header: 'Title',
        accessor: 'title',
        Cell: ({ row }) => (
          <>
            {row.original.status === 'publish' ? (
              <Link to={`/preview/${row.original.id}`}>
                {row.original.title}
              </Link>
            ) : (
              row.original.title
            )}
          </>
        ),
      },
      {
        Header: 'Category',
        accessor: 'category',
        Cell: ({ row }) => `#${row.original.category}`,
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: ({ row }) => (
          <>
            {row.original.status === 'trash' ? (
              <>
                <button
                  className="btn btn-outline-primary me-2"
                  onClick={() =>
                    recoverPost({
                      id: row.original.id,
                      title: row.original.title,
                      content: row.original.content,
                      category: row.original.category,
                    })
                  }
                >
                  Recover
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deletePost(row.original.id)}
                >
                  Delete Permanently
                </button>
              </>
            ) : (
              <>
                <Link
                  to={`/edit/${row.original.id}`}
                  className="btn btn-outline-primary me-2"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-outline-danger"
                  onClick={() =>
                    movePostToTrash({
                      id: row.original.id,
                      title: row.original.title,
                      content: row.original.content,
                      category: row.original.category,
                    })
                  }
                >
                  Move to Trash
                </button>
              </>
            )}
          </>
        ),
      },
    ],
    [movePostToTrash, deletePost, recoverPost]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <table className="table" {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            className="d-flex"
            key={headerGroup.id}
            {...headerGroup.getHeaderGroupProps()}
          >
            {headerGroup.headers.map((column) => (
              <th key={column.id} {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr className="d-flex" key={row.id} {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td key={cell.row.id + cell.column.id} {...cell.getCellProps()}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
