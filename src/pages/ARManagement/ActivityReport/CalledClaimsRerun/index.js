import React, { Component } from 'react';
import {
  Card,
  CardContent,
  Button,
  
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MUIDataTable from 'mui-datatables';
function EditClaim() {
  let history = useHistory();

  function handleClick() {
    history.push('/EditARReport');
  }

  return (
    <Button
      onClick={handleClick}
      className="btn-neutral-dark mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
      <FontAwesomeIcon icon={['far', 'edit']} className="font-size-sm" />
    </Button>
  );
}
function Task() {
  // let history = useHistory();

  return (
    <Button className="btn-neutral-first mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
      <FontAwesomeIcon icon={['fas', 'tasks']} className="font-size-sm" />
    </Button>
  );
}

const options = {
  filterType: 'dropdown',
  selectableRows: false,
  rowsPerPage: 5,
  rowsPerPageOptions: [5, 10, 50],
};

const columns = [
  {
    label: 'Sr',
    name: 'sr'
  },
  {
    label: 'Patient first Name',
    name: 'firstname'
  },
  {
    label: 'Patient Last Name',
    name: 'lastname'
  },
  {
    label: 'Service',
    name: 'service'
  },
  {
    label: 'Total',
    name: 'total'
  },
  {
    label: 'Actions',
    name: 'actions',
    options:{
      filter:false,
      sort:false,
      customBodyRender:(value,tablemeta,updatevalue)=>{
        return (
          <>
            <EditClaim />
            <Task />
          </>
        );
      }
    }
  }
];

const data = [
  {
    sr: 1,
    firstname: 'Narjis',
    lastname: 'Menasria',
    service: '10/09/2020',
    total:'$290'
  },
  {
    sr: 2,
    firstname: 'Sania',
    lastname: 'Khan',
    service: '10/09/2020',
    total:'$660'
  },
  {
    sr: 3,
    firstname: 'Libu',
    lastname: 'Warkey',
    service: '10/09/2020',
    total:'$1100'
  },
  {
    sr: 5,
    firstname: 'Shaheen(ortho)',
    lastname: 'Menasria',
    service: '10/09/2020',
    total:'$1290'
  },
  {
    sr: 6,
    firstname: 'Narjis',
    lastname: 'Menasria',
    service: '10/09/2020',
    total:'$190'
  },
];

class RcmActivityCalledClaimsRerun extends Component {


  render() {
    return (
      <>
        <Card className="card-box mb-spacing-6-x2">
          <div className="card-header">
            <div className="card-header--title">
              <h4 className="font-size-lg mb-0 py-2 font-weight-bold color-pb">
                Billed Claims Rerun
            </h4>
            </div>
            <div className="card-header--actions">
              <div>{/* You can write something here ! */}</div>
            </div>
          </div>
          <CardContent>
          <MUIDataTable
                  data={data}
                  columns={columns}
                  options={options} 
             />
          </CardContent>
        </Card>
      </>
    );
  }
}

export default RcmActivityCalledClaimsRerun;
