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
    minWidth: 700,
  },
  heading: {
    fontSize: "1rem",
    color: "#253053",
    fontWeight: 500,
  }
});

export default function VersionsHistory() {
  const classes = useStyles();

  return (
    <>
      <Card className="card-box mb-spacing-6-x2">
        <div className="card-header">
          <div className="card-header--title">
            <h4 className="font-size-lg mb-0 py-2 font-weight-bold color-pb">
              Version History
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
                    Biller QC
                    </TableCell>
                  <TableCell ></TableCell>
                  <TableCell component="th" scope="row" className={classes.heading}>
                    Group Num
                    </TableCell>
                  <TableCell></TableCell>
                </TableRow>
                {/* --- */}
                <TableRow>
                  <TableCell component="th" scope="row" className={classes.heading}>
                    Primary/Secondary
                    </TableCell>
                  <TableCell >Primary</TableCell>
                  <TableCell component="th" scope="row" className={classes.heading}>
                    Sent
                    </TableCell>
                  <TableCell>05-7-2019</TableCell>
                </TableRow>
                {/* --- */}
                <TableRow>
                  <TableCell component="th" scope="row" className={classes.heading}>
                    Estimate
                    </TableCell>
                  <TableCell >495.00</TableCell>
                  <TableCell component="th" scope="row" className={classes.heading}>
                    Total
                    </TableCell>
                  <TableCell>405.50</TableCell>
                </TableRow>
                {/* --- */}
                <TableRow>
                  <TableCell component="th" scope="row" className={classes.heading}>
                    Caller Notes
                    </TableCell>
                  <TableCell ></TableCell>
                  <TableCell component="th" scope="row" className={classes.heading}>
                    Caller Status
                    </TableCell>
                  <TableCell>AEOB</TableCell>
                </TableRow>
                {/* ------- */}
                <TableRow>
                  <TableCell component="th" scope="row" className={classes.heading}>
                    Biller Status
                    </TableCell>
                  <TableCell >Paid and Posted</TableCell>
                  <TableCell component="th" scope="row" className={classes.heading}>
                    Biller Comments
                    </TableCell>
                  <TableCell>Payment Receiver Credit Card to Ins.</TableCell>
                </TableRow>
                {/* ------- */}
                <TableRow>
                  <TableCell component="th" scope="row" className={classes.heading}>
                    File Upload
                    </TableCell>
                  <TableCell colSpan="3" className="text-secondary">ABC_Gupta_5214523.pdf</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </>
  );
}
