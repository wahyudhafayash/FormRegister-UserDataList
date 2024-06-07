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
  username: string;
  email: string;
  password: string;
}
