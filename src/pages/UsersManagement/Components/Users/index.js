import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserDetailModal from '../UserDetailModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageviewIcon from '@material-ui/icons/Pageview';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Switch
} from '@material-ui/core';
import { MDBDataTable } from 'mdbreact';

const SwitchTheme = createMuiTheme({
  palette: {
    secondary: {
      main: "#21BFD9",
    },
  },
});


function AddUser() {
  let history = useHistory();

  function handleClick() {
    history.push('AddNewUser');
  }

  return (
    <Button size="small" className="btn-neutral-primary btn-hover" onClick={handleClick}>
      <span className="btn-wrapper--icon">
        <FontAwesomeIcon icon={['fas', 'plus-circle']} />
      </span>
      <span className="btn-wrapper--label">Add User</span>
    </Button>
  );
}
function EditUser() {
  let history = useHistory();

  function handleClick() {
    history.push('EditUser');
  }

  return (
    <Button
      onClick={handleClick}
      className="btn-neutral-first mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
      <FontAwesomeIcon icon={['far', 'edit']} className="font-size-sm" />
    </Button>
  );
}

export default function AddNewUser() {
  const [open, setOpen] = React.useState(false);
  const [viewOpen, setviewOpen] = React.useState(false);
  const [checked, setChecked] = useState();

  const toggle = () => {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleViewOpen = () => {
    setviewOpen(true);
  };
  const handleviewClose = () => {
    setviewOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [datatable] = React.useState({
    columns: [
      {
        label: 'Id',
        field: 'id',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Name',
        field: 'name',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name'
        }
      },
      {
        label: 'Role',
        field: 'rolecode',
        width: 100
      },
      {
        label: 'Email',
        field: 'email',
        width: 200
      },
      {
        label: 'Status',
        field: 'status',
        sort: 'disabled',
        width: 270
      },
      {
        label: 'Actions',
        field: 'action',
        sort: 'disabled',
        width: 100
      }
    ],
    rows: [
      {
        id: 1,
        name: 'Sam Architect',
        rolecode: 'ACM',
        email: 'edinburgh@gmail.com',
        status: (
          <ThemeProvider theme={SwitchTheme}>
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-small"
          />
          </ThemeProvider>
        ),
        action: (
          <>
            <Button
              onClick={handleViewOpen}
              className="btn-neutral-dark mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
              <PageviewIcon />
            </Button>
            <EditUser />
            <Button
              onClick={handleClickOpen}
              className="btn-neutral-danger mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
              <FontAwesomeIcon
                icon={['fas', 'times']}
                className="font-size-sm"
              />
            </Button>
          </>
        )
      },
      {
        id: 2,
        name: 'Garrett Winters',
        rolecode: 'WEBD',
        email: 'garrett@gmail.com',
        status: (
          <ThemeProvider theme={SwitchTheme}>
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-small"
          />
          </ThemeProvider>
        ),
        action: (
          <>
          <Button
              onClick={handleViewOpen}
              className="btn-neutral-dark mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
              <PageviewIcon />
            </Button>
            <EditUser />
            <Button
              onClick={handleClickOpen}
              className="btn-neutral-danger mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
              <FontAwesomeIcon
                icon={['fas', 'times']}
                className="font-size-sm"
              />
            </Button>
          </>
        )
      },
      {
        id: 3,
        name: 'Ashton Cox',
        rolecode: 'Admin',
        email: 'ashton@gmail.com',
        status: (
          <ThemeProvider theme={SwitchTheme}>
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-small"
          />
          </ThemeProvider>
        ),
        action: (
          <>
          <Button
              onClick={handleViewOpen}
              className="btn-neutral-dark mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
              <PageviewIcon />
            </Button>
            <EditUser />
            <Button
              onClick={handleClickOpen}
              className="btn-neutral-danger mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
              <FontAwesomeIcon
                icon={['fas', 'times']}
                className="font-size-sm"
              />
            </Button>
          </>
        )
      },
      {
        id: 4,
        name: 'Cedric Kelly',
        rolecode: 'WEBD',
        email: 'cedric@gmail.com',
        status: (
          <ThemeProvider theme={SwitchTheme}>
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-small"
          />
          </ThemeProvider>
        ),
        action: (
          <>
          <Button
              onClick={handleViewOpen}
              className="btn-neutral-dark mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
              <PageviewIcon />
            </Button>
            <EditUser />
            <Button
              onClick={handleClickOpen}
              className="btn-neutral-danger mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
              <FontAwesomeIcon
                icon={['fas', 'times']}
                className="font-size-sm"
              />
            </Button>
          </>
        )
      },
      {
        id: 5,
        name: 'Airi Satou',
        rolecode: 'ACM',
        email: 'airi@gmail.com',
        status: (
          <ThemeProvider theme={SwitchTheme}>
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-small"
          />
          </ThemeProvider>
        ),
        action: (
          <>
          <Button
              onClick={handleViewOpen}
              className="btn-neutral-dark mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
              <PageviewIcon />
            </Button>
            <EditUser />
            <Button
              onClick={handleClickOpen}
              className="btn-neutral-danger mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
              <FontAwesomeIcon
                icon={['fas', 'times']}
                className="font-size-sm"
              />
            </Button>
          </>
        )
      },
      {
        id: 6,
        name: 'Brielle Williamson',
        rolecode: 'QCM',
        email: 'brielle@gmail.com',
        status: (
          <ThemeProvider theme={SwitchTheme}>
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-small"
          />
          </ThemeProvider>
        ),
        action: (
          <>
          <Button
              onClick={handleViewOpen}
              className="btn-neutral-dark mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
              <PageviewIcon />
            </Button>
            <EditUser />
            <Button
              onClick={handleClickOpen}
              className="btn-neutral-danger mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
              <FontAwesomeIcon
                icon={['fas', 'times']}
                className="font-size-sm"
              />
            </Button>
          </>
        )
      },
      {
        id: 7,
        name: 'Herrod Chandler',
        rolecode: 'ABC',
        email: 'herrod@gmail.com',
        status: (
          <ThemeProvider theme={SwitchTheme}>
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-small"
          />
          </ThemeProvider>
        ),
        action: (
          <>
          <Button
              onClick={handleViewOpen}
              className="btn-neutral-dark mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
              <PageviewIcon />
            </Button>
            <EditUser />
            <Button
              onClick={handleClickOpen}
              className="btn-neutral-danger mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
              <FontAwesomeIcon
                icon={['fas', 'times']}
                className="font-size-sm"
              />
            </Button>
          </>
        )
      },
      {
        id: 8,
        name: 'Rhona Davidson',
        rolecode: 'ADMIN',
        email: 'rhona@gmail.com',
        status: (
          <ThemeProvider theme={SwitchTheme}>
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-small"
          />
          </ThemeProvider>
        ),
        action: (
          <>
          <Button
              onClick={handleViewOpen}
              className="btn-neutral-dark mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
              <PageviewIcon />
            </Button>
            <EditUser />
            <Button
              onClick={handleClickOpen}
              className="btn-neutral-danger mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
              <FontAwesomeIcon
                icon={['fas', 'times']}
                className="font-size-sm"
              />
            </Button>
          </>
        )
      }
    ]
  });

  return (
    <>
      <Card className="card-box mb-spacing-6-x2">
        <div className="card-header">
          <div className="card-header--title">
            <h4 className="font-size-lg mb-0 py-2 font-weight-bold color-pb">
              Manage Users
            </h4>
          </div>

          <div className="card-header--actions">
            <div>
              <AddUser />
            </div>
          </div>
        </div>
        <CardContent className="px-0 pt-2 pb-3">
          <Grid container>
            <Grid item xs={12} sm={12} md={12} style={{ padding: '10px' }}>
             
              <MDBDataTable
                theadColor="transparent"
                entriesOptions={[5, 20, 25]}
                entries={5}
                pagesAmount={4}
                data={datatable}
                materialSearch
                noBottomColumns
                responsive
                order={['id', 'asc']}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {/* Dialoge */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          {'Are you sure you want to delete this Record?'}
        </DialogTitle>
        <DialogActions>
          <Button
            variant="contained"
            className="btn-pill m-2 btn-warning"
            onClick={handleClose}>
            Agree
          </Button>
          <Button
            variant="contained"
            className="btn-pill m-2 btn-danger"
            onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      {/* view user Data */}
      <Dialog
      scroll="body"
      maxWidth="md"
        open={viewOpen}
        onClose={handleviewClose}
        classes={{
          paper: 'modal-content border-0 bg-white rounded-lg p-3 p-xl-0'
        }}
        >
       <UserDetailModal handleviewClose={handleviewClose}/>
      </Dialog>
    </>
  );
}
