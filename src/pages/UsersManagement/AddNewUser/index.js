import React from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button,
  
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
  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event) => {
    setPersonName(event.target.value);
  };
  
  const classes = useStyles();

  return (
    <>
      <Card className="card-box mb-spacing-6-x2">
        <div className="card-header">
          <div className="card-header--title">
            <h4 className="font-size-lg mb-0 py-2 font-weight-bold color-pb">
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
            <ThemeProvider theme={TextfieldTheme} >
              <TextField
                className={classes.TextFieldStyle}
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
                className={classes.TextFieldStyle}
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
                className={classes.TextFieldStyle}
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
                className={classes.TextFieldStyle}
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
                className={classes.TextFieldStyle}
                id="password"
                label="Password"
                type="password"
                fullWidth
              />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <ThemeProvider theme={TextfieldTheme} >
              <FormControl className={classes.FormControlStyle} fullWidth>
                <InputLabel id="demo-mutiple-name-label" color="secondary">Role</InputLabel>
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
              <FormControl className={classes.FormControlStyle} fullWidth>
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
                className={classes.TextFieldStyle}
                id="description"
                label="Notes"
                fullWidth
              />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography align="right">
                <Button size="small" className="btn-neutral-primary btn-hover">
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
