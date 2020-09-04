import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Button, Typography } from '@material-ui/core';

import avatar5 from '../../../../assets/images/avatars/avatar5.jpg';

export default function UserDetailModal({ handleviewClose }) {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xl={5}>
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
                <Typography className="text-warning">Super Admin</Typography>
              </div>
              <div className="divider my-4" />
              <Grid container spacing={6}>
                <Grid item lg={6}>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="font-size-xxl text-success"
                      />
                    </div>
                    <div className="mt-2 line-height-sm">
                      <span className="text-black-50 d-block">mariondevine123</span>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={6}>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'envelope']}
                        className="font-size-xxl text-success"
                      />
                    </div>
                    <div className="mt-2 line-height-sm">
                      <span className="text-black-50 d-block">mariondevine@gmail.com</span>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <div className="divider my-4" />
              <Button
                variant="text"
                className="btn-outline-first mt-2"
                onClick={handleviewClose}>
                Close
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
