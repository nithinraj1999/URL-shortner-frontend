import { ButtonProps } from './interfaces/IButton';

const Button = (props:ButtonProps) => {
  return (
    <div>
      <button className={`${props.color} ${props.width} ${props.height} `}>
        {props.label}
      </button>
    </div>
  )
}

export default Button
