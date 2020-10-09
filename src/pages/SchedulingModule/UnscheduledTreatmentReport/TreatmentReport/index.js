import React, { Component } from 'react';
import { Card, Button, CardContent, Dialog } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import PageviewIcon from '@material-ui/icons/Pageview';
import MUIDataTable from 'mui-datatables';

function AddReport() {
  let history = useHistory();

  function handleClick() {
    history.push('/AddTreatmentReport');
  }

  return (
    <Button onClick={handleClick} size="small" className="btn-neutral-primary btn-hover">
      <FontAwesomeIcon icon={['fas', 'plus-circle']} />
      &nbsp; Treatment Report
    </Button>
  );
}
function ViewSchedule() {
  let history = useHistory();

  function handleClick() {
    history.push('/ViewTreatmentReport');
  }

  return (
    <Button
      onClick={handleClick}
      className="btn-neutral-dark mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
      <PageviewIcon />
    </Button>
  );
}
 
function DeleteSchedule() {
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
const columns = [
  {
    label: 'Sr',
    name: 'sr'
  },
  {
    label: 'Patient',
    name: 'patient'
  },
  {
    label: 'Service',
    name: 'service'
  },
  {
    label: 'Treatment',
    name: 'treatment'
  },
  {
    label: 'Provider',
    name: 'provider'
  },
  {
    label: 'Status',
    name: 'status',
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        if(value===1)
        return (
          <div className="badge badge-success badge-pill mx-1">Done</div>
          );
        else
        return (
          <div className="badge badge-danger badge-pill mx-1">Pending</div>
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
            <ViewSchedule />  
            <DeleteSchedule />
          </>
        );
      }
    }
  }
];

const data = [
  {
    sr: 1,
    patient:'Mr John',
    service: '12/25/18',
    treatment:'11:00 PM',
    provider:'Dr. Vajahat Yar Khan',
    status:1
  },
  {
    sr: 2,
    patient:'Orya Otyler',
    service: '12/25/18',
    treatment:'08:00 PM',
    provider:'Dr. Vajahat Yar Khan',
    status:1
  },
  {
    sr: 3,
    patient:'Laura Leon Messa',
    service: '12/25/18',
    treatment:'09:00 PM',
    provider:'Dr. Vajahat Yar Khan',
    status:1
  },
  {
    sr: 4,
    patient:'Beder Mejia',
    service: '12/25/18',
    treatment:'10:00 PM',
    provider:'Dr. Vajahat Yar Khan',
    status:1
  },
  {
    sr: 5,
    patient:'Rickey Patin',
    service: '12/25/18',
    treatment:'12:00 PM',
    provider:'Dr. Vajahat Yar Khan',
    status:1
  }
];

class TreatmentReport extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Card className="card-box mb-spacing-6-x2">
          <div className="card-header">
            <div className="card-header--title">
              <h4 className="font-size-lg mb-0 py-2 font-weight-bold color-pb">
                Unscheduled Treatment Reports
              </h4>
            </div>
            <div className="card-header--actions">
              <div>
                <AddReport />
              </div>
            </div>
          </div>
          <CardContent>
               <MUIDataTable data={data} columns={columns} options={options} />
          </CardContent>
        </Card>
      </>
    );
  }
}

export default TreatmentReport;
