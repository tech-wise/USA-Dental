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
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
const SidebarMenu = (props) => {
  const { setSidebarToggleMobile, sidebarUserbox } = props;

  const toggleSidebarMobile = () => setSidebarToggleMobile(false);

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
  const [clinicOpen, setClinicOpen] = useState(false);
  const toggleClinic = (event) => {
    setClinicOpen(!clinicOpen);
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
  const [paymentpostingOpen, setPaymentpostingOpen] = useState(false);
  const togglePaymentposting = (event) => {
    setPaymentpostingOpen(!paymentpostingOpen);
    event.preventDefault();
  };
  const [ppoOpen, setPpoOpen] = useState(false);
  const toggleppo = (event) => {
    setPpoOpen(!ppoOpen);
    event.preventDefault();
  };
  const [activityreportOpen, setactivityOpen] = useState(false);
  const toggleactivity = (event) => {
    setactivityOpen(!activityreportOpen);
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
              <NavLink onClick={toggleSidebarMobile} to="/DashboardAnalytics">
                <span className="sidebar-icon">
                  <VerifiedUserTwoToneIcon />
                </span>
                <span className="sidebar-item-label">Dashboard</span>
              </NavLink>
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
              <span>Clinic Module</span>
            </div>
            <li>
              <a
                href="#/"
                onClick={toggleClinic}
                className={clsx({ active: clinicOpen })}>
                <span className="sidebar-icon">
                  <LocalHospitalIcon />
                </span>
                <span className="sidebar-item-label">Manage Clinics</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={clinicOpen}>
                <ul>
                  <li>
                    <NavLink
                      onClick={toggleSidebarMobile}
                      to="/AllClinics">
                      All Clinics
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={toggleSidebarMobile}
                      to="/AddNewClinic">
                      Add New Clicic
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
                    <NavLink onClick={toggleSidebarMobile} to="/ARDashboard">
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/Rcmreport">
                      RCM Report
                    </NavLink>
                  </li>

                  <li>
                    <a
                      href="#/"
                      onClick={toggleactivity}
                      className={clsx({ active: activityreportOpen })}>
                      {/* <span className="sidebar-icon">
                  <AssessmentIcon />
                </span> */}
                      <span className="sidebar-item-label">
                        Activity Report
                      </span>
                      <span className="sidebar-icon-indicator">
                        <ChevronRightTwoToneIcon />
                      </span>
                    </a>
                    <Collapse in={activityreportOpen}>
                      <ul>
                        <li>
                          <NavLink
                            onClick={toggleSidebarMobile}
                            to="/RcmActivityDashboard">
                            Activity Reports
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={toggleSidebarMobile}
                            to="/RcmActivityWorkedonDashboard">
                            Worked on Dashboard
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={toggleSidebarMobile}
                            to="/RcmActivityTotalClaims">
                            Total Claims
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={toggleSidebarMobile}
                            to="/RcmActivityCalledClaimsRerun">
                            Called Claims Rerun
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={toggleSidebarMobile}
                            to="/RcmActivityCalledClaimsOthers">
                            Called Claims Others
                          </NavLink>
                        </li>
                      </ul>
                    </Collapse>
                  </li>

                  <li>
                    <a
                      href="#/"
                      onClick={togglePaymentposting}
                      className={clsx({ active: paymentpostingOpen })}>
                      {/* <span className="sidebar-icon">
                  <AssessmentIcon />
                </span> */}
                      <span className="sidebar-item-label">
                        Payment Posting
                      </span>
                      <span className="sidebar-icon-indicator">
                        <ChevronRightTwoToneIcon />
                      </span>
                    </a>
                    <Collapse in={paymentpostingOpen}>
                      <ul>
                        <li>
                          <NavLink
                            onClick={toggleSidebarMobile}
                            to="/AllClaimsView">
                            All Claims View
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={toggleSidebarMobile}
                            to="/Writtenoff">
                            Written Off
                          </NavLink>
                        </li>
                        <li>
                          <NavLink onClick={toggleSidebarMobile} to="/Medicaid">
                            Medicaid
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={toggleSidebarMobile}
                            to="/PaidNotPosted">
                            Paid Not Posted
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={toggleSidebarMobile}
                            to="/InclusiveCodeDifference">
                            Inclusive Code Difference
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={toggleSidebarMobile}
                            to="/ResubmittedbyBiller">
                            Resubmitted by Biller
                          </NavLink>
                        </li>
                      </ul>
                    </Collapse>
                  </li>
                  <li>
                    <a
                      href="#/"
                      onClick={toggleppo}
                      className={clsx({ active: ppoOpen })}>
                      <span className="sidebar-item-label">PPO</span>
                      <span className="sidebar-icon-indicator">
                        <ChevronRightTwoToneIcon />
                      </span>
                    </a>
                    <Collapse in={ppoOpen}>
                      <ul>
                        <li>
                          <NavLink
                            onClick={toggleSidebarMobile}
                            to="/PPO30NotWork">
                            PPO 30 Called Not Worked
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={toggleSidebarMobile}
                            to="/PPO60NotWork">
                            PPO 60 Called Not Worked
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={toggleSidebarMobile}
                            to="/PPO90NotWork">
                            PPO 90 Called Not Worked
                          </NavLink>
                        </li>
                      </ul>
                    </Collapse>
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
                    <NavLink onClick={toggleSidebarMobile} to="/DailyScheduled">
                      Daily Scheduler Report
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={toggleSidebarMobile}
                      to="/RecallnoSchedule">
                      Recall Patient Report
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={toggleSidebarMobile}
                      to="/TreatmentReport">
                      Unscheduled Treatment Report
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
                    <NavLink
                      onClick={toggleSidebarMobile}
                      to="/DailyIncentiveReport">
                      Daily Incentive Report
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/QCReport">
                      Daily QC Tool Report
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
                    <NavLink onClick={toggleSidebarMobile} to="/Snippets">
                      Production and Collection
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={toggleSidebarMobile}
                      to="/ProviderCollections">
                      provider production and collection
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/Documents">
                      Document Center (Scanned docs)
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/BridgeDoc">
                      E-Bridge
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
                    <NavLink
                      onClick={toggleSidebarMobile}
                      to="/AccountingDashboard">
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={toggleSidebarMobile}
                      to="/ReconciliationReport">
                      Reconciliation Report
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/AccountChecks">
                      Check Deposit
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={toggleSidebarMobile}
                      to="/AccountsPayrole">
                      Payments
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={toggleSidebarMobile}
                      to="/AccountExpenses">
                      Expenses
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
                    <NavLink onClick={toggleSidebarMobile} to="/EV48Hours">
                      EV Performed 48 hours
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/EVonEmergency">
                      EV`s Performed on Emergency
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/EVnotPerformed">
                      EV`s Not Performed
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
