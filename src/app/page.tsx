import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This landing page of this website</p>
      <Link href="/dashboard">Go To The Dashboard</Link>
    </div>
  );
};

export default Home;
