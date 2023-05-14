import React from 'react'
import { IconType } from 'react-icons';

interface AuthSocialButtonProps {
    icon: IconType;
    onClick: () => void;
}

const AuthSocialButton:React.FC<AuthSocialButtonProps> = ({
    icon:Icon,
    onClick
}) => {
  return (
    <button
    type="button"
    onClick={onClick}
    className="flex items-center justify-center w-full px-4 py-2 border hover:bg-gray-50 border-gray-500 rounded-md shadow-sm text-base font-medium text-gray-800 bg-white"
    >
    <Icon />
    </button>
  )
}

export default AuthSocialButton