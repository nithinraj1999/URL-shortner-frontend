export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    color?: string;
    width?:string;
    isLoading?: boolean;
    disabled?: boolean;
    height?:string;
    
  }