import React, { Component } from 'react';
import { Card, Button, CardContent, Dialog } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import GetAppIcon from '@material-ui/icons/GetApp';
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
    label:'Document ID',
    name:'id'
  },
  {
    label:'Date',
    name:'date'
  },
  {
    label:'Title',
    name:'title'
  },
  {
    label:'Document',
    name:'document'
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
            <DownloadDocument />  
            <EditDocument />
            <DeleteDocument />
          </>
        );
      }
    }
  }
];

const data=[
  {
    sr: 1,
    id:'001-MJ',
    date: '12/25/18',
    title:'Patient Report',
    document:'Report.pdf',
   },
   {
    sr: 2,
    id:'002-OT',
    date: '12/25/18',
    title:'Patient Report',
    document:'Report.pdf',
   },
   {
    sr: 3,
    id:'003-LM',
    date: '12/25/18',
    title:'Patient Report',
    document:'Report.pdf',
   },
   {
    sr: 4,
    id:'224-BM',
    date: '12/25/18',
    title:'Patient Report',
    document:'Report.pdf',
   },
   {
    sr: 5,
    id:'005-RP',
    date: '12/25/18',
    title:'Patient Report',
    document:'Report.pdf',
   }
];
function AddDocument() {
  let history = useHistory();

  function handleClick() {
    history.push('/AddBridgeDoc');
  }

  return (
    <Button onClick={handleClick} size="small" className="btn-neutral-primary btn-hover">
      <FontAwesomeIcon icon={['fas', 'plus-circle']} />
      &nbsp; Add Document
    </Button>
  );
}
function DownloadDocument() {
  // let history = useHistory();

  // function handleClick() {
  //   history.push('/');
  // }

  return (
    <Button
      // onClick={handleClick}
      className="btn-neutral-dark mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
      <GetAppIcon />
    </Button>
  );
}
function EditDocument() {
  let history = useHistory();
  function handleClick() {
    history.push('/EditBridgeDoc');
  }

  return (
    <Button onClick={handleClick} className="btn-neutral-first mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
      <FontAwesomeIcon icon={['fas', 'edit']} className="font-size-sm" />
    </Button>
  );
}
function DeleteDocument() {
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
class BridgeDoc extends Component {
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
                E-Bridge
              </h4>
            </div>
            <div className="card-header--actions">
              <div>
                <AddDocument />
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

export default BridgeDoc;
