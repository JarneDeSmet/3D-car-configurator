import { FC, ChangeEvent } from "react";

type FormInputProps = {
    label: string;
    type: string;
    name: string;
    id: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const FormInput: FC<FormInputProps> = (props) => {
    const { label, type, name, id, value, onChange } = props;
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input type={type} name={name} id={id} value={value} onChange={onChange} />
        </>
    );
};

export default FormInput;
