import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
 
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  heading:{
    fontSize:"1rem",
    color:"#253053",
    fontWeight:500,
  }
});

export default function ViewTFLClaimReport() {
  const classes = useStyles();

  return (
    <>
      <Card className="card-box mb-spacing-6-x2">
        <div className="card-header">
          <div className="card-header--title">
            <h4 className="font-size-lg mb-0 py-2 font-weight-bold color-pb">
              View RCM Report
            </h4>
          </div>
          <div className="card-header--actions">
            <div>{/* You can write something here ! */}</div>
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
                    <TableCell component="th" scope="row" className={classes.heading}>
                      First Name
                    </TableCell>
                    <TableCell >Mr</TableCell>
                    <TableCell component="th" scope="row" className={classes.heading}>
                      Last Name
                    </TableCell>
                    <TableCell>John</TableCell>
                  </TableRow>
                  {/* --- */}
                  <TableRow>
                    <TableCell component="th" scope="row" className={classes.heading}>
                      Chart Number
                    </TableCell>
                    <TableCell >DAF1256</TableCell>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Date of Birth
                    </TableCell>
                    <TableCell>05-7-1990</TableCell>
                  </TableRow>
                  {/* --- */}
                  <TableRow>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Date of service
                    </TableCell>
                    <TableCell >05-09-2020</TableCell>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Insurance name
                    </TableCell>
                    <TableCell>Health INC</TableCell>
                  </TableRow>
                  {/* --- */}
                  <TableRow>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Payor ID
                    </TableCell>
                    <TableCell >PA1234565</TableCell>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Insurance tel
                    </TableCell>
                    <TableCell>+45212365</TableCell>
                  </TableRow>
                  {/* ------- */}
                  <TableRow>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Date sent
                    </TableCell>
                    <TableCell >------</TableCell>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Claim amount
                    </TableCell>
                    <TableCell>--------</TableCell>
                  </TableRow>
                  {/* ------- */}
                  <TableRow>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Estimated amount
                    </TableCell>
                    <TableCell >------</TableCell>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Estimated amount
                    </TableCell>
                    <TableCell>--------</TableCell>
                  </TableRow>
                  {/* ------- */}
                  <TableRow>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Procedure codes
                    </TableCell>
                    <TableCell >------</TableCell>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Practice name
                    </TableCell>
                    <TableCell>--------</TableCell>
                  </TableRow>
                  {/* ------- */}
                  <TableRow>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Procedure name
                    </TableCell>
                    <TableCell >------</TableCell>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Caller comments
                    </TableCell>
                    <TableCell>--------</TableCell>
                  </TableRow>
                  {/* ------- */}
                  <TableRow>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Caller status
                    </TableCell>
                    <TableCell >------</TableCell>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Biller comments
                    </TableCell>
                    <TableCell>--------</TableCell>
                  </TableRow>
                  {/* ------- */}
                  <TableRow>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Biller status
                    </TableCell>
                    <TableCell >------</TableCell>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Practice name
                    </TableCell>
                    <TableCell>--------</TableCell>
                  </TableRow>
                  {/* ------- */}
                  <TableRow>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Prov
                    </TableCell>
                    <TableCell >------</TableCell>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Claim ID
                    </TableCell>
                    <TableCell>--------</TableCell>
                  </TableRow>
                  {/* ------- */}
                  <TableRow>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Claim Status
                    </TableCell>
                    <TableCell >------</TableCell>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Amount Paid
                    </TableCell>
                    <TableCell>--------</TableCell>
                  </TableRow>
                  {/* ------- */}
                  <TableRow>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Payer ID
                    </TableCell>
                    <TableCell >------</TableCell>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Payer Name
                    </TableCell>
                    <TableCell>--------</TableCell>
                  </TableRow>
                  {/* ------- */}
                  <TableRow>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Group Policy Number
                    </TableCell>
                    <TableCell >------</TableCell>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Group Name
                    </TableCell>
                    <TableCell>--------</TableCell>
                  </TableRow>
                  {/* ------- */}
                  <TableRow>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Caller Status
                    </TableCell>
                    <TableCell >------</TableCell>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Biller Status
                    </TableCell>
                    <TableCell>--------</TableCell>
                  </TableRow>
                  {/* ------- */}
                  <TableRow>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Last Update User
                    </TableCell>
                    <TableCell >------</TableCell>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Match
                    </TableCell>
                    <TableCell>--------</TableCell>
                  </TableRow>
                  {/* ------- */}
                  <TableRow>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Written off Amount
                    </TableCell>
                    <TableCell >------</TableCell>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Payment Posting Status
                    </TableCell>
                    <TableCell>--------</TableCell>
                  </TableRow>
                  {/* ------- */}
                  <TableRow>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    EOB Date
                    </TableCell>
                    <TableCell >------</TableCell>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Upload EOB
                    </TableCell>
                    <TableCell>--------</TableCell>
                  </TableRow>
                  {/* ------- */}
                  <TableRow>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Research Status
                    </TableCell>
                    <TableCell colSpan={3}>------</TableCell>
                  </TableRow>
                   {/* ------- */}
                   <TableRow>
                    <TableCell component="th" scope="row" className={classes.heading}>
                    Research Notes
                    </TableCell>
                    <TableCell colSpan={3}>------</TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </>
  );
}
