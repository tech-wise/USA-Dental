import React, { Component } from 'react';
import CountUp from 'react-countup';
import {
  withStyles,
} from '@material-ui/core/styles';

import {
  Table,
  Card,
  CardContent,
  TableRow,
  TableCell,
  TableBody,
  TableHead
} from '@material-ui/core';

const useStyles = theme =>({
  FormControlStyle:{
    height:'2rem',
    padding:"none",
  },
  tableHead: {
    // backgroundColor: '#EDEEF7'
  },
  headCell: {
    color: '#253053',
    fontWeight: 600,
    fontSize: '1rem',
  },
  heading: {
    fontSize: '1rem',
    color: '#253053',
    fontWeight: 500
  },
  Select:{
   color:'#21BFD9',
  }
});


class RcmActivityWorkedonDashboard extends Component {
  state = {};
  render() {
    const {classes}=this.props;
    return (
      <>
        <Card className="card-box mb-spacing-6-x2 color-pb">
          <div className="card-header">
            <div className="card-header--title">
              <h4 className="font-size-lg mb-0 py-2 font-weight-bold color-pb">
                RCM Worked on Dashboard
              </h4>
            </div>
            <div className="card-header--actions">
              <div>{/* You can write something here ! */}</div>
            </div>
          </div>
          <CardContent>
            <div className="table-responsive-md">
              <Table className="table text-nowrap mb-0">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.headCell}>Sr.</TableCell>
                    <TableCell className={classes.headCell} style={{ width: '30%' }}>
                      Biller Status
                    </TableCell>
                    <TableCell align="center" className={classes.headCell}>Updated at</TableCell>
                    <TableCell align="center" className={classes.headCell}>UId Count</TableCell>
                    <TableCell align="center" className={classes.headCell} >
                      Money Resolved
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell className="font-weight-bold">
                      Billed on Portal
                    </TableCell>
                    <TableCell className="text-center">14 Sep 2020</TableCell>
                    <TableCell className="text-center">50</TableCell>
                    <TableCell className="text-right text-info font-weight-bold">
                      <span className="">
                        $
                        <CountUp
                          start={0}
                          end={343465}
                          duration={5}
                          deplay={2}
                          separator=""
                          decimals={0}
                          decimal=","
                        />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell className="font-weight-bold">
                      D-Difference-Not Paid
                    </TableCell>
                    <TableCell className="text-center">14 Sep 2020</TableCell>
                    <TableCell className="text-center">50</TableCell>
                    <TableCell className="text-right text-info font-weight-bold">
                      <span className="">
                        $
                        <CountUp
                          start={0}
                          end={303465}
                          duration={5}
                          deplay={2}
                          separator=""
                          decimals={0}
                          decimal=","
                        />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell className="font-weight-bold">
                      Inclusive Code Difference
                    </TableCell>
                    <TableCell className="text-center">14 Sep 2020</TableCell>
                    <TableCell className="text-center">75</TableCell>
                    <TableCell className="text-right text-info font-weight-bold">
                      <span className="">
                        $
                        <CountUp
                          start={0}
                          end={1233465}
                          duration={5}
                          deplay={2}
                          separator=""
                          decimals={0}
                          decimal=","
                        />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>4</TableCell>
                    <TableCell className="font-weight-bold">
                      Need Approval-Writeoff
                    </TableCell>
                    <TableCell className="text-center">14 Sep 2020</TableCell>
                    <TableCell className="text-center">27</TableCell>
                    <TableCell className="text-right text-info font-weight-bold">
                      <span className="">
                        $
                        <CountUp
                          start={0}
                          end={2363465}
                          duration={5}
                          deplay={2}
                          separator=""
                          decimals={0}
                          decimal=","
                        />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>5</TableCell>
                    <TableCell className="font-weight-bold">
                      Need More Info
                    </TableCell>
                    <TableCell className="text-center">14 Sep 2020</TableCell>
                    <TableCell className="text-center">8</TableCell>
                    <TableCell className="text-right text-info font-weight-bold">
                      <span className="">
                        $
                        <CountUp
                          start={0}
                          end={3423652365}
                          duration={5}
                          deplay={2}
                          separator=""
                          decimals={0}
                          decimal=","
                        />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>6</TableCell>
                    <TableCell className="font-weight-bold">
                      Paid Not Posted
                    </TableCell>
                    <TableCell className="text-center">14 Sep 2020</TableCell>
                    <TableCell className="text-center">55</TableCell>
                    <TableCell className="text-right text-info font-weight-bold">
                      <span className="">
                        $
                        <CountUp
                          start={0}
                          end={10023653465}
                          duration={5}
                          deplay={2}
                          separator=""
                          decimals={0}
                          decimal=","
                        />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>7</TableCell>
                    <TableCell className="font-weight-bold">
                      Paid and Posted
                    </TableCell>
                    <TableCell className="text-center">14 Sep 2020</TableCell>
                    <TableCell className="text-center">80</TableCell>
                    <TableCell className="text-right text-info font-weight-bold">
                      <span className="">
                        $
                        <CountUp
                          start={0}
                          end={3465255}
                          duration={5}
                          deplay={2}
                          separator=""
                          decimals={0}
                          decimal=","
                        />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>8</TableCell>
                    <TableCell className="font-weight-bold">
                      Resubmitted Claim
                    </TableCell>
                    <TableCell className="text-center">14 Sep 2020</TableCell>
                    <TableCell className="text-center">110</TableCell>
                    <TableCell className="text-right text-info font-weight-bold">
                      <span className="">
                        $
                        <CountUp
                          start={0}
                          end={34636525}
                          duration={5}
                          deplay={2}
                          separator=""
                          decimals={0}
                          decimal=","
                        />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>8</TableCell>
                    <TableCell className="font-weight-bold">
                      Send Statement Patient
                    </TableCell>
                    <TableCell className="text-center">14 Sep 2020</TableCell>
                    <TableCell className="text-center">50</TableCell>
                    <TableCell className="text-right text-info font-weight-bold">
                      <span className="">
                        $
                        <CountUp
                          start={0}
                          end={34365265}
                          duration={5}
                          deplay={2}
                          separator=""
                          decimals={0}
                          decimal=","
                        />
                      </span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </>
    );
  }
}

export default withStyles(useStyles)(RcmActivityWorkedonDashboard);
