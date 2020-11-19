import React, { useState } from 'react';
 import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import CloseIcon from '@material-ui/icons/Close'; import {
  Dialog,
  Grid,
  FormControlLabel,
  Checkbox,
  IconButton
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
  const [version, seVersion] = useState(false);
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const toggleVersion = () => seVersion(!version);

  const classes = useStyles();

  return (
    <>
      <Button onClick={toggleVersion} size="small"
        className="btn-neutral-primary btn-hover">
        Versions
    </Button>
      <Dialog
        scroll="body"
        maxWidth="md"
        open={version}
        onClose={toggleVersion}
        classes={{ paper: 'modal-content rounded border-0' }}>
        <Grid container spacing={0}>
          <Grid item xl={5} className="p-3 p-xl-0">
            <h5 className="m-2 font-weight-bold">Version History</h5>
            <IconButton onClick={toggleVersion} style={{ float: "right", marginTop: "-45px", marginRight: "5px" }}>
              <CloseIcon/>
            </IconButton>
          </Grid>
          <Grid item xl={7}>
            <div className="bg-white rounded br-xl-left-0">
              <div className="p-5">
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
                          <TableRow>
                            <TableCell>3.0</TableCell>
                            <TableCell colSpan="2" style={Style}>12/26/2013 12:46 PM</TableCell>
                            <TableCell>
                              <ThemeProvider theme={TextfieldTheme} >                               <FormControlLabel
                                control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" className={classes.root}/>}
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
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
}
