import { ButtonHTMLAttributes } from "react";
import { ReactNode } from "react";

type ButtonOkProps = {
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonOk = ({ children, ...rest }: ButtonOkProps) => {
    return (
        <button {...rest}>{children}</button>
    )
}

export default ButtonOk;