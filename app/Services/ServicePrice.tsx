"use client";

import { Button, Card, Image, Row } from "antd";
import React, { useEffect, useState } from "react";

import ServiceList from "./ServiceList";

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
        // console.log(data);
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
  }, [, city, fuel]);

  return (
    <div>
      {/* Row 1 of Buttons */}
      <Row>
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
          Denting/Painting
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
          AC Services
        </Button>
      </Row>

      {/* Row 2 of Buttons */}
      <Row align="middle" justify="center">
        <Button
          style={{
            width: "33.33%",
            height: "50px",
            backgroundColor: selectedButton === 4 ? "darkgrey" : undefined,
          }}
          onClick={() => {
            setServiceState(4);
            setSelectedButton(4);
          }}
        >
          Car Checkup
        </Button>
        <Button
          style={{
            width: "33.33%",
            height: "50px",
            backgroundColor: selectedButton === 5 ? "darkgrey" : undefined,
          }}
          onClick={() => {
            setServiceState(5);
            setSelectedButton(5);
          }}
        >
          Battery/Tyre
        </Button>
      </Row>
      <br />
      <br />
      <Row justify="center">
        {servicestate === 1 && fuel && (
          <>
            <Card
              title={service1}
              extra={<p style={{ color: "green" }}>₹{service1cost}*</p>}
              style={{
                width: "90%",
                boxShadow: "1px 1px 5px rgba(0,0,0,0.1)",
                borderRadius: "10px",
              }}
            >
              <Row>
                <ServiceList id={1} />
              </Row>
              <Row>
                <Image
                  width="100%"
                  src="https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/services/Standard_service.webp" 
                />
              </Row>
              <Row justify="center" style={{ marginTop: "20px" }}>
                <Button
                  className="bg-ayellow"
                  style={{
                    //backgroundColor: "yellow",
                    color: "white",
                    height: "50px",
                    width: "200px",
                    fontSize: "20px",
                  }}
                >
                  Book Now
                </Button>
              </Row>
            </Card>
            <div style={{ marginBottom: '20px' }} /> 
            <Card
              title={service2}
              extra={<p style={{ color: "green" }}>₹{service2cost}*</p>}
              style={{
                width: "90%",
                boxShadow: "1px 1px 5px rgba(0,0,0,0.1)",
                borderRadius: "10px",
              }}
            >
              <Row>
                <ServiceList id={2} />
              </Row>
              <Row>
                <Image
                  width="100%"
                  src="https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/services/Comprehensive_service.webp" 
                />
              </Row>
              <Row justify="center" style={{ marginTop: "20px" }}>
                <Button
                  className="bg-ayellow"
                  style={{
                    //backgroundColor: "yellow",
                    color: "white",
                    height: "50px",
                    width: "200px",
                    fontSize: "20px",
                  }}
                >
                  Book Now
                </Button>
              </Row>
            </Card>
          </>
        )}
        {servicestate === 2 && fuel && (
         <>
         <Card
           title={service4}
           extra={<p style={{ color: "green" }}>Starts @ ₹{service4cost}*</p>}
           style={{
             width: "90%",
             boxShadow: "1px 1px 5px rgba(0,0,0,0.1)",
             borderRadius: "10px",
           }}
         >
           <Row>
             <ServiceList id={4} />
           </Row>
           <Row>
             <Image
               width="100%"
               src="https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/services/Alloy_painting.webp" 
             />
           </Row>
           <Row justify="center" style={{ marginTop: "20px" }}>
             <Button
               className="bg-ayellow"
               style={{
                 //backgroundColor: "yellow",
                 color: "white",
                 height: "50px",
                 width: "200px",
                 fontSize: "20px",
               }}
             >
               Book Now
             </Button>
           </Row>
         </Card>
         <div style={{ marginBottom: '20px' }} /> 
         <Card
           title={service7}
           extra={<p style={{ color: "green" }}>Starts @ ₹{service7cost}*</p>}
           style={{
             width: "90%",
             boxShadow: "1px 1px 5px rgba(0,0,0,0.1)",
             borderRadius: "10px",
           }}
         >
           <Row>
             <ServiceList id={7} />
           </Row>
           <Row>
             <Image
               width="100%"
               src="https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/services/Body-painting.webp" 
             />
           </Row>
           <Row justify="center" style={{ marginTop: "20px" }}>
             <Button
               className="bg-ayellow"
               style={{
                 //backgroundColor: "yellow",
                 color: "white",
                 height: "50px",
                 width: "200px",
                 fontSize: "20px",
               }}
             >
               Book Now
             </Button>
           </Row>
         </Card>
       </>
     )}
        {servicestate === 3 && fuel && (
          <Card
            title={service5}
            extra={<p style={{ color: "green" }}> ₹{service5cost}*</p>}
            style={{
              width: "90%",
              boxShadow: "1px 1px 5px rgba(0,0,0,0.1)",
              borderRadius: "10px",
            }}
          >
            <Row>
              <ServiceList id={5} />
            </Row>
            <Row>
              <Image
                width="100%"
                src="https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/services/ac-service.webp" 
              />
            </Row>
            <Row justify="center" style={{ marginTop: "20px" }}>
              <Button
                className="bg-ayellow"
                style={{
                  //backgroundColor: "yellow",
                  color: "white",
                  height: "50px",
                  width: "200px",
                  fontSize: "20px",
                }}
              >
                Book Now
              </Button>
            </Row>
          </Card>
          )}
          {servicestate === 4 && fuel && (
          <Card
            title={service6}
            extra={<p style={{ color: "green" }}> ₹{service6cost}*</p>}
            style={{
              width: "90%",
              boxShadow: "1px 1px 5px rgba(0,0,0,0.1)",
              borderRadius: "10px",
            }}
          >
            <Row>
              <ServiceList id={6} />
            </Row>
            <Row>
              <Image
                width="100%"
                src="https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/services/gen-health-checkup.webp" 
              />
            </Row>
            <Row justify="center" style={{ marginTop: "20px" }}>
              <Button
                className="bg-ayellow"
                style={{
                  
                  color: "white",
                  height: "50px",
                  width: "200px",
                  fontSize: "20px",
                }}
              >
                Book Now
              </Button>
            </Row>
          </Card>
          )}
          </Row>
    </div>
  );
};

export default ServicePrice;
