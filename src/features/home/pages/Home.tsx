import React from "react";
import "./home.scss";
import HomeHeader from "../components/header/Header";
import Aside from "../components/sidebar/Aside";

const Home: React.FC = () => {
  return (
    <main className="grid grid-cols-12 h-screen">
      <section className="col-span-2 border-e-1">
        <Aside />
      </section>
      <section className="col-span-10">
        <HomeHeader />
      </section>
    </main>
  );
};

export default Home;
