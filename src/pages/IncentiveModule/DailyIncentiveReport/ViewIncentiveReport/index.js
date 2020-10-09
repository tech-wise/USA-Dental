import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Trend from 'react-trend';
import Chart from 'react-apexcharts';

const useStyles = makeStyles({
  table: {
    width: 'auto'
  },
  heading: {
    fontSize: '1rem',
    color: '#253053',
    fontWeight: 500
  },
  chart: {
    // background: '#F3F4FC',
    // padding: '1rem',
    // borderRadius: '10px',
    paddingTop: '5rem',
  },
});

export default function ViewIncentiveReport() {
  const classes = useStyles();
  const options = {
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  };
  const series = [
    {
      data: [30, 40, 25, 50, 49, 21, 70, 51]
    }
  ];
  return (
    <>
      <Card className="card-box mb-spacing-6-x2">
        <div className="card-header">
          <div className="card-header--title">
            <h4 className="font-size-lg mb-0 py-2 font-weight-bold color-pb">
              View Incentive Report
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
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={6}>
              <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                  <TableBody>
                    <TableRow>
                      <TableCell style={{ width: "40%" }}>
                        <div className="badge badge-success">Excellent</div>
                      </TableCell>
                      <TableCell>
                        <Trend
                          data={[0, 10, 5, 22, 3.6, 11]}
                          autoDraw
                          autoDrawDuration={3000}
                          autoDrawEasing="ease-in"
                          radius={15}
                          smooth
                          stroke="var(--danger)"
                          strokeLinecap="round"
                          strokeWidth={5}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.heading}>
                        Employee
                    </TableCell>
                      <TableCell>John Villiams</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.heading}>
                        Department
                  </TableCell>
                      <TableCell>Front Desk</TableCell>
                    </TableRow>
                    {/* --- */}
                    <TableRow>
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.heading}>
                        Extra Hour
                  </TableCell>
                      <TableCell>2 Hour</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.heading}>
                        Bonus
                  </TableCell>
                      <TableCell>$50</TableCell>
                    </TableRow>
                    {/* --- */}
                    <TableRow>
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.heading}>
                        Extra Activity
                  </TableCell>
                      <TableCell>Deal Patient</TableCell>

                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Paper style={{ marginTop: '3rem' }}>
                <Chart options={options} series={series} type="bar" />
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
