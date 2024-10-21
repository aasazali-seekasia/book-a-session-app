import { ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
  name: string;
  inputElementProps: ComponentPropsWithoutRef<"input">;
};

export default function Input({ label, id, inputElementProps }: InputProps) {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <input name={id} id={id} {...inputElementProps} />
    </div>
  );
}
