import { HtmlHTMLAttributes } from "react";
import { InputHTMLAttributes } from "react";
import { ChangeEvent } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Inpute = ({...rest}: InputProps) => {
return (
    <input {...rest} />
)
}

export default Inpute;