"use client";

import TopAd from "./TopAd";

import { useState } from "react";
import { Button, Input } from "antd";
import { Row, Col, Image } from "antd";

const Hero = () => {
  // Setting Ustestates for Quick Assistance
  const [quickName, setQuickName] = useState("");
  const [quickPhoneNumber, setQuickPhoneNumber] = useState("");

  // Function to handle the form submission
  const handleSubmit = async () => {
    // Make a POST request to the backend
    // Needs to be updated for actual site]
    const response = await fetch("https://abc.com/backend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: quickName,
        phoneNumber: quickPhoneNumber,
      }),
    });

    if (!response.ok) {
      // handle error
    }
  };

  return (
    // This is the first section of the home page
    // It contains a map image, a heading and a form to get quick assistance
    <section className="max-container padding-container flex flex-col gap-20 py-10 ">
      <div className="hero-map" />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88 text-ayellow">Car Sevice For you</h1>
        <p className="regular-20 mt-6 text-white xl:max-w-[520px]">
          Lubricant partner Quartz Engine Oil
        </p>
      </div>
      <TopAd />

      <div className=" flex flex-1">
        <div
          className="relative z-20 flex w-[500px] flex-col gap-8 rounded-3xl bg-white px-7 py-5 items-center justify-center"
          style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
        >
          {/* Below are the images above the input fields */}
          <Row gutter={16} justify="center">
            <Col span={8}>
              <Image
                width={100}
                src="https://www.automovill.com/assets/images/icons/car.svg"
              />
            </Col>
            <Col span={8}>
              <Image
                width={100}
                src="https://www.automovill.com/assets/images/icons/customer.svg"
              />
            </Col>
            <Col span={8}>
              <Image
                width={100}
                src="https://www.automovill.com/assets/images/icons/rating.svg"
              />
            </Col>
          </Row>

          <Input
            placeholder="Type Name Here"
            onChange={(e) => setQuickName(e.target.value)}
          />
          <Input
            placeholder="Type Phone Number Here"
            onChange={(e) => setQuickPhoneNumber(e.target.value)}
          />
          <Button
            className="bg-ayellow "
            style={{
              color: "white",
              height: "50px",
              width: "300px",
              fontSize: "20px",
            }}
            //#####Remove the comment below to enable the handleSubmit function####
            //Update the backend URL to the actual backend URL
            //onClick={handleSubmit}
          >
            Get Quick Assistance
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
