import { ButtonHTMLAttributes } from "react";
import { ReactNode } from "react";

// Componente desnecessário, pois não possui nenhuma alteração
// Componente deve estar dentro da pasta de components e não na atual "input"

type ButtonOkProps = {
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonOk = ({ children, ...rest }: ButtonOkProps) => {
    return (
        <button {...rest}>{children}</button>
    )
}

export default ButtonOk;