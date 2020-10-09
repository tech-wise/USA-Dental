import React, { Component } from 'react';
import { Card, Button, CardContent, Dialog } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MUIDataTable from 'mui-datatables';

import avatar1 from './../../../../assets//images/avatars/avatar1.jpg';

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
    label: 'ID',
    name: 'id'
  },
  {
    label: 'Employee',
    name: 'employee',
    options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <div className="d-flex align-items-center">
            <div className="avatar-icon-wrapper avatar-icon-sm mr-2">
              <div className="avatar-icon">
                <img alt="..." src={avatar1} />
              </div>
            </div>
            <div>{value}</div>
          </div>
        );
      }
    }
  },
  {
    label: 'Sellary',
    name: 'sellary'
  },
  {
    label: 'Bonus',
    name: 'bonus'
  },
  {
    label: 'Deduct',
    name: 'deduct'
  },
  {
    label: 'Total',
    name: 'total'
  },
  {
    label: 'Actions',
    name: 'actions',
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <>
            <DeletePay />
          </>
        );
      }
    }
  }
];

const data = [
  {
    sr: 1,
    id: 'HR-0001',
    employee:'Shanelle Wynn',
    sellary: '$11000.00',
    bonus: '$250.00',
    deduct: '$40.00',
    total: '$11210.00'
  },
  {
    sr: 2,
    id: 'FD-0002',
    employee:'Brody Dixon',
    sellary: '$10000.00',
    bonus: '$250.00',
    deduct: '$50.00',
    total: '$10200.00'
  },
  {
    sr: 3,
    id: 'FD-0003',
    employee:'Milton Ayala',
    sellary: '$8000.00',
    bonus: '$200.00',
    deduct: '$50.00',
    total: '$8200.00'
  },
  {
    sr: 4,
    id: 'DE-0004',
    employee:'Kane Gentry',
    sellary: '$8500.00',
    bonus: '$1000.00',
    deduct: '$50.00',
    total: '$8200.00'
  },
  {
    sr: 5,
    id: 'QA-0005',
    employee:'Sara Khan',
    sellary: '$8500.00',
    bonus: '$500.50',
    deduct: '$0.00',
    total: '$9000.50'
  }
];
// function AddExpenses() {
//   let history = useHistory();

//   function handleClick() {
//     history.push('/AddExpenses');
//   }

//   return (
//     <Button onClick={handleClick} size="small" className="btn-neutral-primary btn-hover">
//       <FontAwesomeIcon icon={['fas', 'plus-circle']} />
//       &nbsp; Add Expense
//     </Button>
//   );
// }
// function ViewExpense() {
//   let history = useHistory();

//   function handleClick() {
//     history.push('/ViewExpenses');
//   }

//   return (
//     <Button
//       onClick={handleClick}
//       className="btn-neutral-dark mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
//       <PageviewIcon />
//     </Button>
//   );
// }
// function EditExpense() {
//   let history = useHistory();
//   function handleClick() {
//     history.push('/EditExpenses');
//   }

//   return (
//     <Button onClick={handleClick} className="btn-neutral-first mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
//       <FontAwesomeIcon icon={['fas', 'edit']} className="font-size-sm" />
//     </Button>
//   );
// }
function DeletePay() {
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
class AccountsPayrole extends Component {
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
                Manage Expenses
              </h4>
            </div>
            {/* <div className="card-header--actions">
              <div>
                 
              </div>
            </div> */}
          </div>
          <CardContent>
            <MUIDataTable data={data} columns={columns} options={options} />
          </CardContent>
        </Card>
      </>
    );
  }
}

export default AccountsPayrole;
