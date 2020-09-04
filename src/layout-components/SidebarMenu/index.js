import React, { useState } from 'react';

import clsx from 'clsx';

import { Collapse } from '@material-ui/core';

import PerfectScrollbar from 'react-perfect-scrollbar';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { setSidebarToggleMobile } from '../../reducers/ThemeOptions';

import SidebarUserbox from '../SidebarUserbox';

import ChevronRightTwoToneIcon from '@material-ui/icons/ChevronRightTwoTone';
import VerifiedUserTwoToneIcon from '@material-ui/icons/VerifiedUserTwoTone';
import PeopleIcon from '@material-ui/icons/People';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AssessmentIcon from '@material-ui/icons/Assessment';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import BusinessIcon from '@material-ui/icons/Business';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CallToActionIcon from '@material-ui/icons/CallToAction';


const SidebarMenu = (props) => {
  const { setSidebarToggleMobile, sidebarUserbox } = props;

  const toggleSidebarMobile = () => setSidebarToggleMobile(false);

  const [dashboardOpen, setDashboardOpen] = useState(false);
  const toggleDashboard = (event) => {
    setDashboardOpen(!dashboardOpen);
    event.preventDefault();
  };
  const [applicationOpen, setApplicationOpen] = useState(false);
  const toggleApplication = (event) => {
    setApplicationOpen(!applicationOpen);
    event.preventDefault();
  };
  const [moduleOpen, setModuleOpen] = useState(false);
  const toggleModule = (event) => {
    setModuleOpen(!moduleOpen);
    event.preventDefault();
  };
  const [roleOpen, setRoleOpen] = useState(false);
  const toggleRole = (event) => {
    setRoleOpen(!roleOpen);
    event.preventDefault();
  };

  const [currentbillingOpen, setCurrentbillingOpen] = useState(false);
  const toggleBilling = (event) => {
    setCurrentbillingOpen(!currentbillingOpen);
    event.preventDefault();
  };
  const [armanagementOpen, setArmanagementOpen] = useState(false);
  const toggleArmanagement = (event) => {
    setArmanagementOpen(!armanagementOpen);
    event.preventDefault();
  };
  const [schedulingmoduleOpen, setSchedulingmoduleOpen] = useState(false);
  const toggleSchedulingmodule = (event) => {
    setSchedulingmoduleOpen(!schedulingmoduleOpen);
    event.preventDefault();
  };
  const [incentivemoduleOpen, setIncentivemoduleOpen] = useState(false);
  const toggleIncentivemodule = (event) => {
    setIncentivemoduleOpen(!incentivemoduleOpen);
    event.preventDefault();
  };
  const [officemanagementOpen, setOfficemanagementOpen] = useState(false);
  const toggleOfficemodule = (event) => {
    setOfficemanagementOpen(!officemanagementOpen);
    event.preventDefault();
  };
  const [accountingOpen, setAccountingOpen] = useState(false);
  const toggleAccountmodule = (event) => {
    setAccountingOpen(!accountingOpen);
    event.preventDefault();
  };
  const [evbbOpen, setEvbbOpen] = useState(false);
  const toggleEvbbmodule = (event) => {
    setEvbbOpen(!evbbOpen);
    event.preventDefault();
  };

  return (
    <>
      <PerfectScrollbar>
        {sidebarUserbox && <SidebarUserbox />}
        <div className="sidebar-navigation">
          <div className="sidebar-header"></div>
          <ul>
            <li>
              <a
                href="#/"
                onClick={toggleDashboard}
                className={clsx({ active: dashboardOpen })}>
                <span className="sidebar-icon">
                  <VerifiedUserTwoToneIcon />
                </span>
                <span className="sidebar-item-label">Dashboards</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={dashboardOpen}>
                <ul>
                  <li>
                    <NavLink
                      onClick={toggleSidebarMobile}
                      to="/DashboardMonitoring">
                      Monitoring
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={toggleSidebarMobile}
                      to="/DashboardCommerce">
                      Commerce
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={toggleSidebarMobile}
                      to="/DashboardAnalytics">
                      Analytics
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={toggleSidebarMobile}
                      to="/DashboardStatistics">
                      Statistics
                    </NavLink>
                  </li>
                </ul>
              </Collapse>
            </li>
            <div className="sidebar-header">
              <span>Users Management</span>
            </div>
            <li>
              <a
                href="#/"
                onClick={toggleApplication}
                className={clsx({ active: applicationOpen })}>
                <span className="sidebar-icon">
                  <PeopleIcon />
                </span>
                <span className="sidebar-item-label">Users</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={applicationOpen}>
                <ul>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/AllUsers">
                      All Users
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/AddNewUser">
                      Add New User
                    </NavLink>
                  </li>
                </ul>
              </Collapse>
            </li>
            {/* Modules */}
            <li>
              <a
                href="#/"
                onClick={toggleModule}
                className={clsx({ active: moduleOpen })}>
                <span className="sidebar-icon">
                  <AssignmentIcon />
                </span>
                <span className="sidebar-item-label">Modules</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={moduleOpen}>
                <ul>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/AllModules">
                      All Modules
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/AddNewModule">
                      Add New Module
                    </NavLink>
                  </li>
                </ul>
              </Collapse>
            </li>
            {/* Modules */}
            <li>
              <a
                href="#/"
                onClick={toggleRole}
                className={clsx({ active: roleOpen })}>
                <span className="sidebar-icon">
                  <CallToActionIcon />
                </span>
                <span className="sidebar-item-label">Roles</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={roleOpen}>
                <ul>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/AllRoles">
                      User Roles
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/AddNewRole">
                      Add New Role
                    </NavLink>
                  </li>
                </ul>
              </Collapse>
            </li>
            <div className="sidebar-header">
              <span>RCM Module</span>
            </div>
            <li>
              <a
                href="#/"
                onClick={toggleBilling}
                className={clsx({ active: currentbillingOpen })}>
                <span className="sidebar-icon">
                  <ReceiptIcon />
                </span>
                <span className="sidebar-item-label">Current Billing</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={currentbillingOpen}>
                <ul>
                  <li>
                    <NavLink
                      onClick={toggleSidebarMobile}
                      to="/ClaimsNotSentReport">
                      Claims not sent Report
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={toggleSidebarMobile}
                      to="/ClaimsApproachingTFL">
                      Claims approaching TFL
                    </NavLink>
                  </li>
                </ul>
              </Collapse>
            </li>
            <li>
              <a
                href="#/"
                onClick={toggleArmanagement}
                className={clsx({ active: armanagementOpen })}>
                <span className="sidebar-icon">
                  <AssessmentIcon />
                </span>
                <span className="sidebar-item-label">AR Management</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={armanagementOpen}>
                <ul>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/">
                      Example 1
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/">
                      Example 2
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/">
                      Example 3
                    </NavLink>
                  </li>
                </ul>
              </Collapse>
            </li>
            <div className="sidebar-header">
              <span>Add on Features</span>
            </div>
            <li>
              <a
                href="#/"
                onClick={toggleSchedulingmodule}
                className={clsx({ active: schedulingmoduleOpen })}>
                <span className="sidebar-icon">
                  <EventNoteIcon />
                </span>
                <span className="sidebar-item-label">Scheduling Module</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={schedulingmoduleOpen}>
                <ul>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/">
                      Example 1
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/">
                      Example 2
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/">
                      Example 3
                    </NavLink>
                  </li>
                </ul>
              </Collapse>
            </li>
            <li>
              <a
                href="#/"
                onClick={toggleIncentivemodule}
                className={clsx({ active: incentivemoduleOpen })}>
                <span className="sidebar-icon">
                  <CardGiftcardIcon />
                </span>
                <span className="sidebar-item-label">Incentive Module</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={incentivemoduleOpen}>
                <ul>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/">
                      Example 1
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/">
                      Example 2
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/">
                      Example 3
                    </NavLink>
                  </li>
                </ul>
              </Collapse>
            </li>
            <li>
              <a
                href="#/"
                onClick={toggleOfficemodule}
                className={clsx({ active: officemanagementOpen })}>
                <span className="sidebar-icon">
                  <BusinessIcon />
                </span>
                <span className="sidebar-item-label">Office Management</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={officemanagementOpen}>
                <ul>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/">
                      Example 1
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/">
                      Example 2
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/">
                      Example 3
                    </NavLink>
                  </li>
                </ul>
              </Collapse>
            </li>
            <li>
              <a
                href="#/"
                onClick={toggleAccountmodule}
                className={clsx({ active: accountingOpen })}>
                <span className="sidebar-icon">
                  <LocalAtmIcon />
                </span>
                <span className="sidebar-item-label">Accounting</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={accountingOpen}>
                <ul>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/">
                      Example 1
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/">
                      Example 2
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/">
                      Example 3
                    </NavLink>
                  </li>
                </ul>
              </Collapse>
            </li>
            <li>
              <a
                href="#/"
                onClick={toggleEvbbmodule}
                className={clsx({ active: evbbOpen })}>
                <span className="sidebar-icon">
                  <VerifiedUserTwoToneIcon />
                </span>
                <span className="sidebar-item-label">
                  Eligibility Verification &<br /> Benifits Breakdown
                </span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={evbbOpen}>
                <ul>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/">
                      Example 1
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/">
                      Example 2
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/">
                      Example 3
                    </NavLink>
                  </li>
                </ul>
              </Collapse>
            </li>
          </ul>
        </div>
      </PerfectScrollbar>
    </>
  );
};

const mapStateToProps = (state) => ({
  sidebarUserbox: state.ThemeOptions.sidebarUserbox,

  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile
});

const mapDispatchToProps = (dispatch) => ({
  setSidebarToggleMobile: (enable) => dispatch(setSidebarToggleMobile(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarMenu);
