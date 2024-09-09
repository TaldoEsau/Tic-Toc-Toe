import { HtmlHTMLAttributes } from "react";
import { InputHTMLAttributes } from "react";
import { ChangeEvent } from "react";

// Componente desnecessário, pois não possui nenhuma alteração

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Inpute = ({...rest}: InputProps) => {
return (
    <input {...rest} />
)
}

export default Inpute;