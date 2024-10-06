"use client";

import { useState } from "react";

export default function DashboardPage() {
  console.log("Dashboard client Component");
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Dashboard Page</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>Hello , {name}</div>
    </div>
  );
}
