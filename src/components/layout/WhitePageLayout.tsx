import { IonContent, IonPage } from "@ionic/react";
import { ReactNode } from "react";

interface WhitePageLayoutProps {
  children: ReactNode;
}

const WhitePageLayout: React.FC<WhitePageLayoutProps> = ({ children }) => {
  return (
    <IonPage>
      <IonContent>
        {children}
      </IonContent>
    </IonPage>
  );
};

export default WhitePageLayout;
