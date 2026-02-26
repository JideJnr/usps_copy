import React, { Suspense, useEffect }  from "react";
import { IonApp, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Capacitor } from '@capacitor/core';

import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "./index.css";

document.documentElement.classList.add('ion-palette-light');

import { LoadingOverlay } from "./components/LoadingOverlay";
import Routes from "./routes/Routes";

setupIonicReact({
  mode: 'md'
});

const AppContent: React.FC = () => {
  return (
    <Suspense fallback={<LoadingOverlay isVisible={true} />}>
      <Routes />
    </Suspense>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    const initApp = async () => {
      if (Capacitor.isNativePlatform()) {
        const { SplashScreen } = await import('@capacitor/splash-screen');
        await SplashScreen.hide();
      }
    };
    
    initApp();
  }, []);


  return (
    <IonApp>
      <IonReactRouter>
          <AppContent />
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
