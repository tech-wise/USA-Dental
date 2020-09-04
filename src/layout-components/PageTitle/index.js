import React from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Tooltip
} from '@material-ui/core';

import { connect } from 'react-redux';

import HomeWorkTwoToneIcon from '@material-ui/icons/HomeWorkTwoTone';

const PageTitle = (props) => {
  const { 
    pageTitleStyle,
    pageTitleBackground,
    pageTitleShadow,
    pageTitleIconBox,
    pageTitleDescription,
    titleHeading,
    titleDescription,
    children
  } = props;
  
  return (
    <>
      <div
        className={clsx('app-page-title', pageTitleStyle, pageTitleBackground, {
          'app-page-title--shadow': pageTitleShadow
        })}>
        <div>
          <div className="app-page-title--first">
            {pageTitleIconBox && (
              <div className="app-page-title--iconbox d-70">
                <div className="d-70 d-flex align-items-center justify-content-center display-1">
                  <HomeWorkTwoToneIcon className="text-primary" />
                </div>
              </div>
            )}
            <div className="app-page-title--heading">
              <h1>{titleHeading}</h1>
              {pageTitleDescription && (
                <div className="app-page-title--description">
                  {titleDescription}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          {children}
          <Tooltip title="Add new entry">
            <Button
              variant="contained"
              size="small"
              className="d-40 btn-success"
              // onClick={toggle1}
              >
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={['fas', 'plus']} className="opacity-8" />
              </span>
            </Button>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  pageTitleStyle: state.ThemeOptions.pageTitleStyle,
  pageTitleBackground: state.ThemeOptions.pageTitleBackground,
  pageTitleShadow: state.ThemeOptions.pageTitleShadow,
  pageTitleIconBox: state.ThemeOptions.pageTitleIconBox,
  pageTitleDescription: state.ThemeOptions.pageTitleDescription
});

export default connect(mapStateToProps)(PageTitle);
