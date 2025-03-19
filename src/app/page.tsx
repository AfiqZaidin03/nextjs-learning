"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const router = useRouter();

  const navigate = (page: string) => {
    router.push(`${page}`);
    router.refresh(); // refresh page
  };

  return (
    <main>
      <button onClick={() => navigate("login")}>Go To The Login Page</button>
      <Link href="/about">About</Link>
      <button onClick={() => router.push("/colors")}>Go To Colors</button>
    </main>
  );
};

export default Home;
