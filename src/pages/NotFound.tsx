import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { IonPage, IonContent } from "@ionic/react";

const NotFound: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    const role = localStorage.getItem('role');
    const token = localStorage.getItem('token');
    
    const timer = setTimeout(() => {
      if (token && role) {
        if (role === 'ADMINISTRATOR') history.replace('/admin');
        else if (role === 'ACCOUNT_OFFICER') history.replace('/officer');
        else if (role === 'CUSTOMER') history.replace('/dashboard');
      } else {
        history.replace('/');
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [history]);

  return (
    <IonPage>
      <IonContent>
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-2">Page Not Found</p>
          <p className="text-sm text-gray-500">Redirecting...</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default NotFound;
