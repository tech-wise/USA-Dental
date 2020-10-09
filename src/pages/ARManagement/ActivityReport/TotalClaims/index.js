import React, { Component } from 'react';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Card,
  CardContent,
  Grid,
  FormControlLabel,
  Checkbox,
  Button,
  Collapse, Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MUIDataTable from 'mui-datatables';


const useStyles = (theme) => ({
  root: {
    color: '#21BFD9',
    '&$checked': {
      color: '#21BFD9',
    },
  },
  checked: {},
  label: {
    color: "#253053",
    '&:hover': {
      color: '#253053',
    },
  },
  FormControlStyle: {
    height: '2rem',
    padding: 'none'
  },
  tableHead: {
    color: '#253053',
    fontWeight: 500,
    fontSize: '0.8rem',
    textAlign: 'center',
    border: '1px solid gray',

  },
  headCell: {
    color: '#253053',
    fontWeight: 600,
    fontSize: '1rem',
    textAlign: 'center'
  },
  heading: {
    fontSize: '1rem',
    color: '#253053',
    fontWeight: 500
  },
  Select: {
    color: '#21BFD9'
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
    name: 'sr'
  },
  {
    label: 'Biller Status',
    name: 'billerstatus'
  },
  {
    label: 'UID Count',
    name: 'uidcount'
  },
  {
    label: 'Claim Value Worked',
    name: 'claimvalue'
  }
];

const data = [
  {
    sr: 1,
    billerstatus: 'Billed on Portal',
    uidcount: '10',
    claimvalue: '385',
  },
  {
    sr: 2,
    billerstatus: 'D-Difference-Not Paid',
    uidcount: '12',
    claimvalue: '112',
  },
  {
    sr: 3,
    billerstatus: 'D-Difference-Paid',
    uidcount: '32',
    claimvalue: '756',
  },
  {
    sr: 5,
    billerstatus: 'Need More Info',
    uidcount: '3',
    claimvalue: '108',
  },
  {
    sr: 6,
    billerstatus: 'Paid and Posted',
    uidcount: '8',
    claimvalue: '10',
  },
];

class RcmActivityTotalClaims extends Component {
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
                      <span>Choose Table Column & Rows</span>
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

                  <Typography className="color-pb font-weight-bold">Select Rows</Typography>
                  <div className="divider my-3" />
                  <Grid container spacing={1}>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            icon={
                              <CheckBoxOutlineBlankIcon fontSize="small" />
                            }
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{ root: classes.root, checked: classes.checked }}
                          />
                        }
                        label="Billed on Portal
                          "
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            icon={
                              <CheckBoxOutlineBlankIcon fontSize="small" />
                            }
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{ root: classes.root, checked: classes.checked }}
                          />
                        }
                        label="D-Difference-Not Paid"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={
                              <CheckBoxOutlineBlankIcon fontSize="small" />
                            }
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{ root: classes.root, checked: classes.checked }}
                          />
                        }
                        label="D-Difference-Paid"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={
                              <CheckBoxOutlineBlankIcon fontSize="small" />
                            }
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{ root: classes.root, checked: classes.checked }}
                          />
                        }
                        label="	
                          Inclusive Code Difference"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            icon={
                              <CheckBoxOutlineBlankIcon fontSize="small" />
                            }
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{ root: classes.root, checked: classes.checked }}
                          />
                        }
                        label="	
                          Need Approval-Write off"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            icon={
                              <CheckBoxOutlineBlankIcon fontSize="small" />
                            }
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{ root: classes.root, checked: classes.checked }}
                          />
                        }
                        label="Need More Info"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={
                              <CheckBoxOutlineBlankIcon fontSize="small" />
                            }
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{ root: classes.root, checked: classes.checked }}
                          />
                        }
                        label="	
                          Paid Not Posted"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={
                              <CheckBoxOutlineBlankIcon fontSize="small" />
                            }
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{ root: classes.root, checked: classes.checked }}
                          />
                        }
                        label="Paid and Posted"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={
                              <CheckBoxOutlineBlankIcon fontSize="small" />
                            }
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{ root: classes.root, checked: classes.checked }}
                          />
                        }
                        label="Resubmitted Claim  "
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            icon={
                              <CheckBoxOutlineBlankIcon fontSize="small" />
                            }
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{ root: classes.root, checked: classes.checked }}
                          />
                        }
                        label="	
                          Send To Appeal"
                      />
                    </Grid>
                  </Grid>
                  <div className="my-2" />
                  <Typography className="color-pb font-weight-bold">Select Column</Typography>
                  <div className="divider my-2" />
                  <Grid container spacing={1}>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={
                              <CheckBoxOutlineBlankIcon fontSize="small" />
                            }
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{ root: classes.root, checked: classes.checked }}
                          />
                        }
                        label="	
                          No Value"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={
                              <CheckBoxOutlineBlankIcon fontSize="small" />
                            }
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{ root: classes.root, checked: classes.checked }}
                          />
                        }
                        label="New"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            icon={
                              <CheckBoxOutlineBlankIcon fontSize="small" />
                            }
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{ root: classes.root, checked: classes.checked }}
                          />
                        }
                        label="No"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={
                              <CheckBoxOutlineBlankIcon fontSize="small" />
                            }
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{ root: classes.root, checked: classes.checked }}
                          />
                        }
                        label="Yes"
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={
                              <CheckBoxOutlineBlankIcon fontSize="small" />
                            }
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            classes={{ root: classes.root, checked: classes.checked }}
                          />
                        }
                        label="Summary"
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
                Total Claims Reports
              </h4>
            </div>
            <div className="card-header--actions">
              <div>{/* You can write something here ! */}</div>
            </div>
          </div>
          <CardContent className="pt-2 px-4 pb-4">
            <MUIDataTable options={options} columns={columns} data={data} />
          </CardContent>
        </Card>
      </>
    );
  }
}

export default withStyles(useStyles)(RcmActivityTotalClaims);
