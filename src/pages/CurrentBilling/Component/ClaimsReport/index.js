import React from 'react';
import PageviewIcon from '@material-ui/icons/Pageview';
import FlagIcon from '@material-ui/icons/Flag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import MUIDataTable from 'mui-datatables';
import {
  Grid,
  Card,
  CardContent,
  Button,
  Dialog
} from '@material-ui/core';

function ViewClaim() {
  let history = useHistory();
  function handleClick() {
    history.push('/ViewClaimReport');
  }

  return (
    <Button onClick={handleClick}  className="btn-neutral-dark mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
      <PageviewIcon />
    </Button>
  );
}
 function EditClaim() {
  // let history = useHistory();
  // function handleClick() {
  //   history.push('/EditUser');
  // }

  return (
    <Button   className="btn-neutral-first mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
      <FontAwesomeIcon icon={['fas', 'edit']} className="font-size-sm" />
    </Button>
  );
}
function DeleteClaim() {
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

export default function ClaimsReport() {
  
  const options = {
    filterType: 'dropdown',
    selectableRows: false,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 50]
  };

   const columns= [
      {
        label: 'Sr',
        name: 'sr',
      },
      {
        label: 'Date',
        name: 'date',
      },
      {
        label: 'Patient',
        name: 'patient',
      },
      {
        label: 'Insurance',
        name: 'insurance',
      },
      {
        label: 'Procedure',
        name: 'proc',
      },
      {
        label: 'Status',
        name: 'status',
        options:{
        filter: false,
        sort: false
        }
      },
      {
        label: 'Fee',
        name: 'fee',
      },
      {
        label: 'Action',
        name: 'action',
        options:{
          filter:false,
          sort:false,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <>
              <ViewClaim />
              <EditClaim />
              <DeleteClaim />
              </>
            );
          }
        }
         
      }
    ];
   const data= [
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
         
      }
    ];

  return (
    <>
      <Card className="card-box mb-spacing-6-x2">
        <div className="card-header">
          <div className="card-header--title">
            <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
              Claims Not Sent Reports
            </h4>
          </div>

          {/* <div className="card-header--actions">
            <div>
              You can add text or button here !
            </div>
          </div>*/}
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
