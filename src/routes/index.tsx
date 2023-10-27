import { lazy, Fragment, LazyExoticComponent, Suspense } from "react";
import { Route, Outlet } from "react-router-dom";
const DefaultGuard = lazy(async () => import("../guards/AuthGuard"));
import Loading from "@/components/Loading";

interface RouteProps {
  path?: string;
  element?: LazyExoticComponent<() => JSX.Element> | null;
  layout?: LazyExoticComponent<
    (props: { children: React.ReactNode }) => JSX.Element
  > | null;
  guard?: LazyExoticComponent<
    (props: {
      children: React.ReactNode;
      roles?: string[] | string | null;
    }) => JSX.Element
  > | null;
  roles?: string[] | string | null | undefined;
  children?: RouteProps[];
}

const renderRoutes = (routes: RouteProps[]) => {
  return routes.map((route, i) => {
    const Component = route.element || Fragment;
    const Layout = route.layout || Fragment;
    const Guard = route.guard || DefaultGuard;
    const Roles = route.roles || "";
    return (
      <Route
        key={i}
        path={route.path}
        element={
          <Suspense fallback={<Loading />}>
            <Guard roles={Roles}>
              <Layout>{route.children ? <Outlet /> : <Component />}</Layout>
            </Guard>
          </Suspense>
        }
      >
        {route.children && renderRoutes(route.children)}
      </Route>
    );
  });
};

export default renderRoutes;

export const routes: RouteProps[] = [
  {
    layout: lazy(async () => import("../layouts/AdminLayout")),
    guard: lazy(async () => import("../guards/AuthGuard")),
    children: [
      {
        roles: ["admin", "moderator"],
        path: "/",
        element: lazy(async () => import("../pages/Home")),
      },
      {
        roles: ["admin"],
        path: "/dashboard",
        element: lazy(async () => import("../pages/Dashboard")),
        // layout: lazy(async () => import("../layouts/AdminLayout")),
      },
      {
        roles: ["admin"],
        path: "/box",
        element: lazy(async () => import("../pages/Box")),
        // layout: lazy(async () => import("../layouts/AdminLayout")),
      },
    ],
  },
  {
    layout: lazy(async () => import("../layouts/GuestLayout")),
    // guard: lazy(async () => import("../guards/GuestGuard")),
    children: [
      {
        path: "/contact",
        element: lazy(async () => import("../pages/Contact")),
      },
      {
        path: "/login",
        element: lazy(async () => import("../pages/Login")),
      },
      {
        path: "/reset-password",
        element: lazy(async () => import("../pages/ResetPassword")),
      },
    ],
  },
];
