import React from "react";
import Layout from "../../components/layout/Layout";
import Background from "../../images/bg-desktop.jpg";
import "./Home.scss";

function Home() {
  return (
    <Layout bgImage={Background}>
      <div className="home">
        <div className="info">
          <h3>SO, YOU WANT TO TRAVEL TO</h3>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="explore">
            <h1>EXPLORE</h1>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
