import React from "react";
import { RouteObject, createHashRouter } from "react-router-dom";
import { Challenges } from "./challenges-component";
import { CHALLENGES } from "./challenges";

const challengesRoutes = CHALLENGES.map((c): RouteObject => {
  const Element = require(`./${c.url}`).default as React.FC;

  return {
    path: `/${c.url}`,
    element: <Element />,
  };
});

console.log(challengesRoutes);

export const router = createHashRouter([
  {
    path: "/",
    element: <Challenges />,
  },
  ...challengesRoutes,
  {
    path: "*",
    element: <>Not found</>,
  },
]);
