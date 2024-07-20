// Interface for Button component props
export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: string;
  className?: string;
}

// Interface for InputField component props
export interface InputFieldProps {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Interface for CheckBox component props
export interface CheckBoxProps {
  id: string;
  label: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Interface for RegisterLinks component props
export interface RegisterLinksProps {
  text: string;
  link: string;
  linkTo: string;
}

// Interface for Seprator component props
export interface SepratorProps {
  text: string;
}

// Interface for SocialButton component props
export interface SocialButtonProps {
  type: "facebook" | "twitter" | "linkedin";
  onClick?: () => void;
}
