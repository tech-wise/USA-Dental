import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
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
  },
  endRow: {
     backgroundColor:"#F4F5FD",
  },
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
              <TableHead>
                <TableRow className={classes.heading}>
                  <TableCell>User ID</TableCell>
                  <TableCell>User Name</TableCell>
                  <TableCell>Time</TableCell>
                  <TableCell>Field</TableCell>
                  <TableCell>Orignal</TableCell>
                  <TableCell>Current</TableCell>
                </TableRow>
              </TableHead>
              {/* </Table>
             <Table> */}
              <TableBody>
                <TableRow>
                  <TableCell >
                    User01
                    </TableCell>
                  <TableCell>John Doe</TableCell>
                  <TableCell>
                    11/17/2020 10:30AM
                    </TableCell>
                  <TableCell>Biller QC</TableCell>
                  <TableCell>Blank</TableCell>
                  <TableCell>No Collections</TableCell>
                </TableRow>
                {/* --- */}
                <TableRow>
                  <TableCell >
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                  </TableCell>
                  <TableCell>Biller Status</TableCell>
                  <TableCell>Paid not Posted</TableCell>
                  <TableCell>Paid and Posted</TableCell>
                </TableRow>
                {/* --- */}
                <TableRow>
                  <TableCell >
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                  </TableCell>
                  <TableCell>Admin Status</TableCell>
                  <TableCell>Null</TableCell>
                  <TableCell>Written Off</TableCell>
                </TableRow>
                <TableRow className={classes.endRow}><TableCell colSpan="6"></TableCell></TableRow>
                <TableRow>
                  <TableCell >
                    Admin
                    </TableCell>
                  <TableCell>Administrator</TableCell>
                  <TableCell>
                    11/17/2020 10:30AM
                    </TableCell>
                  <TableCell>Biller QC</TableCell>
                  <TableCell>Blank</TableCell>
                  <TableCell>ICF Missing</TableCell>
                </TableRow>
                {/* --- */}
                <TableRow>
                  <TableCell >
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                  </TableCell>
                  <TableCell>Biller Status</TableCell>
                  <TableCell>Paid and Posted</TableCell>
                  <TableCell>Need Approval</TableCell>
                </TableRow>
                {/* --- */}
                <TableRow>
                  <TableCell >
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                  </TableCell>
                  <TableCell>Admin Status</TableCell>
                  <TableCell>Written Off</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </>
  );
}
