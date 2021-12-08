import React, { useState } from "react";

export default function Hook() {
  const [count, useCount] = useState("");

  return (
    <div>
      <div>{count}</div>
      <button></button>
    </div>
  );
}
