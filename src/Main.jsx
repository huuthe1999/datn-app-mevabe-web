// libs
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
// components
import AppLayout from "@/components/AppLayout";
import PageTitle from "./components/PageTitle";
import NonUserRoute from "./components/NonUserRoute";
import PrivateRoute from "./components/PrivateRoute";
import ResetReducer from "./components/ResetReducer";
import MainSpinner from "./components/MainSpinner";
import ChildList from "./components/ChildList";
// providers
import AppProviders from "./providers";
// routers
import {
  privateRoutes,
  publicRoutes,
  nonUserRoutes,
  modalRoutes,
} from "@/routers";
import { NotFound } from "@/routers/lazyRoutes";
// hooks
import { useRouter } from "./hooks";
// others
import { doAxiosResponseIntercept } from "./configs/api";

const Main = () => {
  const router = useRouter();
  const { location } = router;
  const background = location.state && location.state.background;

  doAxiosResponseIntercept({ router });

  return (
    <AppProviders>
      <AppLayout>
        <PageTitle />
        <div className="main-wrapper">
          <Suspense fallback={<MainSpinner />}>
            <Switch location={background || location}>
              {publicRoutes.map(({ ...route }) => (
                <Route {...route} key={route.path} />
              ))}
              {nonUserRoutes.map(({ ...route }) => (
                <NonUserRoute {...route} key={route.path} />
              ))}
              {privateRoutes.map(({ ...route }) => (
                <PrivateRoute {...route} key={route.path} />
              ))}
              <Route component={NotFound} />
            </Switch>
          </Suspense>
          {background && (
            <Switch>
              {modalRoutes.map(({ ...route }) => (
                <Route {...route} key={route.path} />
              ))}
            </Switch>
          )}

          <ResetReducer />
          <ChildList />
        </div>
      </AppLayout>
    </AppProviders>
  );
};

export default Main;
