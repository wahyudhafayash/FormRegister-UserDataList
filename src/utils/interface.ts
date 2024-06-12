export interface RegisterFormProps {
  userId?: string;
  onSuccess?: () => void;
}

export interface UserListProps {
  id: string;
  name: string;
  email: string;
}

export interface RegisterFormValues {
  name: string | number | readonly string[] | undefined;

  email: string;
  password: string;
}

export interface InputProps {
  id: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}
