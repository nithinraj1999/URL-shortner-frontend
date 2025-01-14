import React from 'react'
import { IInputFieldProps } from './interfaces/IInputField'
const InputField:React.FunctionComponent<IInputFieldProps> = (props:IInputFieldProps) => {
  return (
    <div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        className={`${props.width} ${props.height} outline-none p-2 border-2	` }
      />
    </div>
  );
}

export default InputField
