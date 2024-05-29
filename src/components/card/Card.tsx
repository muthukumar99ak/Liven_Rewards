// Pre-defined
import { PropsWithChildren } from "react";
// Types
import { CardProps } from "../../types/components/CardProps";
// SCSS
import style from "./Card.module.scss";

const Card = ({ 
    children,
    ctrCls,
    onClick = () => undefined
}: PropsWithChildren<CardProps>) => {
    return (
        <div 
            className={`${style.container} ${ctrCls}`}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export default Card;