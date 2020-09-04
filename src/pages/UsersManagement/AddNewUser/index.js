import React from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { makeStyles } from '@material-ui/core/styles';

import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button
} from '@material-ui/core';

const useStyles = makeStyles({
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0'
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none'
  },
  TextFieldStyle: {},
  FormControlStyle: {},
  saveButton: {
    marginRight: '15px'
  }
});

export default function AddNewUser() {
  const classes = useStyles();

  return (
    <>
      <Card className="card-box mb-spacing-6-x2">
        <div className="card-header">
          <div className="card-header--title">
            <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
              Add New User
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
              <TextField
                className={classes.TextFieldStyle}
                id="firstname"
                label="First Name"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                className={classes.TextFieldStyle}
                id="lastname"
                label="Last Name"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                className={classes.TextFieldStyle}
                id="email"
                label="Email"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                className={classes.TextFieldStyle}
                id="username"
                label="Username"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                className={classes.TextFieldStyle}
                id="password"
                label="Password"
                type="password"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControl className={classes.FormControlStyle} fullWidth>
                <InputLabel htmlFor="age-native-simple">Role</InputLabel>
                <Select
                  native
                  inputProps={{
                    name: 'age',
                    id: 'age-native-simple'
                  }}>
                  <option aria-label="None" value="" />
                  <option value="BODM">Back office delivery manager</option>
                  <option value="SCHM">Scheduling Manager</option>
                  <option value="ACCM">Accounting manager</option>
                  <option value="INVM">Inventory Manager</option>
                  <option value="QACM">QA and QC Manager</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                className={classes.TextFieldStyle}
                id="description"
                label="Notes"
                fullWidth
                multiline={true}
                rows={3}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography>Upload user profile image</Typography>
              <input
                accept="image/*"
                className={classes.input}
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
                <Button variant="contained" className="btn-primary">
                  Save User
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
