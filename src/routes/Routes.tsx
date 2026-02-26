import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { IonRouterOutlet } from "@ionic/react";
import { LoadingOverlay } from "../components/LoadingOverlay";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import NotFound from "../pages/NotFound";
import Landing from "../pages/landing/page";
import Tracking from "../pages/tracking/page";
import AdminList from "../pages/admin/list";
import AdminTracking from "../pages/admin/page";
import AdminEdit from "../pages/admin/edit";
import ClickNShip from "../pages/click-n-ship/page";
import InformedDelivery from "../pages/informed-delivery/page";
import Stamps from "../pages/stamps/page";
import Locations from "../pages/locations/page";
import CalculatePrice from "../pages/calculate-price/page";
import SchedulePickup from "../pages/schedule-pickup/page";
import POBoxes from "../pages/po-boxes/page";
import Help from "../pages/help/page";
import Contact from "../pages/contact/page";

const withSuspense = <T extends Record<string, any>>(Component: React.ComponentType<T>) => 
  (props: T) => (
    <Suspense fallback={<LoadingOverlay isVisible={true} />}>
      <Component {...props} />
    </Suspense>
  );

const Routes: React.FC = () => {
  return (
    <IonRouterOutlet>
      <Switch>
        <Route exact path="/" component={withSuspense(Landing)} />
        <Route exact path="/tracking" component={withSuspense(Tracking)} />
        <Route exact path="/click-n-ship" component={withSuspense(ClickNShip)} />
        <Route exact path="/informed-delivery" component={withSuspense(InformedDelivery)} />
        <Route exact path="/stamps" component={withSuspense(Stamps)} />
        <Route exact path="/locations" component={withSuspense(Locations)} />
        <Route exact path="/calculate-price" component={withSuspense(CalculatePrice)} />
        <Route exact path="/schedule-pickup" component={withSuspense(SchedulePickup)} />
        <Route exact path="/po-boxes" component={withSuspense(POBoxes)} />
        <Route exact path="/help" component={withSuspense(Help)} />
        <Route exact path="/contact" component={withSuspense(Contact)} />
        <Route exact path="/admin" component={withSuspense(AdminList)} />
        <Route exact path="/admin/create" component={withSuspense(AdminTracking)} />
        <Route exact path="/admin/edit/:trackingNumber" component={withSuspense(AdminEdit)} />
        <Redirect to="/" />
      </Switch>
    </IonRouterOutlet>
  );
};

export default Routes;
