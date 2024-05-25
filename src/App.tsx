import React from "react";
import type { RouteRecord } from "vite-react-ssg";
// import "./App.css";
import "./output.css";

const Layout = React.lazy(() => import("./Layout"));

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "a",
        Component: React.lazy(() => import("./pages/a")),
        entry: "src/pages/a.tsx",
      },
      {
        index: true,
        Component: React.lazy(() => import("./pages/index")),
        entry: "src/pages/index.tsx",
      },
      {
        path: "posts/:id",
        Component: React.lazy(() => import("./pages/posts/[b]")),
        entry: "src/pages/posts/[b].tsx",
        getStaticPaths: () => ["posts/b1", "posts/b2"],
      },
    ],
    entry: "src/Layout.tsx",
  },
];
