"use client";

import { useState } from "react";
// import { UI } from "./section/ui";

export function Game() {
  const [content, setContent] = useState("");
  async function getData() {
    const res = await fetch("/api/ai");
    const data = await res.json();
    console.log(data)
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4 w-screen h-screen overflow-hidden">
      {content && (
        <div className="bg-surface p-4 rounded-md whitespace-pre container">
          {content}
        </div>
      )}
      <button className="btn" onClick={getData}>
        <span>Fetch</span>
      </button>
      {/* <UI/> */}
    </div>
  );
}
