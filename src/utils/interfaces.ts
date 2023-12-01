export interface UsersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserType[];
  support: SupportType;
}

export interface UserType {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface SupportType {
  url: string;
  text: string;
}
