"use client";

import React, { useState } from "react";
import { Card } from "antd";

const Faq: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const handleClick = (questionKey: string) => {
    setOpenQuestion(openQuestion === questionKey ? null : questionKey);
  };

  return (
    <div>
      <br />
      <div>
        <h1 style={{ textAlign: "center" }}>Frequently Asked Questions</h1>
        <br />
        <Card
          onClick={() => handleClick("q1")}
          style={{
            boxShadow: "0px 4px 4px rgba(255, 165, 0, 0.6)",
            borderRadius: "15px",
          }}
        >
          <h3>Does Automovill use genuine parts?</h3>
          {openQuestion === "q1" && (
            <p style={{ fontSize: "0.8rem", fontWeight: "normal" }}>
              {" "}
              Yes we use genuine/OEM parts.{" "}
            </p>
          )}
        </Card>
        <br />
        <Card
          onClick={() => handleClick("q2")}
          style={{
            boxShadow: "0px 4px 4px rgba(255, 165, 0, 0.6)",
            borderRadius: "15px",
          }}
        >
          <h3>What kinds of car services does Automovill provide?</h3>
          {openQuestion === "q2" && (
            <p style={{ fontSize: "0.8rem", fontWeight: "normal" }}>
              {" "}
              Automovill provides all car services – car general service
              (periodic &amp; comprehensive service), car repair, car denting
              and painting, car cleaning, car AC repair, car battery, tyre
              replacement & amp; many other services (please check our
              ‘Services’ Page for more details).{" "}
            </p>
          )}
        </Card>
        <br />
        <Card
          onClick={() => handleClick("q3")}
          style={{
            boxShadow: "0px 4px 4px rgba(255, 165, 0, 0.6)",
            borderRadius: "15px",
          }}
        >
          <h3>Can I claim the insurance on car repair at Automovill?</h3>
          {openQuestion === "q3" && (
            <p style={{ fontSize: "0.8rem", fontWeight: "normal" }}>
              {" "}
              Yes, you can claim your car insurance for car repairs.{" "}
            </p>
          )}
        </Card>
        <br />
        <Card
          onClick={() => handleClick("q4")}
          style={{
            boxShadow: "0px 4px 4px rgba(255, 165, 0, 0.6)",
            borderRadius: "15px",
          }}
        >
          <h3>How frequently Car service needs to be done?</h3>
          {openQuestion === "q4" && (
            <p style={{ fontSize: "0.8rem", fontWeight: "normal" }}>
              {" "}
              A well-maintained car is serviced after every 10,000 km or every 6
              months (whichever happens first). Timely service is recommended to
              increase your car’s life-time value!{" "}
            </p>
          )}
        </Card>
        <br />
        {/* NEED TO ADD MORE QUESTIONS HERE */}
      </div>
    </div>
  );
};

export default Faq;
