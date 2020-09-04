import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ClimbingBoxLoader } from 'react-spinners';

import { ThemeProvider } from '@material-ui/styles';

import MuiTheme from './theme';

// Layout Blueprints

import {
  LeftSidebar,
  CollapsedSidebar,
  
} from './layout-blueprints';

// Example Pages

import DashboardMonitoring from './example-pages/DashboardMonitoring';
import DashboardCommerce from './example-pages/DashboardCommerce';
import DashboardAnalytics from './example-pages/DashboardAnalytics';
import DashboardStatistics from './example-pages/DashboardStatistics';
import UsersList from './pages/UsersManagement/UsersList';
import AddNewUser from './pages/UsersManagement/AddNewUser';
import EditUser from './pages/UsersManagement/EditUser';
import AllModules from './pages/UsersManagement/AllModules';
import AddNewModule from './pages/UsersManagement/AddNewModule';
import EditModule from './pages/UsersManagement/EditModule';
import EditRole from './pages/UsersManagement/EditRole';
import AllRoles from './pages/UsersManagement/AllRoles';
import AddNewRole from './pages/UsersManagement/AddNewRole';
import ClaimsNotSentReport from './pages/CurrentBilling/ClaimsNotSentReport';
import ClaimsApproachingTFL from './pages/CurrentBilling/ClaimsApproachingTFL';
const PageCalendar = lazy(() => import('./example-pages/PageCalendar'));
const PageChat = lazy(() => import('./example-pages/PageChat'));
const PageProjects = lazy(() => import('./example-pages/PageProjects'));
const PageFileManager = lazy(() => import('./example-pages/PageFileManager'));


const PageAuthModals = lazy(() => import('./example-pages/PageAuthModals'));
const Tables = lazy(() => import('./example-pages/Tables'));
const Maps = lazy(() => import('./example-pages/Maps'));
const PageProfile = lazy(() => import('./example-pages/PageProfile'));
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
            <Redirect exact from="/" to="/DashboardCommerce" />
            <Route
              path={[
                '/DashboardMonitoring',
                '/DashboardCommerce',
                '/DashboardAnalytics',
                '/DashboardStatistics',
                '/AllUsers',
                '/AddNewUser',
                '/EditUser',
                '/AllModules',
                '/AddNewModule',
                '/EditModule',
                '/AllRoles',
                '/AddNewRole',
                '/EditRole',
                '/ClaimsNotSentReport',
                '/ClaimsApproachingTFL',
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
                      path="/DashboardMonitoring"
                      component={DashboardMonitoring}
                    />
                    <Route
                      path="/DashboardCommerce"
                      component={DashboardCommerce}
                    />
                    <Route
                      path="/DashboardAnalytics"
                      component={DashboardAnalytics}
                    />
                    <Route
                      path="/DashboardStatistics"
                      component={DashboardStatistics}
                    />
                    <Route
                      path="/AllUsers"
                      component={UsersList}
                    />
                    <Route
                      path="/AddNewUser"
                      component={AddNewUser}
                    />
                    <Route
                      path="/EditUser"
                      component={EditUser}
                    />
                    <Route
                      path="/AllModules"
                      component={AllModules}
                    />
                    <Route
                      path="/AddNewModule"
                      component={AddNewModule}
                    />
                    <Route
                      path="/EditModule"
                      component={EditModule}
                    />
                    <Route
                      path="/EditRole"
                      component={EditRole}
                    />
                    <Route
                      path="/AllRoles"
                      component={AllRoles}
                    />
                    <Route
                      path="/AddNewRole"
                      component={AddNewRole}
                    />
                    <Route
                      path="/ClaimsNotSentReport"
                      component={ClaimsNotSentReport}
                    />
                    <Route
                      path="/ClaimsApproachingTFL"
                      component={ClaimsApproachingTFL}
                    />
                    <Route path="/PageAuthModals" component={PageAuthModals} />
                    <Route path="/Tables" component={Tables} />
                    <Route path="/Maps" component={Maps} />
                    <Route path="/PageInvoice" component={PageInvoice} />
                  </motion.div>
                </Switch>
              </LeftSidebar>
            </Route>
            <Route
              path={[
                '/PageCalendar',
                '/PageChat',
                '/PageProjects',
                '/PageFileManager',
                '/PageProfile'
              ]}>
              <CollapsedSidebar>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <Route path="/PageCalendar" component={PageCalendar} />
                    <Route path="/PageChat" component={PageChat} />
                    <Route path="/PageProjects" component={PageProjects} />
                    <Route
                      path="/PageFileManager"
                      component={PageFileManager}
                    />
                    <Route path="/PageProfile" component={PageProfile} />
                  </motion.div>
                </Switch>
              </CollapsedSidebar>
            </Route>
          </Switch>
        </Suspense>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default Routes;
