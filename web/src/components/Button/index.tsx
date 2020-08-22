import React, {ButtonHTMLAttributes} from 'react';


interface ButtonProps {
    name: string;
    type: "submit" | "button";
}


const Button: React.FC<ButtonProps> = ({ name, type }) => {
    return (
        <button type={type}>{name}</button>
    );
}

export default Button;