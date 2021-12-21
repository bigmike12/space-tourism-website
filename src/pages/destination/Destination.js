import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import "./Destination.scss";
import destinationData from "../../destination.json";

function Destination() {
  const [pointer, setPointer] = useState(0);
  return (
    <Layout color={"#0B0D17"}>
      <div className="destination">
        <div className="title">
          <h1>
            <span>01</span>Pick your destination
          </h1>
        </div>

        <div className="info">
          <div className="nav">
            <a onClick={(e) => {e.preventDefault(); setPointer(0)}} href="/">
              MOOON
            </a>
            <a onClick={(e) => {e.preventDefault(); setPointer(1)}} href="/">
              MARS
            </a>
            <a onClick={(e) => {e.preventDefault(); setPointer(2)}} href="/">
              EUROPA
            </a>
            <a onClick={(e) => {e.preventDefault(); setPointer(3)}} href="/">
              TITAN
            </a>
          </div>
          <h1>{destinationData[pointer].title}</h1>
          <p className="text">{destinationData[pointer].content}</p>
          <div className="numbers">
            <div className="distance">
              <p className="avg">AVG. DISTANCE</p>
              <p className="num">{destinationData[pointer].distance}</p>
            </div>
            <div className="time">
              <p className="avg">EST. TRAVEL TIME</p>
              <p className="num">{destinationData[pointer].time}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Destination;
