"use client";

import { useState } from "react";

export const ClientComponentTwo = () => {
  const [name, setNmae] = useState("Batman");
  return <h1>Client component two</h1>;
};
