export interface IRoute {
  exact?: boolean;
  path: string;
  name: string;
  component: React.ElementType;
}
