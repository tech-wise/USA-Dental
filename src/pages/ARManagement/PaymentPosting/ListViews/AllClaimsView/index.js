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
    fontWeight: 500
  }
});

export default function PaymentAllClaimView() {
  const classes = useStyles();

  return (
    <>
      <Card className="card-box mb-spacing-6-x2">
        <div className="card-header">
          <div className="card-header--title">
            <h4 className="font-size-lg mb-0 py-2 font-weight-bold color-pb">
              View Claim
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
              <Button className="btn-neutral-danger mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                <FontAwesomeIcon
                  icon={['fas', 'trash']}
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
              {/* <TableHead>
                <TableRow>
                  <TableCell align="center">---------</TableCell>
                  <TableCell align="center">-----</TableCell>
                  <TableCell align="center">-----</TableCell>
                  <TableCell align="center">------</TableCell>
                 </TableRow>
              </TableHead> */}
              <TableBody>
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Patient First Name
                  </TableCell>
                  <TableCell>Mr</TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Patient Last Name
                  </TableCell>
                  <TableCell>John</TableCell>
                </TableRow>
                {/* --- */}
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Birthday
                  </TableCell>
                  <TableCell>12/6/2000</TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Date of service
                  </TableCell>
                  <TableCell>05-09-2020</TableCell>
                </TableRow>
                {/* --- */}
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Patient Address State Code
                  </TableCell>
                  <TableCell>USA-45222</TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Subscriber
                  </TableCell>
                  <TableCell>-----</TableCell>
                </TableRow>
                {/* --- */}
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Insurance Company
                  </TableCell>
                  <TableCell>TFL Insurance</TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Insurance tel
                  </TableCell>
                  <TableCell>+45212365</TableCell>
                </TableRow>
                {/* ------- */}
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Biller QC
                  </TableCell>
                  <TableCell>------</TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Group Num
                  </TableCell>
                  <TableCell>--------</TableCell>
                </TableRow>
                {/* ------- */}
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Primary/Secondary
                  </TableCell>
                  <TableCell>------</TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Sent
                  </TableCell>
                  <TableCell>--------</TableCell>
                </TableRow>
                {/* ------- */}
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Re-Sent
                  </TableCell>
                  <TableCell>------</TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Estimate
                  </TableCell>
                  <TableCell>--------</TableCell>
                </TableRow>
                {/* ------- */}
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Total
                  </TableCell>
                  <TableCell>------</TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Caller Notes
                  </TableCell>
                  <TableCell>--------</TableCell>
                </TableRow>
                {/* ------- */}
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Caller status
                  </TableCell>
                  <TableCell>------</TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Biller comments
                  </TableCell>
                  <TableCell>--------</TableCell>
                </TableRow>
                {/* ------- */}
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    File Upload
                  </TableCell>
                  <TableCell>------</TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Match
                  </TableCell>
                  <TableCell>--------</TableCell>
                </TableRow>
                {/* ------- */}
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Admin Status
                  </TableCell>
                  <TableCell>------</TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Written off Amount
                  </TableCell>
                  <TableCell>--------</TableCell>
                </TableRow>
                {/* ------- */}
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Payment posting Status
                  </TableCell>
                  <TableCell>------</TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    EOB Date
                  </TableCell>
                  <TableCell>--------</TableCell>
                </TableRow>
                {/* ------- */}
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Insurance Paid
                  </TableCell>
                  <TableCell>------</TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    EOB Upload
                  </TableCell>
                  <TableCell>--------</TableCell>
                </TableRow>
                {/* ------- */}
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    PP Status
                  </TableCell>
                  <TableCell>------</TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Patient Responsbilities per EOB
                  </TableCell>
                  <TableCell>--------</TableCell>
                </TableRow>
                {/* ------- */}
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    PP Notes
                  </TableCell>
                  <TableCell>------</TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Processed by Payment Poster Name
                  </TableCell>
                  <TableCell>--------</TableCell>
                </TableRow>
                {/* ------- */}
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.heading}>
                    Poster Last Worked on Date
                  </TableCell>
                  <TableCell>------</TableCell>
                </TableRow>
                {/* ------- */}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </>
  );
}
