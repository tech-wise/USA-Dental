import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const useStyles = makeStyles({
  table: {
    minWidth: 700
  },
  heading: {
    fontSize: '1rem',
    color: '#253053',
    fontWeight: 500,
    width: '25%'
  }
});

export default function ViewExpenses() {
  const classes = useStyles();

  return (
    <>
      <Card className="card-box mb-spacing-6-x2">
        <div className="card-header">
          <div className="card-header--title">
            <h4 className="font-size-lg mb-0 py-2 font-weight-bold color-pb">
              View Expense Details
            </h4>
          </div>
          <div className="card-header--actions">
            <div>
              <Button className="btn-neutral-info mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                <FontAwesomeIcon
                  icon={['fas', 'print']}
                  className="font-size-sm"
                />
              </Button>
              <Button className="btn-neutral-first mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                <FontAwesomeIcon
                  icon={['fas', 'edit']}
                  className="font-size-sm"
                />
              </Button>
            </div>
          </div>
        </div>
        <CardContent>
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Date
                  </TableCell>
                  <TableCell>09/29/2020</TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Title
                  </TableCell>
                  <TableCell>Instruments</TableCell>
                </TableRow>
                {/* --- */}
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Expense
                  </TableCell>
                  <TableCell>$11000.00</TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Expense by
                  </TableCell>
                  <TableCell>Accounts</TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell colSpan={4} className="text-right">
                   <span className="font-weight-bold color-pb">Total &nbsp; $11000.00</span>
                  </TableCell>
                </TableRow>
                {/* ---
                <TableRow>
                  <TableCell

                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Notes
                  </TableCell>
                  <TableCell colSpan={3}>
                    Caller Name: AI / Date: 08-28-2020 DOS 06-22-2020. Claim #
                    0081394333 99. Billed amount $219.00. Paid amount $367.00.
                    -Payment was made through check # 546519588 issued on
                    08-17-2020. Check was paid to provider on address 5819 South
                    Highway 6 Suite 210, Missouri City, TX 77459 . -Patient’s
                    total responsibility per EOB is $00.00 -Insurance
                    collectible is $00.00 -Claim is on eBridge – (FBPD batch
                    8-25-2020-(3)Page#:29,31) -Posted on sent date 08-27-2020
                  </TableCell>
                </TableRow> */}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </>
  );
}
