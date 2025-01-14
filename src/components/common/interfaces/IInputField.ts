export interface IInputFieldProps {
    type: string;
    id?:string;
    placeholder?: string;
    name?:string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    height?:string;
    width?:string;
  }
  