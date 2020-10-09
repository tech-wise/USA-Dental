import React, { Component } from 'react';
import clsx from 'clsx';
import { Collapse, Card, Button, Grid,FormControlLabel,Checkbox } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { ExampleWrapperSeamless } from 'layout-components';
import RcmRep from '../../Component/RcmRep';
import {withStyles} from '@material-ui/styles';
 const checkbox={
   root:{
     color:'#21BFD9',
     '&$checked': {
      color: '#21BFD9',
     },
   },
   checked: {},
   label:{
     color:"#253053",
     '&:hover':{
      color:'#253053',
    },
   },
   
 }
class RcmReportListing extends Component {
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
    const {classes}=this.props;
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
                     classes={{label:classes.label}}
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
                              icon={
                                <CheckBoxOutlineBlankIcon fontSize="small" />
                              }
                              checkedIcon={<CheckBoxIcon fontSize="small" />}
                              name="checkedI"
                              classes={{root:classes.root,checked:classes.checked}}
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
                              icon={
                                <CheckBoxOutlineBlankIcon fontSize="small" />
                              }
                              checkedIcon={<CheckBoxIcon fontSize="small" />}
                              name="checkedI"
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Last name"
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
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Chart number"
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
                              classes={{root:classes.root,checked:classes.checked}}
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
                              icon={
                                <CheckBoxOutlineBlankIcon fontSize="small" />
                              }
                              checkedIcon={<CheckBoxIcon fontSize="small" />}
                              name="checkedI"
                              classes={{root:classes.root,checked:classes.checked}}
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
                              icon={
                                <CheckBoxOutlineBlankIcon fontSize="small" />
                              }
                              checkedIcon={<CheckBoxIcon fontSize="small" />}
                              name="checkedI"
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Insurance name"
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
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Payor ID"
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
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Insurance tel"
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
                              classes={{root:classes.root,checked:classes.checked}}
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
                              icon={
                                <CheckBoxOutlineBlankIcon fontSize="small" />
                              }
                              checkedIcon={<CheckBoxIcon fontSize="small" />}
                              name="checkedI"
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Claim amount"
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
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Estimated amount"
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
                              classes={{root:classes.root,checked:classes.checked}}
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
                              icon={
                                <CheckBoxOutlineBlankIcon fontSize="small" />
                              }
                              checkedIcon={<CheckBoxIcon fontSize="small" />}
                              name="checkedI"
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Procedure codes"
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
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Practice name"
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
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Procedure name"
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
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Caller comments"
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
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Caller status"
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
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Biller comments"
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
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Biller status"
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
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Practice name"
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
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Chart"
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
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Prov"
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
                              classes={{root:classes.root,checked:classes.checked}}
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
                              icon={
                                <CheckBoxOutlineBlankIcon fontSize="small" />
                              }
                              checkedIcon={<CheckBoxIcon fontSize="small" />}
                              name="checkedI"
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Claim Status"
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
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Amount Paid"
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
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Payer ID"
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
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Payer Name"
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
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Group Policy Number"
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
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Group Name"
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
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Caller Status"
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
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Biller Status"
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
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Last Update User"
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
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Match"
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
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Written off Amount"
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
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Payment Posting Status"
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
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="EOB Date"
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
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Insurance Paid"
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
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Upload EOB"
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
                              classes={{root:classes.root,checked:classes.checked}}
                            />
                          }
                          label="Research Status"
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
                              classes={{root:classes.root,checked:classes.checked}}
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

      </>
    );
  }
}

export default withStyles(checkbox)(RcmReportListing);
