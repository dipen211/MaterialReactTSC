import React from 'react';
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// core components
import tableStyle from '../../assets/jss/material-dashboard-react/components/tableStyle';

function CustomTable({ ...props }: any) {
  const { classes, tableHead, tableData, tableHeaderColor } = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + 'TableHeader']}>
            <TableRow>
              {tableHead.map((prop: any, key: any) => {
                return (
                  <TableCell
                    className={classes.tableCell + ' ' + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((employee: any) => (
            <TableRow key={employee.id}>
              <TableCell className={classes.tableCell}>
                {employee.id}
              </TableCell>
              <TableCell className={classes.tableCell}>
                {employee.first_name}
              </TableCell>
              <TableCell className={classes.tableCell}>
                {employee.last_name}
              </TableCell>
              <TableCell className={classes.tableCell}>
                {employee.email}
              </TableCell>
              <TableCell className={classes.tableCell}>
                {employee.password}
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Link
                  to={`/Edit/${employee.id}`}
                  className="btn btn-sm btn-outline-secondary"
                >
                  Edit Employee
                </Link>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => { if (window.confirm('Delete the item?')) { props.deleteEmployee(employee.id) } }}
                >Delete Employee</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: 'gray'
};

export default withStyles(tableStyle)(CustomTable);
