import React from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button
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
                color="secondary"
                  inputProps={{
                    name: 'age',
                    id: 'age-native-simple'
                  }}>
                  <option aria-label="None" value="" className="hoverColor-Theme"/>
                  <option value="BODM" className="hoverColor-Theme">Back office delivery manager</option>
                  <option value="SCHM" className="hoverColor-Theme">Scheduling Manager</option>
                  <option value="ACCM" className="hoverColor-Theme">Accounting manager</option>
                  <option value="INVM" className="hoverColor-Theme">Inventory Manager</option>
                  <option value="QACM" className="hoverColor-Theme">QA and QC Manager</option>
                </Select>
              </FormControl>
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
            <ThemeProvider theme={TextfieldTheme} >
              <TextField
              color="secondary"
                id="description"
                label="Notes"
                fullWidth
                multiline={true}
                rows={3}
              />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <ThemeProvider theme={TextfieldTheme}>
              <Typography color="primary">Upload user profile image</Typography>
              </ThemeProvider>
              <input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                style={{ display: 'none' }}
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  className="mt-1 btn-primary btn-gradient shadow-none btn-gradient-inverse bg-heavy-rain"
                  component="span"
                  startIcon={<PhotoCamera />}>
                  Upload
                </Button>
              </label>
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
