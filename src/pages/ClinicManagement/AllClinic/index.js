import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import PageviewIcon from '@material-ui/icons/Pageview';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
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
      main: '#21BFD9'
    }
  }
});

function AddClinic() {
  let history = useHistory();

  function handleClick() {
    history.push('AddNewClinic');
  }

  return (
    <Button
      size="small"
      className="btn-neutral-primary btn-hover"
      onClick={handleClick}>
      <span className="btn-wrapper--icon">
        <FontAwesomeIcon icon={['fas', 'plus-circle']} />
      </span>
      <span className="btn-wrapper--label">Add Clinic</span>
    </Button>
  );
}
// function ViewClinic() {
//   let history = useHistory();

//   function handleClick() {
//     history.push('ViewClinic');
//   }

//   return (
//     <Button
//       onClick={handleClick}
//       className="btn-neutral-dark mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
//       <PageviewIcon />
//     </Button>
//   );
// }
function EditClinic() {
  let history = useHistory();

  function handleClick() {
    history.push('EditClinic');
  }

  return (
    <Button
      onClick={handleClick}
      className="btn-neutral-first mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
      <FontAwesomeIcon icon={['far', 'edit']} className="font-size-sm" />
    </Button>
  );
}
function DeleteClinic() {
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
    label: 'Clinic ID',
    name: 'id'
  },
  {
    label: 'Clinic Name',
    name: 'name'
  },
  {
    label: 'Contact No',
    name: 'contact'
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
              <Switch defaultChecked className="switch-small" />
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
            <EditClinic />
            <DeleteClinic />
          </>
        );
      }
    }
  }
];

const data = [
  {
    sr: 1,
    id: 'USADENTAL-1',
    name: 'Urgent care services',
    contact: '+125463325',
  },
  {
    sr: 2,
    id: 'USADENTAL-2',
    name: 'Mental health services',
    contact: '+125463325',
  },
  {
    sr: 3,
    id: 'USADENTAL-3',
    name: 'Dental Service',
    contact: '+125463325',
  },
  {
    sr: 4,
    id: 'USADENTAL-4',
    name: 'Laboratory Service',
    contact: '+125463325',
  },
];
class AllClinics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };
  }
  toggle = () => {
    if (this.state.checked) {
      this.setState({ checked: false });
    } else {
      this.setState({ checked: true });
    }
  };
  render() {
    return (
      <>
        <Card className="card-box mb-spacing-6-x2">
          <div className="card-header">
            <div className="card-header--title">
              <h4 className="font-size-lg mb-0 py-2 font-weight-bold color-pb">
                Manage Clinics
              </h4>
            </div>

            <div className="card-header--actions">
              <div>
                <AddClinic />
              </div>
            </div>
          </div>
          <CardContent className="px-0 pt-2 pb-3">
            <Grid container>
              <Grid item xs={12} sm={12} md={12} style={{ padding: '10px' }}>
                <MUIDataTable data={data} columns={columns} options={options} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </>
    );
  }
}

export default AllClinics;
