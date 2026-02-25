import { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ 
  children, 
  onClick, 
  disabled 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 px-4 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
};
