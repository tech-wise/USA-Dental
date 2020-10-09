import React, { Component } from 'react';
import clsx from 'clsx';
import {
  Collapse,
  Card,
  Button,
  Grid,
  FormControlLabel,
  Checkbox,
  CardContent,
  Dialog
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { useHistory } from 'react-router-dom';
import PageviewIcon from '@material-ui/icons/Pageview';
import { withStyles } from '@material-ui/styles';
import MUIDataTable from 'mui-datatables';

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
    height: '1.5rem',
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
  rowsPerPageOptions: [5, 10, 50],
};

const columns = [
  {
    label: 'Sr',
    name: 'sr',
  },
  {
    label: 'Claim',
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
          disabled
          size="small"
          className="btn-neutral-primary btn-hover">
          Release
        </Button>   
        );
      }
    }
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
    label: 'Birthday',
    name: 'birthday'
  },
  {
    label: 'Service',
    name: 'service'
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
            <ViewClaim />
            <EditClaim />
            <DeleteClaims />
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
    birthday: '08/05/1990',
    service: '10/09/2020',
   },
  {
    sr: 2,
    firstname: 'Sania',
    lastname: 'Khan',
    birthday: '08/05/1991',
    service: '10/09/2020',
  },
  {
    sr: 3,
    firstname: 'Libu',
    lastname: 'Warkey',
    birthday: '13/07/1993',
    service: '10/09/2020',
  },
  {
    sr: 5,
    firstname: 'Shaheen(ortho)',
    lastname: 'Menasria',
    birthday: '02/05/2000',
    service: '10/09/2020',
  },
  {
    sr: 6,
    firstname: 'Narjis',
    lastname: 'Menasria',
    birthday: '08/05/1995',
    service: '10/09/2020',
  },
];

function ViewClaim() {
  let history = useHistory();

  function handleClick() {
    history.push('/PaymentAllClaimView');
  }

  return (
    <Button
      onClick={handleClick}
      className="btn-neutral-dark mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
      <PageviewIcon />
    </Button>
  );
}
function EditClaim() {
  // let history = useHistory();

  return (
    <Button className="btn-neutral-first mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
      <FontAwesomeIcon icon={['fas', 'edit']} className="font-size-sm" />
    </Button>
  );
}
function DeleteClaims() {
  const [deletemodal, setDeletemodal] = React.useState(false);
  const DeleteClaim = () => setDeletemodal(!deletemodal);


  return (
    <>
      <Button onClick={DeleteClaim} className="btn-neutral-danger mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
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
class AllClaimsView extends Component {
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
                        label="Patient First Name"
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
                        label="Patient Last Name"
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
                        label="Birthday"
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
                        label="Service"
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
                        label="Patient Address State Code"
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
                        label="Subscriber"
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
                        label="Insurance Company"
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
                        label="Ins Phone#"
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
                        label="Biller QC"
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
                        label="Group Num"
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
                        label="Primary/Secondary"
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
                        label="Sent"
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
                        label="Re-sent"
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
                        label="Estimate"
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
                        label="Total"
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
                        label="Caller Notes"
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
                        label="File Upload"
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
                        label="Admin Status"
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
                        label="EOB Upload"
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
                        label="PP Status"
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
                        label="Patient Responsbility per EOB"
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
                        label="PP Notes"
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
                        label="Processed by Payment Poster Name"
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
                        label="Poster Last Worked on Date"
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
                All Claims View
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

export default withStyles(useStyles)(AllClaimsView);
