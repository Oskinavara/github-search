export interface User {
  login: string;
  repos_url: string;
  id: number;
  repositories: Repository[];
}

export interface Repository {
  name: string;
  description: string;
  stargazers_count: number;
  id: number;
  html_url: string;
}
