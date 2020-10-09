import React from 'react';
import { Button, Card, CardContent} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageviewIcon from '@material-ui/icons/Pageview';
import MUIDataTable from 'mui-datatables';

function ViewClaim() {
  let history = useHistory();

  function handleClick() {
    history.push('/RcmReportView');
  }

  return (
    <Button
      onClick={handleClick}
      className="btn-neutral-dark mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
      <PageviewIcon />
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


export default function RcmRep() {
   const options = {
    filterType: 'dropdown',
    selectableRows: false,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 50]
  };

  const columns=[
    {
      label: 'Sr',
      name: 'sr',
    },
    {
      label: 'Claim Task',
      name: 'task',
      options:{
        sort:false,
        filter:false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <Button
            size="small"
            className="btn-neutral-primary btn-hover">
            Claim
          </Button>   
          );
        }
      }
    },
    {
      label: 'Versions',
      name: 'versions',
      options:{
        sort:false,
        filter:false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <Button
            size="small"
            className="btn-neutral-primary btn-hover">
            Versions
          </Button>   
          );
        }
      }
    },
    {
      label: 'Release',
      name: 'release',
      options:{
        sort:false,
        filter:false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <Button
            size="small"
            className="btn-neutral-primary btn-hover">
            Release
          </Button>   
          );
        }
      }
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
      label: 'Actions',
      name: 'action',
      options:{
        sort:false,
        filter:false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
             <>
             <ViewClaim />
             <Task />
             </>
          );
        }
      }
    }
  ];
  const data=[
    {
      sr:1,
      patient:"Mr John",
      insurance:"Health Ins"
    },
    {
      sr:2,
      patient:"Sara	Khan",
      insurance:"Health Ins"
    },
    {
      sr:3,
      patient:"Narjis	Menasria",
      insurance:"Dentist Ins"
    },
    {
      sr:4,
      patient:"John	Smith",
      insurance:"Health Ins"
    },
    {
      sr:5,
      patient:"Narjis	Menasria",
      insurance:"Dentist Ins"
    },
    {
      sr:6,
      patient:"Erik Hernandez",
      insurance:"Health Ins"
    },
  ];
  return (
    <>
      <Card className="card-box mb-spacing-6-x2">
        <div className="card-header">
          <div className="card-header--title">
            <h4 className="font-size-lg mb-0 py-2 font-weight-bold color-pb">
              RCM Reports
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
