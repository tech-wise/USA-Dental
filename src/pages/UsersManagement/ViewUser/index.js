import React from 'react';
import { Card, CardContent,Tooltip,Grid } from '@material-ui/core'; 
import Button from '@material-ui/core/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import avatar7 from './../../../assets/images/avatars/avatar7.jpg';
import avatar5 from './../../../assets/images/avatars/avatar5.jpg';
import avatar1 from './../../../assets/images/avatars/avatar1.jpg';
import avatar2 from './../../../assets/images/avatars/avatar2.jpg';
import avatar6 from './../../../assets/images/avatars/avatar6.jpg';


export default function ViewUser() {
 
  return (
    <>
      <Card className="card-box mb-spacing-6-x2">
        <div className="card-header">
          <div className="card-header--title">
            <h4 className="font-size-lg mb-0 py-2 font-weight-bold color-pb">
              View User Details
            </h4>
          </div>
          <div className="card-header--actions">
            <div>
              <Button className="btn-neutral-info mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                <FontAwesomeIcon
                  icon={['fas', 'print']}
                  className="font-size-sm"
                />
              </Button>
              <Button className="btn-neutral-first mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                <FontAwesomeIcon
                  icon={['fas', 'edit']}
                  className="font-size-sm"
                />
              </Button>
            </div>
          </div>
        </div>
        <CardContent>
        <div className="bg-white rounded-lg br-xl-right-0">
                <div className="p-4 text-center">
                  <div className="avatar-icon-wrapper rounded-circle mx-auto">
                    <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0 border-3 border-first">
                      <div className="rounded-circle border-3 border-white overflow-hidden">
                        <img alt="..." className="img-fluid" src={avatar5} />
                      </div>
                    </div>
                  </div>
                  <h4 className="font-size-lg font-weight-bold my-2">
                    Marion Devine
                  </h4>
                  <div className="text-center my-4">
                    <div className="badge badge-pill badge-first mx-1">
                      Web developer
                    </div>
                    <div className="badge badge-pill badge-warning text-warning mx-1">
                      Javascript
                    </div>
                    <div className="badge badge-pill badge-danger text-danger mx-1">
                      Angular
                    </div>
                  </div>

                  <p className="text-muted mb-4">
                    I should be incapable of drawing a single stroke at the
                    present moment; and yet I feel that I never was a greater
                    artist than now.
                  </p>

                  <div className="divider my-4" />
                  <Grid container spacing={6}>
                    <Grid item lg={6}>
                      <span className="opacity-6 pb-2">Current month</span>
                      <div className="d-flex align-items-center justify-content-center">
                        <span className="font-weight-bold font-size-lg">
                          <small className="opacity-6 pr-1">$</small>
                          46,362
                        </span>
                        <div className="badge badge-danger ml-2 text-danger">
                          -8%
                        </div>
                      </div>
                    </Grid>
                    <Grid item lg={6}>
                      <span className="opacity-6 pb-2">Last year</span>
                      <div className="d-flex align-items-center justify-content-center">
                        <span className="font-weight-bold font-size-lg">
                          <small className="opacity-6 pr-1">$</small>
                          34,546
                        </span>
                        <div className="badge badge-success text-success ml-2">
                          +13%
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                  <div className="divider my-4" />
                  <div className="font-weight-bold text-uppercase text-black-50 text-center mb-3">
                    Team members
                  </div>
                  <div className="avatar-wrapper-overlap d-flex justify-content-center mb-3">
                    <Tooltip
                      title="Chelsey Delaney"
                      classes={{ tooltip: 'tooltip-danger' }}
                      arrow>
                      <div className="avatar-icon-wrapper">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar1} />
                        </div>
                      </div>
                    </Tooltip>

                    <Tooltip
                      title="Laibah Santos"
                      classes={{ tooltip: 'tooltip-first' }}
                      arrow>
                      <div className="avatar-icon-wrapper">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar7} />
                        </div>
                      </div>
                    </Tooltip>

                    <Tooltip
                      title="Ksawery Weber"
                      classes={{ tooltip: 'tooltip-second' }}
                      arrow>
                      <div className="avatar-icon-wrapper">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar1} />
                        </div>
                      </div>
                    </Tooltip>

                    <Tooltip
                      title="Killian Magana"
                      classes={{ tooltip: 'tooltip-info' }}
                      arrow>
                      <div className="avatar-icon-wrapper">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar2} />
                        </div>
                      </div>
                    </Tooltip>

                    <Tooltip
                      title="Kean Banks"
                      classes={{ tooltip: 'tooltip-success' }}
                      arrow>
                      <div className="avatar-icon-wrapper">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar6} />
                        </div>
                      </div>
                    </Tooltip>
                  </div>
                  <div className="divider my-4" />
                  <Button variant="text" className="btn-outline-first mt-2">
                    View complete profile
                  </Button>
                </div>
              </div>
        </CardContent>
      </Card>
    </>
  );
}
