"use client";

import { Button, Card, Col, Descriptions, Image, Row } from "antd";
import React, { useEffect, useState } from "react";
import { CheckCircleFilled } from "@ant-design/icons";



interface ServicePriceProps {
  city: number | null;
  model: number | null;
  fuel: number | null;
}

const ServicePrice: React.FC<ServicePriceProps> = ({ city, model, fuel }) => {
  const [service1, setService1] = useState<string | null>(null);
  const [service1cost, setService1cost] = useState<string | null>(null);
  const [service2, setService2] = useState<string | null>(null);
  const [service2cost, setService2cost] = useState<string | null>(null);
  const [service3, setService3] = useState<string | null>(null);
  const [service3cost, setService3cost] = useState<string | null>(null);
  const [service4, setService4] = useState<string | null>(null);
  const [service4cost, setService4cost] = useState<string | null>(null);
  const [service5, setService5] = useState<string | null>(null);
  const [service5cost, setService5cost] = useState<string | null>(null);
  const [service6, setService6] = useState<string | null>(null);
  const [service6cost, setService6cost] = useState<string | null>(null);
  const [service7, setService7] = useState<string | null>(null);
  const [service7cost, setService7cost] = useState<string | null>(null);

  const [servicestate, setServiceState] = useState<number | null>(1);
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  useEffect(() => {
    // Fetch data from API
    fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}customer/servicelist/getnewestimate?city=${city}&model=${model}&fuel=${fuel}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Update state with data
        setService1(data.Service1);
        setService1cost(data.Service1cost);
        setService2(data.Service2);
        setService2cost(data.Service2cost);
        setService3(data.Service3);
        setService3cost(data.Service3cost);
        setService4(data.Service4);
        setService4cost(data.Service4cost);
        setService5(data.Service5);
        setService5cost(data.Service5cost);
        setService6(data.Service6);
        setService6cost(data.Service6cost);
        setService7(data.Service7);
        setService7cost(data.Service7cost);
      });
  }, [, fuel]);

  return (
    <div>
      <Button
        style={{
          width: "33.33%",
          height: "50px",
          backgroundColor: selectedButton === 1 ? "darkgrey" : undefined,
        }}
        onClick={() => {
          setServiceState(1);
          setSelectedButton(1);
        }}
      >
        General Service
      </Button>
      <Button
        style={{
          width: "33.33%",
          height: "50px",
          backgroundColor: selectedButton === 2 ? "darkgrey" : undefined,
        }}
        onClick={() => {
          setServiceState(2);
          setSelectedButton(2);
        }}
      >
        Painting
      </Button>
      <Button
        style={{
          width: "33.33%",
          height: "50px",
          backgroundColor: selectedButton === 3 ? "darkgrey" : undefined,
        }}
        onClick={() => {
          setServiceState(3);
          setSelectedButton(3);
        }}
      >
        Others
      </Button>
      <br />
      <br />
      {servicestate === 1 && fuel && (
        <>
          <Card
            title={<span style={{ color: "ablue" }}>{service1}</span>}
            extra={<p style={{ color: "green" }}>₹{service1cost}*</p>}
            style={{ width: "90%" }}
          >
            <Row>
              <Descriptions column={2} style={{ listStyleType: 'none' }} colon={false}>
                <Descriptions.Item label={<CheckCircleFilled style={{ color: 'green' }} />}>
                  <span style={{ fontSize: '10px', opacity: 0.5 }}>Engine Oil Replaced</span>
                </Descriptions.Item>
                <Descriptions.Item label={<CheckCircleFilled style={{ color: 'green'}} />}>
                  <span style={{ fontSize: '10px', opacity: 0.5 }}>Oil Filter Replaced</span>
                </Descriptions.Item>
                <Descriptions.Item label={<CheckCircleFilled style={{ color: 'green' }} />}>
                  <span style={{ fontSize: '10px', opacity: 0.5 }}>Air filter Cleaning</span>
                </Descriptions.Item>
                <Descriptions.Item label={<CheckCircleFilled style={{ color: 'green'}} />}>
                  <span style={{ fontSize: '10px', opacity: 0.5 }}>Coolant - Top up</span>
                </Descriptions.Item>
              </Descriptions>
              </Row>
            <Row>
                <Image
                  width="100%"
                  src="https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/services/Standard_service.webp" // replace with your image URL
                />
            </Row>
          </Card>
          <Card
            title={<span style={{ color: "ablue" }}>{service2}</span>}
            extra={<p style={{ color: "green" }}>₹{service2cost}*</p>}
            style={{ width: "90%" }}
          />
        </>
      )}
      {servicestate === 2 && fuel && (
        <>
          <Card
            title={<span style={{ color: "ablue" }}>{service3}</span>}
            extra={<p style={{ color: "green" }}>₹{service3cost}*</p>}
            style={{ width: "90%" }}
          />
          <Card
            title={<span style={{ color: "ablue" }}>{service4}</span>}
            extra={<p style={{ color: "green" }}>₹{service4cost}*</p>}
            style={{ width: "90%" }}
          />
        </>
      )}
      {servicestate === 3 && fuel && (
        <>
          <Card
            title={<span style={{ color: "ablue" }}>{service5}</span>}
            extra={<p style={{ color: "green" }}>₹{service5cost}*</p>}
            style={{ width: "90%" }}
          />
          <Card
            title={<span style={{ color: "ablue" }}>{service6}</span>}
            extra={<p style={{ color: "green" }}>₹{service6cost}*</p>}
            style={{ width: "90%" }}
          />
          <Card
            title={<span style={{ color: "ablue" }}>{service7}</span>}
            extra={<p style={{ color: "green" }}>₹{service7cost}*</p>}
            style={{ width: "90%" }}
          />
        </>
      )}

      {/* {fuel && (
      <>
        <p> {service1} cost :</p><p> ₹{service1cost}</p><br/>
        <p> {service2} cost :</p><p> ₹{service2cost}</p><br/>
        <p> {service3} cost :</p><p> ₹{service3cost}</p><br/>
        <p> {service4} cost :</p><p> ₹{service4cost}</p><br/>
        <p> {service5} cost :</p><p> ₹{service5cost}</p><br/>
        <p> {service6} cost :</p><p> ₹{service6cost}</p><br/>
        <p> {service7} cost :</p><p> ₹{service7cost}</p><br/>
      </>
    )} */}
      {/* Rest of your component JSX... */}
    </div>
  );
};

export default ServicePrice;
