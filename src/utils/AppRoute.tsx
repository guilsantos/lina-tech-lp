import React from "react";
import { Route } from "react-router-dom";

const AppRoute = ({ component: Component, layout: Layout, ...rest }: any) => {
  Layout =
    Layout === undefined ? (props: any) => <>{props.children}</> : Layout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default AppRoute;
