"use client";
import { useRouter } from "next/navigation";
import React from "react";

const PageOne = () => {
  const router = useRouter();

  const goToPage2 = () => router.push("/page2");

  return (
    <div>
      <h1>This is page 1</h1>
      <br />
      <button onClick={goToPage2}>Go To Page 2</button>
    </div>
  );
};

export default PageOne;
