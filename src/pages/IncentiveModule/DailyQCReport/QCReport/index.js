import React, { Component } from 'react';
import {
  Card,
  CardContent,
  Button,
  Dialog 
} from '@material-ui/core';
import Trend from 'react-trend';
import { useHistory } from 'react-router-dom';
import PageviewIcon from '@material-ui/icons/Pageview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MUIDataTable from 'mui-datatables';

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
    label: 'Employee',
    name: 'employee',
    options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <div>
            <a
              href="#/"
              onClick={(e) => e.preventDefault()}
              className="font-weight-bold text-black"
              title="...">
              {value}
            </a>
          </div>
        );
      }
    }
  },
  {
    label: 'Performance',
    name: 'performance',
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        if (value === 1)
          return (
            <div className="badge badge-success badge-pill mx-1">Excellent</div>
          );
        else if (value === 2)
          return <div className="badge badge-info badge-pill mx-1">Good</div>;
        else if (value === 3)
          return (
            <div className="badge badge-warning badge-pill mx-1">Average</div>
          );
        else if (value === 4)
          return (
            <div className="badge badge-success badge-pill mx-1">Excellent</div>
          );
        else
          return <div className="badge badge-danger badge-pill mx-1">Poor</div>;
      }
    }
  },
  {
    label: 'Extra Hour',
    name: 'hour'
  },
  {
    label: 'Extra Activity ',
    name: 'activity'
  },
  {
    label: 'Bonus ',
    name: 'bonus'
  },
  {
    label: 'Trend ',
    name: 'trend'
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
            <ViewReport />
            <EditReport />
            <DeleteReport />
          </>
        );
      }
    }
  }
];

const data = [
  {
    sr: 1,
    employee: 'Steven Aria',
    performance: 1,
    hour: '1',
    activity: 'No',
    bonus: '$25',
    trend:<Trends />
  },
  {
    sr: 2,
    employee: 'Steven Aria',
    performance: 2,
    hour: '0.5',
    activity: 'Deal Patient',
    bonus: '$15',
    trend:<Trends />
  },
  {
    sr: 3,
    employee: 'Alex Martinez',
    performance: 3,
    hour: '0',
    activity: 'Primary Care',
    bonus: '$0',
    trend:<Trends />
  },
  {
    sr: 4,
    employee: 'Laura Leon Mesa',
    performance: 4,
    hour: '2',
    activity: 'No',
    bonus: '$50',
    trend:<Trends />
  },
  {
    sr: 5,
    employee: 'Melody Vigil',
    performance: 0,
    hour: '0',
    activity: 'No',
    bonus: '$0',
    trend:<Trends />
  }
];
function Trends(){
  return(
    <Trend
          style={{width:"150px",margin:"0px"}}
          data={[0, 10, 5, 22, 3.6, 11]}
          autoDraw
          autoDrawDuration={3000}
          autoDrawEasing="ease-in"
          radius={15}
          smooth
          stroke="var(--danger)"
          strokeLinecap="round"
          strokeWidth={5}
        />
  );
}

function ViewReport() {
  let history = useHistory();

  function handleClick() {
    history.push('/ViewIncentiveReport');
  }

  return (
    <Button
      onClick={handleClick}
      className="btn-neutral-dark mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
      <PageviewIcon />
    </Button>
  );
}
function AddReport() {
  let history = useHistory();

  function handleClick() {
    history.push('/AddQCReport');
  }

  return (
    <Button onClick={handleClick} size="small" className="btn-neutral-primary btn-hover">
      <FontAwesomeIcon icon={['fas', 'plus-circle']} />
      &nbsp; Add Report
    </Button>
  );
}
function EditReport() {
  let history = useHistory();
  function handleClick() {
    history.push('/EditQCReport');
  }

  return (
    <Button onClick={handleClick} className="btn-neutral-first mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
      <FontAwesomeIcon icon={['fas', 'edit']} className="font-size-sm" />
    </Button>
  );
}
function DeleteReport() {
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

class QCReport extends Component {
  state = { date: '2014-08-18T21:11:54' };
  handleDateChange = (date) => {
    this.setState({ date });
  };

  render() {
    return (
      <>
        <Card className="card-box mb-spacing-6-x2">
          <div className="card-header">
            <div className="card-header--title">
              <h4 className="font-size-lg mb-0 py-2 font-weight-bold color-pb">
                QC Tool
              </h4>
            </div>
            <div className="card-header--actions">
              <div>
                <AddReport />
              </div>
            </div>
          </div>
          <CardContent className="pt-2 px-4 pb-4">
            <MUIDataTable data={data} columns={columns} options={options} />
          </CardContent>
        </Card>
      </>
    );
  }
}

export default QCReport;
