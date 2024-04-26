'use client';

import React, { useState, useEffect } from 'react';
import { Button, Col, Row, notification } from 'antd';

import ServicePrice from "./ServicePrice" ; 
import AllBrands from "@/components/AllBrands";

interface GetItem {
  id: number;
  name: string;
  // Add any other attributes you expect in the response
}


const ServiceSelect: React.FC = () => {
  //The usesates are used to store the data fetched from the backend and the ids of the data
  const [ids, setIds] = useState<number[]>([]);
  const [data, setData] = useState<GetItem[]>([]);
  const [models, setModels] = useState<GetItem[]>([]);
  
  const [selectedCityId, setSelectedCityId] = useState<number | null>(1);
  const [selectedMakeId, setSelectedMakeId] = useState<number | null>(1);
  const [selectedModelId, setSelectedModelId] = useState<number | null>(226);
  const [selectedFuelId, setSelectedFuelId] = useState<number | null>(1);

  //The biggest and most complicated code for the service selection page. Multiple comments have been added to explain the code.  

  useEffect(() => {
    // This Useeffect is responsible for fetching the data from the backend and setting the data and ids state at the start of the page
    const fetchMake = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}core/getAllMake`);
        const fetchedData: GetItem[] = await response.json();
        

        setData(fetchedData);
        const extractedIds = fetchedData.map((item) => item.id);
        setIds(extractedIds);

      } catch (error) {
        console.error('Error fetching data:', error);
      }

      // The code below is responsible for setting the selected ids from the URL query parameters
      const urlParams = new URLSearchParams(window.location.search);
      const city = urlParams.get('city');
      const model = urlParams.get('model');
      const fuel = urlParams.get('fuel');

    if (city) {
      setSelectedCityId(parseInt(city, 10));
    }

    if (model) {
      setSelectedModelId(parseInt(model, 10));
    }

    if (fuel) {
      setSelectedFuelId(parseInt(fuel, 10));
    }
    };

    fetchMake();

  }, []);

  useEffect(() => {
    // This Useeffect is called when the selectedMakeId is changed. It is responsible for calling the function to fetch the models
    if (selectedMakeId === null || 0) {
      return;
    }
    handleMakeClick(selectedMakeId);
  }, [selectedMakeId]);

  useEffect(() => {
    // This Useeffect is called when the selectedModelId is changed. It is responsible for calling the function to fetch the fuel
    if (selectedModelId === null || 0) {
      return;
    }
    // Calling the function to fetch the fuel
    console.log('Selected Model ID',selectedModelId)
    Modelclick();

    // Add selectedModelId into the URL as a query parameter
    const url = new URL(window.location.href);
    url.searchParams.set('model', selectedModelId.toString());
    window.history.pushState({}, '', url.toString());
  }, [selectedModelId]);

  useEffect(() => {
    // This Useeffect is called when the selectedFuelId is changed. It is responsible for adding the selectedFuelId into the URL as a query parameter
    notification.destroy();
    // If the selectedFuelId is null, do nothing
    if (selectedFuelId === null || 0) {
      return;
    }
    console.log('Selected Fuel ID',selectedFuelId)

    // Add selectedFuelId into the URL as a query parameter
    const url = new URL(window.location.href);
    url.searchParams.set('fuel', selectedFuelId.toString());
    window.history.pushState({}, '', url.toString());

    const urlParams = new URLSearchParams(window.location.search);
    const city = urlParams.get('city');
    if (city) {
      setSelectedCityId(parseInt(city, 10));
    }
   
  }, [selectedFuelId]);

  const Makeclick = async (id:number)=>{
    // This function is called when the user clicks on the make. It is responsible for fetching the models of the selected make
    setSelectedFuelId(null);
    notification.open({
      message: `Please Select Your Model to Proceed`,
      description: (
        <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {models.map((model, index) => (
          <li key={index} 
          
          >
            <Button 
            onClick={() => setSelectedModelId(model.id)}
            >
              {model.name.toUpperCase()}
            </Button>
          </li>
        ))}
      </ul>
          ),
      duration: 3, // Automatically close the notification after 3 seconds
    });
  };

  const Modelclick = async ()=>{
    // This function is called when the user clicks on the model. It is responsible for fetching the fuel of the selected model
    notification.open({
      message: `Please Select Your Fuel to Proceed`,
      description: (
      <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <li key={1}>
           <img src="https://www.automovill.com/assets/fuel/PETROL.svg" width="80px" height="80px" 
           onClick={() => handleFuelClick(1)}/>
        </li>
        <li key={2}>
        <img src="https://www.automovill.com/assets/fuel/DIESEL.svg" width="80px" height="80px" 
           onClick={() => handleFuelClick(2)}/>
        </li>
        <li key={3}>
        <img src="https://www.automovill.com/assets/fuel/CNG.svg" width="80px" height="80px" 
           onClick={() => handleFuelClick(3)}/>
        </li>
      </ul>
        ),
      duration: 3, // Automatically close the notification after 3 seconds
    });
  };

  
  
  const handleMakeClick = async (id: number) => {
    // This function is called when the user clicks on the make. It is responsible for fetching the models of the selected make
    notification.destroy();
    try {
      const response2 = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}core/getModel?makeId=${id}`);
      const fetchedData2: GetItem[] = await response2.json();

      setModels(fetchedData2);

    } catch (error) {
        console.error('Error fetching data:', error);
      }
      
    setSelectedMakeId(id);
    console.log('Seleted brand ID',id)

    Makeclick(id)
  };

  const handleFuelClick = async (id: number) => {
    // This function is called when the user clicks on the fuel. It is responsible for setting the selectedFuelId
    notification.destroy();
    setSelectedFuelId(id); 
  };
 
  

  const handleShowIds = () => {
    // This function excecutes when user clicks select car to be serviced and We Serve the Brands.
    if (selectedCityId === null) {
      alert('Select your Location Please');
    }

    notification.info({
      message: 'Please Select Your Make to Proceed',
      description: (
        <div>
        <Row gutter={[16, 16]} justify="start">
        {data.map((item, index) => (
          <div key={index} 
          style={{ width: '20%', height: '20%' } }
          >
            <Col key={index} 
            //</div>xs={24} sm={12} md={8} lg={6} xl={4}
            >
            <img src={`https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/${item.id}.jpeg`} 
            alt={`Image ${item.id}`}              
            onClick={() => handleMakeClick(item.id)} 
          />
        </Col>
          </div>
        ))}
      </Row>
      </div>
      ),
      duration: 0, // Keep the notification open until manually closed
    });
  };

  return (
    <div 
    //The comment below could be added to the div to make it sticky
    //className="sticky top-10"
    >
    <Button
      onClick={handleShowIds}
      style={{
        width: '100%',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        color: 'ablue',
        fontWeight: 'bold',
        borderRadius: '25px', 
        padding: '0 20px', 
      }}
    >
      Click here to Select Car to be Serviced
    </Button>
    {/* This is a very important code that calls all the ServicePrice from the backend and displays the prices of the selected car to be serviced */}
    <ServicePrice city={selectedCityId} model={selectedModelId} fuel={selectedFuelId} />
    {(selectedFuelId === 0 || selectedFuelId === null) && 
    <Button
    onClick={handleShowIds}
    style={{
      width: '100%',
      height: '650px',
      display: 'flex',
    }}
  >
      <div>
      {/* This imports the All Brand Component only if nothing is already selected */}
      <AllBrands />
      </div>
    </Button>

    }
  </div>

  );
};

export default ServiceSelect;