'use client';

import React, { useEffect, useState } from 'react';

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


  
  useEffect(() => {
    // Fetch data from API
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}customer/servicelist/getnewestimate?city=${city}&model=${model}&fuel=${fuel}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Update state with data
        setService1(data.Service1)
        setService1cost(data.Service1cost)
        setService2(data.Service2)
        setService2cost(data.Service2cost)
        setService3(data.Service3)
        setService3cost(data.Service3cost)
        setService4(data.Service4)
        setService4cost(data.Service4cost)
        setService5(data.Service5)
        setService5cost(data.Service5cost)
        setService6(data.Service6)
        setService6cost(data.Service6cost)
        setService7(data.Service7)
        setService7cost(data.Service7cost)
      });

      
  }, [ ,fuel]);

  return (
    <div>
    {fuel && (
      <>
        <p> {service1} cost :</p><p> ₹{service1cost}</p><br/>
        <p> {service2} cost :</p><p> ₹{service2cost}</p><br/>
        <p> {service3} cost :</p><p> ₹{service3cost}</p><br/>
        <p> {service4} cost :</p><p> ₹{service4cost}</p><br/>
        <p> {service5} cost :</p><p> ₹{service5cost}</p><br/>
        <p> {service6} cost :</p><p> ₹{service6cost}</p><br/>
        <p> {service7} cost :</p><p> ₹{service7cost}</p><br/>
      </>
    )}
    {/* Rest of your component JSX... */}
  </div>
  );
};

export default ServicePrice;