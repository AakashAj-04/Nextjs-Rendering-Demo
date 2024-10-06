"use client";

import { useState } from "react";
import { ServerComponentOne } from "./server-component-one";

export const ClientComponentOne = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [name, setNmae] = useState("Batman");
  return (
    <>
      <h1>Client component One</h1>
      {children}
    </>
  );
};
