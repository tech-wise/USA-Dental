import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { useDropzone } from 'react-dropzone';
import CloseTwoToneIcon from '@material-ui/icons/CloseTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import CheckIcon from '@material-ui/icons/Check';
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

function Avatar() {
  const [files, setFiles] = React.useState([]);
  const {
    isDragActive,
    isDragAccept,
    isDragReject,
    open,
    getRootProps,
    getInputProps
  } = useDropzone({
    noClick: true,
    noKeyboard: true,
    multiple: false,
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
       
    }
  });

  const thumbs = files.map((file) => (
    <div
      key={file.name}
      className="rounded-circle avatar-image overflow-hidden d-100 bg-neutral-success text-center font-weight-bold text-success d-flex justify-content-center align-items-center">
      <img
        className="img-fluid img-fit-container rounded-sm"
        src={file.preview}
        alt="..."
      />
    </div>
  ));

  

  React.useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <>
      
        <div className="py-4 d-flex align-items-center justify-content-center">
          <div className="dropzone rounded-circle shadow-sm">
            <div {...getRootProps({ className: 'dropzone-upload-wrapper' })}>
              <input {...getInputProps()} />
              <div className="dropzone-inner-wrapper d-100 rounded-circle dropzone-avatar">
                <div className="avatar-icon-wrapper d-100 rounded-circle m-2">
                  <Button
                    onClick={open}
                    className="avatar-button badge shadow-xxl btn-icon badge-position badge-position--bottom-right border-0 text-indent-0 d-30 badge-circle btn-success hover-scale-lg text-white">
                    <EditTwoToneIcon className="w-50" />
                  </Button>

                  <div>
                    {isDragAccept && (
                      <div className="rounded-circle overflow-hidden d-100 bg-success text-center font-weight-bold text-white d-flex justify-content-center align-items-center">
                        <CheckIcon className="d-30" />
                      </div>
                    )}
                    {isDragReject && (
                      <div className="rounded-circle overflow-hidden d-100 bg-danger text-center font-weight-bold text-white d-flex justify-content-center align-items-center">
                        <CloseTwoToneIcon className="d-40" />
                      </div>
                    )}
                    {!isDragActive && (
                      <div className="rounded-circle overflow-hidden d-100 bg-second text-center font-weight-bold text-white-50 d-flex justify-content-center align-items-center">
                        <AccountCircleTwoToneIcon className="d-30" />
                      </div>
                    )}
                  </div>

                  {thumbs.length > 0 && <div>{thumbs}</div>}
                </div>
              </div>
            </div>
          </div>
        </div>   
    </>
  );
}


export default function Profile() {

  const classes = useStyles();

  return (
    <>
      <Card className="card-box mb-spacing-6-x2">
        <CardContent>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <Avatar />
          </Grid>
            <Grid item xs={12} sm={6} md={6}>
            <ThemeProvider theme={TextfieldTheme} >
              <TextField
               defaultValue="Garrett"
                className={classes.TextFieldStyle}
                color="secondary"
                id="firstname"
                label="First Name"
                fullWidth
              />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
            <ThemeProvider theme={TextfieldTheme} >
              <TextField
              defaultValue="Winters"
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
                id="oldpwd"
                label="old Password"
                type="password"
                fullWidth
              />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <ThemeProvider theme={TextfieldTheme} >
              <TextField
                color="secondary"
                className={classes.TextFieldStyle}
                id="newpwd1"
                label="New Password"
                fullWidth
                type="password"
              />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <ThemeProvider theme={TextfieldTheme} >
              <TextField
                color="secondary"
                className={classes.TextFieldStyle}
                id="newpwd2"
                label="Repeat New Password"
                type="password"
                fullWidth
              />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
            <ThemeProvider theme={TextfieldTheme} >
              <TextField
              color="secondary"
                className={classes.TextFieldStyle}
                id="description"
                label="Notes"
                fullWidth
                multiline={true}
                rows={3}
              />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography align="right">
                <Button size="small" className="btn-neutral-primary btn-hover">
                  Save
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
