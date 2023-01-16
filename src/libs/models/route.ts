import { ComponentType, FC } from 'react';

export interface Route {
  path: string;
  exact: boolean;
//   middlewares?: RouteMiddleware[];
  component: FC | ComponentType;
  innerRoutes?: Route[];
}