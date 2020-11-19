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
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   Grid,
  FormControlLabel,
  Checkbox,
 } from '@material-ui/core';
const TextfieldTheme = createMuiTheme({
  palette: {
    color: '#21BFD9',    
    secondary: {
      main: '#21BFD9'
    }
  }
});
 const useStyles = makeStyles({
  label:{
    color:'#253053',
    fontSize:'1.1rem',
    fontWeight:500,
  },
  root: {
    color: '#21BFD9',
    '&$checked': {
      checked: '#21BFD9'
    }
  },
  checked: {},
});
const Style={
  color:"#21BFD9",
}
export default function VersionsHistory() {
   const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
 
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
        <div className="bg-white rounded br-xl-left-0">
                <p>Delete All Versions</p>
                <Grid container>
                  <Grid item xs={12}>
                    <TableContainer>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell style={Style}>
                              No.
                           </TableCell>
                            <TableCell style={Style}>
                              Modified
                           </TableCell>
                            <TableCell></TableCell>
                            <TableCell style={Style}>
                              Modified By
                           </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {/* One Version */}
                          <TableRow>
                            <TableCell>3.0</TableCell>
                            <TableCell colSpan="2" style={Style}>12/26/2013 12:46 PM</TableCell>
                            <TableCell>
                              <ThemeProvider theme={TextfieldTheme} >                               <FormControlLabel
                                control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" classes={{
                                  root: classes.root,
                                  checked: classes.checked
                                }}/>}
                                label="System Account"
                              />
                              </ThemeProvider>
                             </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell style={Style}>Voice</TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell>SubCategory</TableCell>
                            <TableCell style={Style}>Other Voice related Problems</TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell>ResolutionTime</TableCell>
                            <TableCell>17:09</TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          {/* Two Version */}
                          <TableRow>
                            <TableCell>2.0</TableCell>
                            <TableCell colSpan="2" style={Style}>12/26/2013 12:43 PM</TableCell>
                            <TableCell>
                              <ThemeProvider theme={TextfieldTheme} >                               <FormControlLabel
                                control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" classes={{
                                  root: classes.root,
                                  checked: classes.checked
                                }}/>}
                                label="System Account"
                              />
                              </ThemeProvider>
                             </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell>SubCategory</TableCell>
                            <TableCell style={Style}>Password Reset</TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell>ResolutionTime</TableCell>
                            <TableCell>17:09</TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </div>
        </CardContent>
      </Card>
    </>
  );
}
