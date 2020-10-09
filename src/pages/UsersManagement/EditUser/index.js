import React from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button,
  Input,
  MenuItem
} from '@material-ui/core';
const TextfieldTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#21BFD9",
    },
    secondary:{
      main:"#253053",
    }
  },
});



export default function EditUser() {
  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event) => {
    setPersonName(event.target.value);
  };
  return (
    <>
      <Card className="card-box mb-spacing-6-x2">
        <div className="card-header">
          <div className="card-header--title">
            <h4 className="font-size-lg mb-0 py-2 font-weight-bold color-pb">
              Update User
            </h4>
          </div>
          {/* <div className="card-header--actions">
            <div>
              you can write something
            </div>
          </div> */}
        </div>
        <CardContent>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
            <ThemeProvider theme={TextfieldTheme} >
              <TextField
                color="secondary"
                id="firstname"
                label="First Name"
                fullWidth
              />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <ThemeProvider theme={TextfieldTheme} >
              <TextField
                color="secondary"
                id="lastname"
                label="Last Name"
                fullWidth
              />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <ThemeProvider theme={TextfieldTheme} >
              <TextField
                color="secondary"
                id="email"
                label="Email"
                fullWidth
              />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <ThemeProvider theme={TextfieldTheme} >
              <TextField
                color="secondary"
                id="username"
                label="Username"
                fullWidth
              />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <ThemeProvider theme={TextfieldTheme} >
              <TextField
                color="secondary"
                id="password"
                label="Password"
                type="password"
                fullWidth
              />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <ThemeProvider theme={TextfieldTheme} >
              <FormControl fullWidth>
                <InputLabel htmlFor="age-native-simple" color="secondary">Role</InputLabel>
                <Select
                multiple
                labelId="demo-mutiple-name-label"
                value={personName}
                onChange={handleChange}
                id="demo-mutiple-name"
                input={<Input />}
                color="secondary"
                  >
                  <MenuItem aria-label="None" value="" className="hoverColor-Theme"/>
                  <MenuItem value="BODM" className="hoverColor-Theme">Back office delivery manager</MenuItem>
                  <MenuItem value="SCHM" className="hoverColor-Theme">Scheduling Manager</MenuItem>
                  <MenuItem value="ACCM" className="hoverColor-Theme">Accounting manager</MenuItem>
                  <MenuItem value="INVM" className="hoverColor-Theme">Inventory Manager</MenuItem>
                  <MenuItem value="QACM" className="hoverColor-Theme">QA and QC Manager</MenuItem>
                </Select>
              </FormControl>
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <ThemeProvider theme={TextfieldTheme} >
              <FormControl fullWidth>
                <InputLabel id="demo-mutiple-name-label" color="secondary">Clinic</InputLabel>
                <Select
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"
                input={<Input />}
                color="secondary"
                  >
                  <MenuItem aria-label="None" value="" className="hoverColor-Theme"/>
                  <MenuItem value="UCS" className="hoverColor-Theme">Urgent care services</MenuItem>
                  <MenuItem value="MHS" className="hoverColor-Theme">Mental health services</MenuItem>
                  <MenuItem value="DS" className="hoverColor-Theme">Dental Service</MenuItem>
                </Select>
              </FormControl>
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
            <ThemeProvider theme={TextfieldTheme} >
              <TextField
              color="secondary"
                id="description"
                label="Notes"
                fullWidth
              />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography align="right">
                <Button size="small" className="btn-neutral-primary btn-hover">
                  Update User
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
