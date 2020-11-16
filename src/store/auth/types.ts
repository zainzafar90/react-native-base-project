// --- Auth Root State --- //
export type AuthState = {
  data: AuthData | null;
  error: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
};

export interface Credentials {
  email: string;
  password: string;
}

export type AuthData = {
  token: string;
  user: User;
};

export type User = {
  email: string;
};
