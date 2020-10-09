import React, { Component } from 'react';
import { Card, Button, CardContent, Dialog } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useHistory} from 'react-router-dom';
import PageviewIcon from '@material-ui/icons/Pageview';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
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
    label:'ID',
    name:'id'
  },
  {
    label:'Patient',
    name:'patient'
  },
  {
    label:'Service',
    name:'service'
  },
  {
    label:'Insurance ID',
    name:'insid'
  },
  {
    label:'Insurance',
    name:'ins'
  },
  {
    label:'Status',
    name:'status',
    options:{
      sort:false,
      filter:false,
      customBodyRender:(value,tableMeta,updateValue)=>{
        return(
          <span className="font-weight-bold"><VerifiedUserIcon className="color-tqb"/> Verified </span>
        );
      }
    }
  },
  {
    label:'Actions',
    name:'actions',
    options:{
      filter:false,
      sort:false,
      customBodyRender:(value,tableMeta,updateValue)=>{
        return(
          <>
          <ViewEV />
          <DeleteEV />
          </>
        );
      }
    }
  }

];

const data=[
  {
    sr:1,
    id:'HR-0001',
    patient:'Shanelle Wynn',
    service:'Cover',
    insid:'INS-12365544',
    ins:'Health Ins'
  },
  {
    sr:2,
    id:'FD-0002',
    patient:'Shanelle Wynn',
    service:'Cover',
    insid:'INS-12365544',
    ins:'Health Ins'
  },
  {
    sr:3,
    id:'FD-0003',
    patient:'Shanelle Wynn',
    service:'Cover',
    insid:'INS-12365544',
    ins:'Health Ins'
  },
  {
    sr:4,
    id:'DE-0004',
    patient:'Shanelle Wynn',
    service:'Cover',
    insid:'INS-12365544',
    ins:'Health Ins'
  },
  {
    sr:5,
    id:'QA-0005',
    patient:'Shanelle Wynn',
    service:'Cover',
    insid:'INS-12365544',
    ins:'Health Ins'
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
function ViewEV() {
  let history = useHistory();

  function handleClick() {
    history.push('/ViewEV');
  }

  return (
    <Button
      onClick={handleClick}
      className="btn-neutral-dark mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
      <PageviewIcon />
    </Button>
  );
}
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
function DeleteEV() {
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
class EVnotPerformed extends Component {
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
              EV`s Not Performed
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

export default EVnotPerformed;
