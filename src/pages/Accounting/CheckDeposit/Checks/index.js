import React, { Component } from 'react';
import { Card, Button, CardContent, Dialog } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import PageviewIcon from '@material-ui/icons/Pageview';
import MUIDataTable from 'mui-datatables';


const options = {
  filterType: 'dropdown',
  selectableRows: false,
  rowsPerPage: 5,
  rowsPerPageOptions: [5, 10, 50]
};
const columns=[
  {
    label:'Sr',
    name:'sr'
  },
  {
    label:'Check ID',
    name:'id'
  },
  {
    label:'Date',
    name:'date'
  },
  {
    label:'Bank Name',
    name:'bank'
  },
  {
    label:'Amount',
    name:'amount'
  },
  {
    label:'Check',
    name:'check'
  },
  {
    label:'Actions',
    name:'actions',
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <>
            <ViewCheck />
            <EditCheck />  
            <DeleteCheck />
          </>
        );
      }
    }
  }
];

const data=[
  {
    sr: 1,
    id:'US-15485633',
    date: '09/24/2020',
    bank:'US Bank',
    amount:'$700.00',
    check:'AB125632.pdf'
   },
   {
    sr: 2,
    id:'UBL-13764810',
    date: '09/24/2020',
    bank:'UBL Bank',
    amount:'$700.00',
    check:'UA135632.pdf'
   },
   {
    sr: 3,
    id:'UBL-15485633',
    date: '09/24/2020',
    bank:'UBL Bank',
    amount:'$770.00',
    check:'UB125632.pdf'
   },
   {
    sr: 4,
    id:'HBL-13485631',
    date: '09/24/2020',
    bank:'HBL Bank',
    amount:'$1200.00',
    check:'AC125632.pdf'
   },
   {
    sr: 5,
    id:'US-26485631',
    date: '09/24/2020',
    bank:'US Bank',
    amount:'$1178.50',
    check:'UB115631.pd'
   }
];

function AddCheck() {
  let history = useHistory();

  function handleClick() {
    history.push('/AddAccountCheck');
  }

  return (
    <Button onClick={handleClick} size="small" className="btn-neutral-primary btn-hover">
      <FontAwesomeIcon icon={['fas', 'plus-circle']} />
      &nbsp; Add Check
    </Button>
  );
}
function EditCheck() {
  let history = useHistory();
  function handleClick() {
    history.push('/EditAccountCheck');
  }

  return (
    <Button onClick={handleClick} className="btn-neutral-first mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
      <FontAwesomeIcon icon={['fas', 'edit']} className="font-size-sm" />
    </Button>
  );
}
function ViewCheck() {
  let history = useHistory();
  function handleClick() {
    history.push('/ViewAccountCheck');
  }

  return (
    <Button onClick={handleClick} className="btn-neutral-dark mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
      <PageviewIcon />
    </Button>
  );
}


function DeleteCheck() {
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
class AccountChecks extends Component {
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
                Check Deposit
              </h4>
            </div>
            <div className="card-header--actions">
              <div>
                <AddCheck />
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

export default AccountChecks;
