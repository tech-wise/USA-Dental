import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Access from './../RandomDataApi/access.json';
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

export default function AddNewModule() {
  const classes = useStyles();
  return (
    <>
      <Card className="card-box mb-spacing-6-x2">
        <div className="card-header">
          <div className="card-header--title">
            <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
              Add New Module
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
            <Grid item xs={12} sm={12} md={4}>
              <TextField
                className={classes.TextFieldStyle}
                id="modulecode"
                label="Module Code"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <TextField
                className={classes.TextFieldStyle}
                id="modulename"
                label="Module Name"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                className={classes.TextFieldStyle}
                id="modulename"
                label="Module Slug/URL/Parameters"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography style={{ color: 'purple' }}>
                <br />
                Features
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Grid container className={classes.gridMargin}>
                {Access.map((access) => (
                  <Grid item xs={12} sm={12} md={3}>
                    <FormControlLabel
                      control={<Checkbox name={access.name} />}
                      label={access.label}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography align="right">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.saveButton}>
                  Save Module
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
