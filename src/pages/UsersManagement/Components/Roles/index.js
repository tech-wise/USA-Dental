import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

function AddRole() {
  let history = useHistory();

  function handleClick() {
    history.push('AddNewRole');
  }

  return (
    <Button size="small" className="btn-neutral-primary" onClick={handleClick}>
      <span className="btn-wrapper--icon">
        <FontAwesomeIcon icon={['fas', 'plus-circle']} />
      </span>
      <span className="btn-wrapper--label">Add Role</span>
    </Button>
  );
}
function EditRole() {
  let history = useHistory();

  function handleClick() {
    history.push('EditRole');
  }

  return (
    <Button
      onClick={handleClick}
      className="btn-neutral-first mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
      <FontAwesomeIcon icon={['far', 'edit']} className="font-size-sm" />
    </Button>
  );
}

export default function Roles() {
  const [open, setOpen] = React.useState(false);
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
        label: 'Short Code',
        field: 'code',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name'
        }
      },
      {
        label: 'Role',
        field: 'role',
        width: 100
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
        code: 'BODM',
        role: 'Back office delivery manager',
        status: (
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-small toggle-switch-line toggle-switch-info"
          />
        ),
        action: (
          <>
            <EditRole />
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
        code: 'ACM',
        role: 'Accounting manager',
        status: (
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-small toggle-switch-line toggle-switch-info"
          />
        ),
        action: (
          <>
            <EditRole />
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
        code: 'SCM',
        role: 'Scheduling Manager',
        status: (
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-small toggle-switch-line toggle-switch-info"
          />
        ),
        action: (
          <>
            <EditRole />
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
        code: 'BIM',
        role: 'Billing Manager',
        status: (
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-small toggle-switch-line toggle-switch-info"
          />
        ),
        action: (
          <>
            <EditRole />
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
        code: 'INM',
        role: 'Inventory Manager',
        status: (
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-small toggle-switch-line toggle-switch-info"
          />
        ),
        action: (
          <>
            <EditRole />
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
        code: 'QCM',
        role: 'QC Manager',
        status: (
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-small toggle-switch-line toggle-switch-info"
          />
        ),
        action: (
          <>
            <EditRole />
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
        code: 'QAM',
        role: 'QA Manager',
        status: (
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-small toggle-switch-line toggle-switch-info"
          />
        ),
        action: (
          <>
            <EditRole />
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
            <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
              Manage Roles
            </h4>
          </div>

          <div className="card-header--actions">
            <div>
              <AddRole />
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
    </>
  );
}
