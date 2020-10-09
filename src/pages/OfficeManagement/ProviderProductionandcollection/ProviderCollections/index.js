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
    label:'ID',
    name:'id'
  },
  {
    label:'Patient',
    name:'name'
  },
  {
    label:'Address',
    name:'address'
  },
  {
    label:'Phone',
    name:'phone'
  },
  {
    label:'Prod AMT',
    name:'prod'
  },
  {
    label:'Coll AMT',
    name:'coll'
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
            <ViewSnippets />  
            <DeleteSnippets />
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
    name: 'Mr John',
    address:'USA',
    phone:'+1045236585',
    prod:'3000.00',
    coll:'150.00'
   },
   {
    sr: 2,
    id:'002-OT',
    name: 'Orya Otyler',
    address:'USA',
    phone:'+1045236585',
    prod:'3000.00',
    coll:'150.00'
   },
   {
    sr: 3,
    id:'003-LM',
    name: 'Laura Leon Messa',
    address:'USA',
    phone:'+1045236585',
    prod:'3000.00',
    coll:'150.00'
   },
   {
    sr: 4,
    id:'224-BM',
    name: 'Beder Mejia',
    address:'USA',
    phone:'+1045236585',
    prod:'3000.00',
    coll:'150.00'
   },
   {
    sr: 5,
    id:'005-RP',
    name: 'Rickey Patin',
    address:'USA',
    phone:'+1045236585',
    prod:'3000.00',
    coll:'150.00'
   }
];

function ViewSnippets() {
  let history = useHistory();

  function handleClick() {
    history.push('/ViewProviderCollections');
  }

  return (
    <Button
      onClick={handleClick}
      className="btn-neutral-dark mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
      <PageviewIcon />
    </Button>
  );
}
function DeleteSnippets() {
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
class ProviderCollections extends Component {
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
                Productions and Collections
              </h4>
            </div>
            {/* <div className="card-header--actions">
              <div>
                You can write something here!
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

export default ProviderCollections;
