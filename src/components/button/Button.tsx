// Pre-defined
import { PropsWithChildren } from 'react';
// Types
import { ButtonProps } from '../../types/components/ButtonProps';
// SCSS
import style from './Button.module.scss';

const Button = ({
    ctrCls = "",
    children = "",
    disabled = false,
    onClick
}: PropsWithChildren<ButtonProps>) => {
    return (
        <button
            disabled={disabled}
            className={`${style.customButton} ${ctrCls}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;