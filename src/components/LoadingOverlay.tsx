import { IonSpinner } from "@ionic/react";

interface LoadingOverlayProps {
  isVisible: boolean;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="relative">
        <img 
          src="/assets/logo-full.png" 
          alt="USPS Premium" 
          className="w-32 h-32 object-contain"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <IonSpinner 
            name="circular" 
            className="w-40 h-40 text-blue-900"
          />
        </div>
      </div>
    </div>
  );
};
