import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MUIDataTable from 'mui-datatables';

import {
  Grid,
  Card,
  CardContent,
  Button,
  Dialog,
  Switch
} from '@material-ui/core';
const SwitchTheme = createMuiTheme({
  palette: {
    secondary: {
      main: "#21BFD9",
    },
  },
});
function AddModule() {
  let history = useHistory();

  function handleClick() {
    history.push('AddNewModule');
  }

  return (
    <Button size="small" className="btn-neutral-primary btn-hover" onClick={handleClick}>
      <span className="btn-wrapper--icon">
        <FontAwesomeIcon icon={['fas', 'plus-circle']} />
      </span>
      <span className="btn-wrapper--label ">Add Module</span>
    </Button>
  );
}
function EditModule() {
  let history = useHistory();

  function handleClick() {
    history.push('EditModule');
  }

  return (
    <Button
      onClick={handleClick}
      className="btn-neutral-first mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
      <FontAwesomeIcon icon={['far', 'edit']} className="font-size-sm" />
    </Button>
  );
}
function DeleteModule() {
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
export default function AddNewUser() {
   const [checked, setChecked] = useState();

  const toggle = () => {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

   
  
  const options = {
    filterType: 'dropdown',
    selectableRows: false,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 50]
  };

  const columns= [
      {
        label: 'Id',
        name: 'id',
         
      },
      {
        label: 'Short Code',
        name: 'code',
      },
      {
        label: 'Module',
        name: 'module',
       },
      {
        label: 'Slug',
        name: 'slug',
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
        name: "Actions",
        options: {
          filter: false,
          sort: false,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <>
              <EditModule />
              <DeleteModule />
              </>
            );
          }
      }
    }
    ];
   const data= [
      {
        id: 1,
        code: 'MCUB',
        module: 'Current Billing',
        slug: 'ABC',
      },
      {
        id: 2,
        code: 'MOFM',
        module: 'Office Management',
        slug: 'ABC',
      },
      {
        id: 3,
        code: 'MARM',
        module: 'AR Management',
        slug: 'ABC',
      },
      {
        id: 4,
        code: 'MSCM',
        module: 'Scheduling Module',
        slug: 'ABC',
      },
      {
        id: 5,
        code: 'MINM',
        module: 'Incentive Module',
        slug: 'ABC',
      }
    ];

  return (
    <>
      <Card className="card-box mb-spacing-6-x2">
        <div className="card-header">
          <div className="card-header--title">
            <h4 className="font-size-lg mb-0 py-2 font-weight-bold color-pb">
              Manage Modules
            </h4>
          </div>

          <div className="card-header--actions">
            <div>
              <AddModule />
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
