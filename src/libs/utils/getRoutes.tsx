import { ReactElement } from "react";
import { Route } from "react-router-dom";
import { Route as RouteModel } from "../models/route";

export function getRoutes(routes: RouteModel[]): ReactElement[] {
  return routes.map(({ path, component }: RouteModel) => {
    const Module = component;
    return (
      <Route
        path={path}
        key={`router:${path}`}
        element={<Module />}
      />
    );
  });
};
