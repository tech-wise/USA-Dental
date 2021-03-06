import React, { Component } from 'react';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import clsx from 'clsx';

import {
  Card,
  CardContent,
  Grid,
  Button,
  Checkbox,
  FormControlLabel,
  Collapse
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
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

const useStyles = (theme) => ({
  root: {
    color: '#21BFD9',
    '&$checked': {
      color: '#21BFD9'
    }
  },
  checked: {},
  label: {
    color: '#253053',
    '&:hover': {
      color: '#253053'
    }
  },
  FormControlStyle: {
    height: '2rem',
    padding: 'none',
    '&:focus': {
      outlineColor: '#21BFD9',
      border: 'none'
    }
  },
  tableContainer: {
    overflow: 'auto',
    minWidth: 900
  },
  tableHead: {
    // backgroundColor: '#EDEEF7'
  },
  headCell: {
    color: '#253053',
    fontWeight: 600,
    fontSize: '1rem'
  },
  heading: {
    fontSize: '1rem',
    color: '#253053',
    fontWeight: 500
  },
  Select: {
    color: '#21BFD9',
    '&:focus': {
      outlineColor: '#21BFD9'
    }
  }
});

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
    label: 'Subscriber',
    name: 'subscriber'
  },
  {
    label: 'ID Num',
    name: 'idnum'
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
      customBodyRender: (value, tablemeta, updatevalue) => {
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

const data = [
  {
    sr: 1,
    firstname: 'Narjis',
    lastname: 'Menasria',
    service: '10/09/2020',
    subscriber: 'Calles, Juan',
    idnum: '904560822',
    total: '$290'
  },
  {
    sr: 2,
    firstname: 'Sania',
    lastname: 'Khan',
    service: '10/09/2020',
    subscriber: 'Calles, Juan',
    idnum: '904560822',
    total: '$660'
  },
  {
    sr: 3,
    firstname: 'Libu',
    lastname: 'Warkey',
    service: '10/09/2020',
    subscriber: 'Calles, Juan',
    idnum: '904560822',
    total: '$1100'
  },
  {
    sr: 5,
    firstname: 'Shaheen(ortho)',
    lastname: 'Menasria',
    service: '10/09/2020',
    subscriber: 'Calles, Juan',
    idnum: '904560822',
    total: '$1290'
  },
  {
    sr: 6,
    firstname: 'Narjis',
    lastname: 'Menasria',
    service: '10/09/2020',
    subscriber: 'Calles, Juan',
    idnum: '904560822',
    total: '$190'
  }
];

class RcmActivityCalledClaimsOthers extends Component {
  constructor(props) {
    super(props);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.state = {
      accordion: false
    };
  }

  toggleAccordion() {
    if (this.state.accordion === true) {
      this.setState({
        accordion: false
      });
    } else {
      this.setState({
        accordion: true
      });
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <>
        <div className="accordion mb-spacing-6-x2">
          <Card
            style={{ marginTop: '-30px' }}
            className={clsx('card-box', {
              'panel-open': this.state.accordion
            })}>
            <Card>
              <div className="card-header">
                <div className="panel-title">
                  <div className="accordion-toggle">
                    <Button
                      classes={{ label: classes.label }}
                      variant="text"
                      size="large"
                      className="color-pb btn-link font-weight-bold d-flex align-items-center justify-content-between btn-transition-none"
                      onClick={this.toggleAccordion}
                      aria-expanded={this.state.accordion}>
                      <span>Choose Coloumn</span>
                      <FontAwesomeIcon
                        icon={['fas', 'angle-up']}
                        className="font-size-xl accordion-icon"
                      />
                    </Button>
                  </div>
                </div>
              </div>
              <Collapse in={this.state.accordion}>
                <div className="p-4">
                  <Grid container spacing={1}>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="First Name"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Last name"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Chart number"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Date of birth"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Date of service"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Insurance name"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Payor ID"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Insurance tel"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Date sent"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Claim amount"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Estimated amount"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Estimated amount"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Procedure codes"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Practice name"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Procedure name"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Caller comments"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Caller status"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Biller comments"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Biller status"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Practice name"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Chart"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Prov"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Claim ID"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Claim Status"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Amount Paid"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Payer ID"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Payer Name"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Group Policy Number"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Group Name"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Caller Status"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Biller Status"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Last Update User"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Match"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Written off Amount"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Payment Posting Status"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="EOB Date"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Insurance Paid"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Upload EOB"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Research Status"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Research Notes"
                      />
                    </Grid>
                  </Grid>
                </div>
              </Collapse>
            </Card>
          </Card>
        </div>
        <Card className="card-box mb-spacing-6-x2">
          <div className="card-header">
            <div className="card-header--title">
              <h4 className="font-size-lg mb-0 py-2 font-weight-bold color-pb">
                Billed Claims Others
              </h4>
            </div>
            <div className="card-header--actions">
              <div>{/* You can write something here ! */}</div>
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

export default withStyles(useStyles)(RcmActivityCalledClaimsOthers);
