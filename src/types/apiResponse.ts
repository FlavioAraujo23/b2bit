export type UserCredentials = {
  email: string;
  password: string;
};

export type UserResponse = {
  user: {
    id: number;
    name: string;
    email: string;
    is_active: boolean;
    avatar: string | null;
    type: string;
    created: string;
    modified: string;
    role: string;
  };
  tokens: {
    refresh: string;
    access: string;
  };
};
