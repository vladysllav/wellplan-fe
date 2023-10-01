import React from 'react';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    variant = 'primary',
    type = 'button',
    disabled = false,
    style = {},
}) => {
    const buttonStyles = {
        primary: 'text-white py-2 px-4 rounded-full bg-indigo-900',
        secondary: 'text-black py-2 px-4 rounded-full bg-gray-300',
    };

    return (
        <button
            type={type}
            className={`${buttonStyles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
            disabled={disabled}
            onClick={onClick}
            style={style}
        >
            {label}
        </button>
    );
};

export default Button;
