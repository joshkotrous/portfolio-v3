import React, { useState, useEffect } from "react";
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
        index: true,
        Component: React.lazy(() => import("./pages/index")),
        entry: "src/pages/index.tsx",
      },
      {
        path: "posts/:postName",
        Component: React.lazy(() => import("./pages/posts/[post]")),
        entry: "src/pages/posts/[post].tsx",
        getStaticPaths: () => [
          "/posts/Leading-Effective-1:1s-as-an-Engineering-Manager",
        ],
      },
    ],
    entry: "src/Layout.tsx",
  },
];
