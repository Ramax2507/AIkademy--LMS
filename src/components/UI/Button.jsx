// Button.jsx placeholder
import React from 'react';
import classNames from 'classnames';

const Button = ({
  children,
  type = 'button',
  onClick,
  variant = 'primary',
  className = '',
  disabled = false,
}) => {
  const baseStyles =
    'px-4 py-2 rounded-md font-medium focus:outline-none transition duration-200';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    ghost: 'bg-transparent text-blue-600 hover:underline',
  };

  const classes = classNames(
    baseStyles,
    variants[variant],
    className,
    disabled && 'opacity-50 cursor-not-allowed'
  );

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
