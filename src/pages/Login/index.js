import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Grid,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Button,
  TextField
} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';

const LoginTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#21BFD9",
    },
    secondary: {
      main: '#253053'
    },
  },
});


export default function Login() {
  const [checked1, setChecked1] = useState(true);

  const handleChange1 = (event) => {
    setChecked1(event.target.checked);
  };

  return (
    <>
      <div className="app-wrapper bg-white min-vh-100">
        <div className="app-main min-vh-100">
          <div className="app-content p-0">
            <div className="app-content--inner d-flex align-items-center">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div className="bg-composed-wrapper--content py-5">
                  <Grid item sm={8} md={6} lg={4} className="mx-auto">
                    <div className="text-center">
                      <h1 className="display-4 mb-1 font-weight-bold color-pb">Login</h1>
                      <p className="font-size-lg mb-0 text-black-50">
                        Fill in the fields below to login to your account
                      </p>
                    </div>
                    <div className="mt-5">
                      <div className="mb-4">
                      <ThemeProvider theme={LoginTheme}>
                        <TextField
                        color="secondary"
                          fullWidth
                          variant="outlined"
                          id="textfield-email"
                          label="Email address"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <MailOutlineTwoToneIcon />
                              </InputAdornment>
                            )
                          }}
                        />
                        </ThemeProvider>
                      </div>
                      <div className="mb-3">
                      <ThemeProvider theme={LoginTheme}>
                        <TextField
                        color="secondary"
                          fullWidth
                          variant="outlined"
                          id="textfield-password"
                          label="Password"
                          type="password"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <LockTwoToneIcon />
                              </InputAdornment>
                            )
                          }}
                        />
                        </ThemeProvider>
                      </div>
                      <div className="d-flex justify-content-between align-items-center font-size-md">
                        <ThemeProvider theme={LoginTheme}>
                        <FormControlLabel
                        color="secondary"
                          control={
                            <Checkbox
                              checked={checked1}
                              onChange={handleChange1}
                              value="checked1"
                              color="primary"
                            />
                          }
                          label="Remember me"
                        />
                        </ThemeProvider>
                        {/* <div>
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="text-first">
                            Recover password
                          </a>
                        </div> */}
                      </div>
                      <div className="text-center py-4">
                        <NavLink to="/DashboardCommerce">
                        <Button className="btn-second font-weight-bold w-50 my-2">
                          Sign in
                        </Button>
                        </NavLink>
                      </div>
                    </div>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
