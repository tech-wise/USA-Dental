import React from 'react';
import PageviewIcon from '@material-ui/icons/Pageview';
import FlagIcon from '@material-ui/icons/Flag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography
} from '@material-ui/core';

import { MDBDataTable } from 'mdbreact';
function Action() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={handleClickOpen} className="btn-neutral-dark mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
        <PageviewIcon />
      </Button>
      <Button onClick={handleClickOpen} className="btn-neutral-first mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
        <FontAwesomeIcon icon={['far', 'edit']} className="font-size-sm" />
      </Button>
      <Button
        onClick={handleClickOpen}
        className="btn-neutral-danger mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
        <FontAwesomeIcon icon={['fas', 'times']} className="font-size-sm" />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          {'Claim not sent Report'}
        </DialogTitle>
        <DialogContent>
          <Typography>Under Construction</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="secondary"
            style={{ width: '50px', height: '30px' }}
            onClick={ handleClose }>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default function ClaimsReport() {
  const [datatable] = React.useState({
    columns: [
      {
        label: 'Sr',
        field: 'sr',
        width: 80
      },
      {
        label: 'Date',
        field: 'date',
        width: 150
      },
      {
        label: 'Patient',
        field: 'patient',
        width: 100
      },
      {
        label: 'Insurance',
        field: 'insurance',
        width: 200
      },
      {
        label: 'Procedure',
        field: 'proc',
        width: 100
      },
      {
        label: 'Status',
        field: 'status',
        sort: 'disabled',
        width: 100
      },
      {
        label: 'Fee',
        field: 'fee',
        width: 100
      },
      {
        label: 'Action',
        field: 'action',
        sort: 'disabled',
        width: 100
      }
    ],
    rows: [
      {
        sr: 1,
        date: '4/7/2020',
        status: (
          <>
            <FlagIcon color="error" /> Unsent
          </>
        ),
        patient: 'Rose Payton',
        insurance: 'Empire Ins',
        fee: '$40.00',
        proc: 'D112',
        action: <Action />
      },
      {
        sr: 2,
        date: '6/7/2020',
        status: (
          <>
            <FlagIcon color="error" /> Unsent
          </>
        ),
        patient: 'Rose Taylor',
        insurance: 'Empire Ins',
        fee: '$60.50',
        proc: 'D113',
        action: <Action />
      },
      {
        sr: 3,
        date: '10/7/2020',
        status: (
          <>
            <FlagIcon color="error" /> Unsent
          </>
        ),
        patient: 'Blooth Ela',
        insurance: 'Health Ins',
        fee: '$70.00',
        proc: 'D114',
        action: <Action />
      },
      {
        sr: 4,
        date: '15/7/2020',
        status: (
          <>
            <FlagIcon color="error" /> Unsent
          </>
        ),
        patient: 'Danial Den',
        insurance: 'Empire Ins',
        fee: '$20.00',
        proc: 'D116',
        action: <Action />
      },
      {
        sr: 5,
        date: '17/7/2020',
        status: (
          <>
            <FlagIcon color="error" /> Unsent
          </>
        ),
        patient: 'Mr Smith',
        insurance: 'Health Ins',
        fee: '$90.00',
        proc: 'D116',
        action: <Action />
      },
      {
        sr: 6,
        date: '25/7/2020',
        status: (
          <>
            <FlagIcon color="error" /> Unsent
          </>
        ),
        patient: 'Json Smith',
        insurance: 'Dental Ins',
        fee: '$110.00',
        proc: 'D118',
        action: <Action />
      },
      {
        sr: 7,
        date: '25/7/2020',
        status: (
          <>
            <FlagIcon color="error" /> Unsent
          </>
        ),
        patient: 'Rose Riley',
        insurance: 'Dental Ins',
        fee: '$28.00',
        proc: 'D122',
        action: <Action />
      },
      {
        sr: 8,
        date: '1/8/2020',
        status: (
          <>
            <FlagIcon color="error" /> Unsent
          </>
        ),
        patient: 'Ariadne Jayana',
        insurance: 'Health Ins',
        fee: '$220.00',
        proc: 'D102',
        action: <Action />
      }
    ]
  });

  return (
    <>
      <Card className="card-box mb-spacing-6-x2">
        <div className="card-header">
          <div className="card-header--title">
            <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
              Claims Not Sent Reports
            </h4>
          </div>

          <div className="card-header--actions">
            <div>{/* for button  */}</div>
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
                order={['sr', 'asc']}
                 
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {/* Dialoge */}
    </>
  );
}
