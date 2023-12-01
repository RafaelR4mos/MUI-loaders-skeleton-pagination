export interface postType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface userType {
  id: number;
  name: string;
  username: string;
  email: string;
  address: unknown;
}
