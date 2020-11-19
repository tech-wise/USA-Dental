import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ClimbingBoxLoader } from 'react-spinners';

import { ThemeProvider } from '@material-ui/styles';

import MuiTheme from './theme';

// Layout Blueprints

import { LeftSidebar } from './layout-blueprints';

// Example Pages
import Login from './pages/Login';
import DashboardCommerce from './example-pages/DashboardCommerce';
import UsersList from './pages/UsersManagement/UsersList';
import AddNewUser from './pages/UsersManagement/AddNewUser';
import EditUser from './pages/UsersManagement/EditUser';
import AllModules from './pages/UsersManagement/AllModules';
import AddNewModule from './pages/UsersManagement/AddNewModule';
import EditModule from './pages/UsersManagement/EditModule';
import EditRole from './pages/UsersManagement/EditRole';
import AllRoles from './pages/UsersManagement/AllRoles';
import AddNewRole from './pages/UsersManagement/AddNewRole';
import ClaimsNotSentReport from './pages/CurrentBilling/ClaimsNotSentReport/ClaimsNotSent';
import AddNewClaim from './pages/CurrentBilling/ClaimsNotSentReport/AddNewClaim';
import EditClaim from './pages/CurrentBilling/ClaimsNotSentReport/EditClaim';
import ViewClaimReport from './pages/CurrentBilling/ClaimsNotSentReport/ViewClaimReport';
import ClaimsTFL from './pages/CurrentBilling/ClaimsApproachingTFL/ClaimsTFL';
import AddNewTFLClaim from './pages/CurrentBilling/ClaimsApproachingTFL/AddNewTFLClaim';
import EditTFLClaim from './pages/CurrentBilling/ClaimsApproachingTFL/EditTFLClaim';
import ViewTFLClaimReport from './pages/CurrentBilling/ClaimsApproachingTFL/ViewTFLClaimReport';
import RcmReportListing from './pages/ARManagement/RcmReport/RcmReportListing';
import VersionHistory from './pages/VersionsHistoryComponent';
import RcmReportView from './pages/ARManagement/RcmReport/RcmReportView';
import RcmActivityDashboard from './pages/ARManagement/ActivityReport/Dashboard';
import RcmActivityTotalClaims from './pages/ARManagement/ActivityReport/TotalClaims';
import RcmActivityWorkedonDashboard from './pages/ARManagement/ActivityReport/WorkedonDashboard';
import RcmActivityCalledClaimsRerun from './pages/ARManagement/ActivityReport/CalledClaimsRerun';
import RcmActivityCalledClaimsOthers from './pages/ARManagement/ActivityReport/CalledClaimsOthers';
import AllClaimsView from './pages/ARManagement/PaymentPosting/AllClaimsView';
import InclusiveCodeDifference from './pages/ARManagement/PaymentPosting/InclusiveCodeDifference';
import Medicaid from './pages/ARManagement/PaymentPosting/Medicaid';
import PaidNotPosted from './pages/ARManagement/PaymentPosting/PaidNotPosted';
import ResubmittedbyBiller from './pages/ARManagement/PaymentPosting/ResubmittedByBiller';
import Writtenoff from './pages/ARManagement/PaymentPosting/WrittenOff';
import PPO30NotWork from './pages/ARManagement/PPO/PPO30';
import PPO60NotWork from './pages/ARManagement/PPO/PPO60';
import PPO90NotWork from './pages/ARManagement/PPO/PPO90';
import PaymentAllClaimView from './pages/ARManagement/PaymentPosting/ListViews/AllClaimsView';
import WrittenoffView from './pages/ARManagement/PaymentPosting/ListViews/WrittenoffView';
import MedicaidView from './pages/ARManagement/PaymentPosting/ListViews/MedicaidView';
import PaidnotpostedView from './pages/ARManagement/PaymentPosting/ListViews/PaidnotpostedView';
import InclusivecodedifferenceView from './pages/ARManagement/PaymentPosting/ListViews/InclusivecodedifferenceView';
import ResubmittedclaimView from './pages/ARManagement/PaymentPosting/ListViews/ResubmittedclaimView';
import PPO90NotClaimView from './pages/ARManagement/PPO/PPOViews/PPO90NotClaimView';
import PPO30NotClaimView from './pages/ARManagement/PPO/PPOViews/PPO30NotClaimView';
import PPO60NotClaimView from './pages/ARManagement/PPO/PPOViews/PPO60NotClaimView';
import EditARReport from './pages/EditARReport';
import DailyScheduled from './pages/SchedulingModule/DailySchedulerReport/DailyScheduled';
import RecallnoSchedule from './pages/SchedulingModule/RecallDue/Recall';
import TreatmentReport from './pages/SchedulingModule/UnscheduledTreatmentReport/TreatmentReport';
import AddDailyScheduled from './pages/SchedulingModule/DailySchedulerReport/AddDailyScheduled';
import EditDailyScheduled from './pages/SchedulingModule/DailySchedulerReport/EditDailyScheduled';
import ViewDailyScheduled from './pages/SchedulingModule/DailySchedulerReport/ViewDailyScheduled';
import ViewTreatmentReport from './pages/SchedulingModule/UnscheduledTreatmentReport/ViewTreatmentReport';
import EditTreatmentReport from './pages/SchedulingModule/UnscheduledTreatmentReport/EditTreatmentReport';
import AddTreatmentReport from './pages/SchedulingModule/UnscheduledTreatmentReport/AddTreatmentReport';
import AddRecallDue from './pages/SchedulingModule/RecallDue/AddRecallDue';
import ViewRecallDue from './pages/SchedulingModule/RecallDue/ViewRecallDue';
import DailyIncentiveReport from './pages/IncentiveModule/DailyIncentiveReport/IncentiveReport';
import ViewIncentiveReport from './pages/IncentiveModule/DailyIncentiveReport/ViewIncentiveReport';
import QCReport from './pages/IncentiveModule/DailyQCReport/QCReport';
import AddQCReport from './pages/IncentiveModule/DailyQCReport/AddQCReport';
import EditQCReport from './pages/IncentiveModule/DailyQCReport/EditQCReport';
import Snippets from './pages/OfficeManagement/ProductionandCollection/Snippets';
import AddSnippets from './pages/OfficeManagement/ProductionandCollection/AddSnipets';
import EditSnippets from './pages/OfficeManagement/ProductionandCollection/EditSnippets';
import ViewSnippets from './pages/OfficeManagement/ProductionandCollection/ViewSnippets';
import ProviderCollections from './pages/OfficeManagement/ProviderProductionandcollection/ProviderCollections';
import ViewProviderCollections from './pages/OfficeManagement/ProviderProductionandcollection/ViewProviderCollections';
import Documents from './pages/OfficeManagement/DocumentCenter/Documents';
import AddDocument from './pages/OfficeManagement/DocumentCenter/AddDocument';
import BridgeDoc from './pages/OfficeManagement/EBridge/BridgeDoc';
import AddBridgeDoc from './pages/OfficeManagement/EBridge/AddBridgeDoc';
import EditBridgeDoc from './pages/OfficeManagement/EBridge/EditBridgeDoc';
import ARDashboard from './pages/ARManagement/ARDashboard/Dashboard';
import AccountingDashboard from './pages/Accounting/AccountingDashboard/Dashboard';
import ReconciliationReport from './pages/Accounting/ReconciliationReport/ReconciliationDashboard';
import AccountChecks from './pages/Accounting/CheckDeposit/Checks';
import AddAccountCheck from './pages/Accounting/CheckDeposit/AddCheck';
import ViewAccountCheck from './pages/Accounting/CheckDeposit/ViewCheck';
import EditAccountCheck from './pages/Accounting/CheckDeposit/EditCheck';
import AccountExpenses from './pages/Accounting/AccountExpenses/Expenses';
import AddExpenses from './pages/Accounting/AccountExpenses/AddExpenses';
import EditExpenses from './pages/Accounting/AccountExpenses/EditExpenses';
import ViewExpenses from './pages/Accounting/AccountExpenses/ViewExpenses';
import AccountsPayrole from './pages/Accounting/Payments/AccountsPayrole';
import EV48Hours from './pages/EligibilityVerification/EV48Hours';
import EVnotPerformed from './pages/EligibilityVerification/EVnotPerformed';
import EVonEmergency from 'pages/EligibilityVerification/EVonEmergency';
import ViewEV from './pages/EligibilityVerification/ViewEV';
import Profile from './pages/Profile';
import ViewUser from './pages/UsersManagement/ViewUser';
import AllClinic from './pages/ClinicManagement/AllClinic';
import AddNewClinic from './pages/ClinicManagement/AddNewClinic';
import EditClinic from './pages/ClinicManagement/EditClinic';
const PageAuthModals = lazy(() => import('./example-pages/PageAuthModals'));
const Tables = lazy(() => import('./example-pages/Tables'));
const Maps = lazy(() => import('./example-pages/Maps'));
const PageInvoice = lazy(() => import('./example-pages/PageInvoice'));
const Routes = () => {
  const location = useLocation();
  const pageVariants = {
    initial: {
      opacity: 0
    },
    in: {
      opacity: 1
    },
    out: {
      opacity: 0
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'linear',
    duration: 0.3
  };

  const SuspenseLoading = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
      let timeout = setTimeout(() => setShow(true), 300);
      return () => {
        clearTimeout(timeout);
      };
    }, []);

    return (
      <>
        <AnimatePresence>
          {show && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}>
              <div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
                <div className="d-flex align-items-center flex-column px-4">
                  <ClimbingBoxLoader color={'#3c44b1'} loading={true} />
                </div>
                <div className="text-muted font-size-xl text-center pt-3">
                  Please wait while we load the live preview examples
                  <span className="font-size-lg d-block text-dark">
                    This live preview instance can be slower than a real
                    production build!
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  };
  return (
    <ThemeProvider theme={MuiTheme}>
      <AnimatePresence>
        <Suspense fallback={<SuspenseLoading />}>
          <Switch>
            <Redirect exact from="/" to="/Login" />
            <Route path="/Login" component={Login} />
            <Route
              path={[
                '/Profile',
                '/DashboardCommerce',
                '/AllUsers',
                '/AddNewUser',
                '/EditUser',
                '/AllModules',
                '/AddNewModule',
                '/EditModule',
                '/AllRoles',
                '/AddNewRole',
                '/EditRole',
                '/AllClinics',
                '/AddNewClinic',
                '/EditClinic',
                '/ClaimsNotSentReport',
                '/ClaimsApproachingTFL',
                '/AddNewClaim',
                '/EditClaim',
                '/ViewClaimReport',
                '/AddNewTFLClaim',
                '/EditTFLClaim',
                '/ViewTFLClaimReport',
                '/ARDashboard',
                '/RcmReport',
                '/VersionsHistory',
                '/RcmReportView',
                '/RcmActivityDashboard',
                '/RcmActivityTotalClaims',
                '/RcmActivityWorkedonDashboard',
                '/CalledClaimsActivity',
                '/RcmActivityCalledClaimsRerun',
                '/RcmActivityCalledClaimsOthers',
                '/AllClaimsView',
                '/InclusiveCodeDifference',
                '/Medicaid',
                '/PaidNotPosted',
                '/ResubmittedbyBiller',
                '/Writtenoff',
                '/PPO30NotWork',
                '/PPO60NotWork',
                '/PPO90NotWork',
                '/PaymentAllClaimView',
                '/WrittenoffView',
                '/MedicaidView',
                '/PaidnotpostedView',
                '/InclusivecodedifferenceView',
                '/ResubmittedclaimView',
                '/PPO90NotClaimView',
                '/PPO60NotClaimView',
                '/PPO30NotClaimView',
                '/EditARReport',
                '/DailyScheduled',
                '/AddDailyScheduled',
                '/EditDailyScheduled',
                '/ViewDailyScheduled',
                '/RecallnoSchedule',
                '/TreatmentReport',
                '/ViewTreatmentReport',
                '/EditTreatmentReport',
                '/AddTreatmentReport',
                '/AddRecallDue',
                '/ViewRecallDue',
                '/DailyIncentiveReport',
                '/ViewIncentiveReport',
                '/QCReport',
                '/AddQCReport',
                '/EditQCReport',
                '/Snippets',
                '/AddSnippets',
                '/EditSnippets',
                '/ViewSnippets',
                '/ViewProviderCollections',
                '/Documents',
                '/AddDocument',
                '/ProviderCollections',
                '/BridgeDoc',
                '/AddBridgeDoc',
                '/EditBridgeDoc',
                '/AccountingDashboard',
                '/ReconciliationReport',
                '/AccountChecks',
                '/AddAccountCheck',
                '/EditAccountCheck',
                '/ViewAccountCheck',
                '/AccountExpenses',
                '/AddExpenses',
                '/EditExpenses',
                '/ViewExpenses',
                '/AccountsPayrole',
                '/EV48Hours',
                '/EVnotPerformed',
                '/EVonEmergency',
                '/ViewEV',
                '/ViewUser',
                '/PageAuthModals',
                '/Tables',
                '/Maps',
                '/PageInvoice'
              ]}>
              <LeftSidebar>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <Route
                      path="/Profile"
                      component={Profile}
                    />
                    <Route
                      path="/DashboardCommerce"
                      component={DashboardCommerce}
                    />
                    <Route path="/AllUsers" component={UsersList} />
                    <Route path="/AddNewUser" component={AddNewUser} />
                    <Route path="/EditUser" component={EditUser} />
                    <Route path="/AllModules" component={AllModules} />
                    <Route path="/AddNewModule" component={AddNewModule} />
                    <Route path="/EditModule" component={EditModule} />
                    <Route path="/EditRole" component={EditRole} />
                    <Route path="/AllRoles" component={AllRoles} />
                    <Route path="/AddNewRole" component={AddNewRole} />
                    <Route path="/ViewUser" component={ViewUser} />
                    <Route path="/AllClinics" component={AllClinic} />
                    <Route path="/AddNewClinic" component={AddNewClinic} />
                    <Route path="/EditClinic" component={EditClinic} />
                    <Route
                      path="/ClaimsNotSentReport"
                      component={ClaimsNotSentReport}
                    />
                    <Route path="/ClaimsApproachingTFL" component={ClaimsTFL} />
                    <Route path="/AddNewClaim" component={AddNewClaim} />
                    <Route
                      path="/ViewClaimReport"
                      component={ViewClaimReport}
                    />
                    <Route path="/EditClaim" component={EditClaim} />
                    <Route path="/AddNewTFLClaim" component={AddNewTFLClaim} />
                    <Route path="/EditTFLClaim" component={EditTFLClaim} />
                    <Route
                      path="/ViewTFLClaimReport"
                      component={ViewTFLClaimReport}
                    />
                    <Route path="/RcmReport" component={RcmReportListing} />
                    <Route path="/VersionsHistory" component={VersionHistory} />
                    <Route path="/RcmReportView" component={RcmReportView} />
                    <Route
                      path="/RcmActivityDashboard"
                      component={RcmActivityDashboard}
                    />
                    <Route
                      path="/RcmActivityTotalClaims"
                      component={RcmActivityTotalClaims}
                    />
                    <Route path="/ARDashboard" component={ARDashboard} />
                    <Route
                      path="/RcmActivityWorkedonDashboard"
                      component={RcmActivityWorkedonDashboard}
                    />
                    <Route
                      path="/RcmActivityCalledClaimsRerun"
                      component={RcmActivityCalledClaimsRerun}
                    />
                    <Route
                      path="/RcmActivityCalledClaimsOthers"
                      component={RcmActivityCalledClaimsOthers}
                    />
                    <Route path="/AllClaimsView" component={AllClaimsView} />
                    <Route
                      path="/InclusiveCodeDifference"
                      component={InclusiveCodeDifference}
                    />
                    <Route path="/Medicaid" component={Medicaid} />
                    <Route path="/PaidNotPosted" component={PaidNotPosted} />
                    <Route
                      path="/ResubmittedbyBiller"
                      component={ResubmittedbyBiller}
                    />
                    <Route path="/WrittenoffView" component={WrittenoffView} />

                    <Route path="/Writtenoff" component={Writtenoff} />
                    <Route path="/PPO30NotWork" component={PPO30NotWork} />
                    <Route path="/PPO60NotWork" component={PPO60NotWork} />
                    <Route path="/PPO90NotWork" component={PPO90NotWork} />
                    <Route
                      path="/PaymentAllClaimView"
                      component={PaymentAllClaimView}
                    />
                    <Route path="/MedicaidView" component={MedicaidView} />
                    <Route
                      path="/PaidnotpostedView"
                      component={PaidnotpostedView}
                    />
                    <Route
                      path="/InclusivecodedifferenceView"
                      component={InclusivecodedifferenceView}
                    />
                    <Route
                      path="/ResubmittedclaimView"
                      component={ResubmittedclaimView}
                    />
                    <Route
                      path="/PPO90NotClaimView"
                      component={PPO90NotClaimView}
                    />
                    <Route
                      path="/PPO60NotClaimView"
                      component={PPO60NotClaimView}
                    />
                    <Route
                      path="/PPO30NotClaimView"
                      component={PPO30NotClaimView}
                    />
                    <Route path="/DailyScheduled" component={DailyScheduled} />
                    <Route
                      path="/RecallnoSchedule"
                      component={RecallnoSchedule}
                    />
                    <Route
                      path="/TreatmentReport"
                      component={TreatmentReport}
                    />
                    <Route
                      path="/AddDailyScheduled"
                      component={AddDailyScheduled}
                    />
                    <Route
                      path="/EditDailyScheduled"
                      component={EditDailyScheduled}
                    />
                    <Route
                      path="/ViewDailyScheduled"
                      component={ViewDailyScheduled}
                    />
                    <Route
                      path="/ViewTreatmentReport"
                      component={ViewTreatmentReport}
                    />
                    <Route
                      path="/EditTreatmentReport"
                      component={EditTreatmentReport}
                    />
                    <Route
                      path="/AddTreatmentReport"
                      component={AddTreatmentReport}
                    />
                    <Route
                      path="/DailyIncentiveReport"
                      component={DailyIncentiveReport}
                    />
                    <Route path="/ViewProviderCollections" component={ViewProviderCollections} />
                    <Route path="/ProviderCollections" component={ProviderCollections} />
                    <Route path="/AddSnippets" component={AddSnippets} />
                    <Route path="/Snippets" component={Snippets} />
                    <Route path="/EditSnippets" component={EditSnippets} />
                    <Route path="/ViewSnippets" component={ViewSnippets} />
                    <Route path="/EditQCReport" component={EditQCReport} />
                    <Route path="/AddQCReport" component={AddQCReport} />
                    <Route path="/QCReport" component={QCReport} />
                    <Route path="/ViewIncentiveReport" component={ViewIncentiveReport} />
                    <Route path="/AddRecallDue" component={AddRecallDue} />
                    <Route path="/EditARReport" component={EditARReport} />
                    <Route path="/ViewRecallDue" component={ViewRecallDue} />
                    <Route path="/Documents" component={Documents} />
                    <Route path="/AddDocument" component={AddDocument} />
                    <Route path="/BridgeDoc" component={BridgeDoc} />
                    <Route path="/AddBridgeDoc" component={AddBridgeDoc} />
                    <Route path="/EditBridgeDoc" component={EditBridgeDoc} />
                    <Route path="/AccountingDashboard" component={AccountingDashboard} />
                    <Route path="/ReconciliationReport" component={ReconciliationReport} />
                    <Route path="/AccountChecks" component={AccountChecks} />
                    <Route path="/AddAccountCheck" component={AddAccountCheck} />
                    <Route path="/EditAccountCheck" component={EditAccountCheck} />
                    <Route path="/ViewAccountCheck" component={ViewAccountCheck} />
                    <Route path="/AccountExpenses" component={AccountExpenses} />
                    <Route path="/AddExpenses" component={AddExpenses} />
                    <Route path="/EditExpenses" component={EditExpenses} />
                    <Route path="/ViewExpenses" component={ViewExpenses} />
                    <Route path="/AccountsPayrole" component={AccountsPayrole} />
                    <Route path="/EV48Hours" component={EV48Hours} />
                    <Route path="/EVnotPerformed" component={EVnotPerformed} />
                    <Route path="/EVonEmergency" component={EVonEmergency} />
                    <Route path="/ViewEV" component={ViewEV} />
                    <Route path="/PageAuthModals" component={PageAuthModals} />
                    <Route path="/Tables" component={Tables} />
                    <Route path="/Maps" component={Maps} />
                    <Route path="/PageInvoice" component={PageInvoice} />
                  </motion.div>
                </Switch>
              </LeftSidebar>
            </Route>
          </Switch>
        </Suspense>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default Routes;
