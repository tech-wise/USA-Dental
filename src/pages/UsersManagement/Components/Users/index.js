import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageviewIcon from '@material-ui/icons/Pageview';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import MUIDataTable from 'mui-datatables';
 
import {
  Grid,
  Card,
  CardContent,
  Button,
  Dialog,
   
  Switch,
  
} from '@material-ui/core';

const SwitchTheme = createMuiTheme({
  palette: {
    secondary: {
      main: '#21BFD9'
    }
  }
});

 
 
// const useStyles = withStyles({
//   root: {
//       borderRadius: "100px",
//       boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75);"
//    }
// });
function AddUser() {
  let history = useHistory();

  function handleClick() {
    history.push('AddNewUser');
  }

  return (
    <Button
      size="small"
      className="btn-neutral-primary btn-hover"
      onClick={handleClick}>
      <span className="btn-wrapper--icon">
        <FontAwesomeIcon icon={['fas', 'plus-circle']} />
      </span>
      <span className="btn-wrapper--label">Add User</span>
    </Button>
  );
}
function ViewUser() {
  let history = useHistory();

  function handleClick() {
    history.push('ViewUser');
  }

  return (
    <Button
      onClick={handleClick}
      className="btn-neutral-dark mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
      <PageviewIcon />
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
function DeleteUser() {
  const [deletemodal, setDeletemodal] = React.useState(false);
  const DeleteClaim = () => setDeletemodal(!deletemodal);

  return (
    <>
      <Button
        onClick={DeleteClaim}
        className="btn-neutral-danger mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
        <FontAwesomeIcon icon={['fas', 'trash']} className="font-size-sm" />
      </Button>
      <Dialog
        open={deletemodal}
        onClose={DeleteClaim}
        classes={{ paper: 'shadow-lg rounded' }}>
        <div className="text-center p-5">
          <div className="avatar-icon-wrapper rounded-circle m-0">
            <div className="d-inline-flex justify-content-center p-0 rounded-circle btn-icon avatar-icon-wrapper bg-neutral-danger text-danger m-0 d-130">
              <FontAwesomeIcon
                icon={['fas', 'times']}
                className="d-flex align-self-center display-3"
              />
            </div>
          </div>
          <h4 className="font-weight-bold mt-4">
            Are you sure you want to delete this entry?
          </h4>
          <p className="mb-0 font-size-lg text-muted">
            You cannot undo this operation.
          </p>
          <div className="pt-4">
            <Button
              onClick={DeleteClaim}
              className="btn-neutral-secondary btn-pill mx-1">
              <span className="btn-wrapper--label">Cancel</span>
            </Button>
            <Button onClick={DeleteClaim} className="btn-danger btn-pill mx-1">
              <span className="btn-wrapper--label">Delete</span>
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
const options = {
  filterType: 'dropdown',
  selectableRows: false,
  rowsPerPage: 5,
  rowsPerPageOptions: [5, 10, 50]
};

export default function AddNewUser() {
  // const {classes} = useStyles();
   const [checked, setChecked] = useState();

  const toggle = () => {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };
   

  const columns = [
    {
      label: 'Id',
      name: 'id'
    },
    {
      label: 'Name',
      name: 'name'
    },
    {
      label: 'Role',
      name: 'rolecode'
    },
    {
      label: 'Email',
      name: 'email'
    },
    {
      label: 'Status',
      name: 'status',
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
            <ThemeProvider theme={SwitchTheme}>
        <Switch
          checked={checked}
          onClick={toggle}
          className="switch-small"
        />
        </ThemeProvider>
            </>
          );
        }
      }
    },
    {
      label: 'Actions',
      name: 'action',
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
            <ViewUser />
            <EditUser />
            <DeleteUser />
            </>
          );
        }
      }
    }
  ];

  const data = [
    {
      id: 2,
      name: 'Garrett Winters',
      rolecode: 'WEBD',
      email: 'garrett@gmail.com',
    },
    {
      id: 3,
      name: 'Ashton Cox',
      rolecode: 'Admin',
      email: 'ashton@gmail.com',
    },
    {
      id: 4,
      name: 'Cedric Kelly',
      rolecode: 'WEBD',
      email: 'cedric@gmail.com',
    },
    {
      id: 5,
      name: 'Airi Satou',
      rolecode: 'ACM',
      email: 'airi@gmail.com',
    },
    {
      id: 6,
      name: 'Brielle Williamson',
      rolecode: 'QCM',
      email: 'brielle@gmail.com',
    },
    {
      id: 7,
      name: 'Herrod Chandler',
      rolecode: 'ABC',
      email: 'herrod@gmail.com',
    },
    {
      id: 8,
      name: 'Rhona Davidson',
      rolecode: 'ADMIN',
      email: 'rhona@gmail.com',
    }
  ];
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
             
                 <MUIDataTable
                  data={data}
                  columns={columns}
                  options={options}
                   
                />
             
             </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
