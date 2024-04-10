'use client';

import React, { useState, useEffect } from 'react';
import { Button, Col, Row, notification } from 'antd';

import ServicePrice from "./ServicePrice" ; 

interface GetItem {
  id: number;
  name: string;
  // Add any other attributes you expect in the response
}


const ServiceSelect: React.FC = () => {
  const [ids, setIds] = useState<number[]>([]);
  const [data, setData] = useState<GetItem[]>([]);
  const [models, setModels] = useState<GetItem[]>([]);
  
  const [selectedCityId, setSelectedCityId] = useState<number | null>(null);
  const [selectedMakeId, setSelectedMakeId] = useState<number | null>(null);
  const [selectedModelId, setSelectedModelId] = useState<number | null>(null);
  const [selectedFuelId, setSelectedFuelId] = useState<number | null>(null);

  useEffect(() => {
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
    // If the selectedMakeId is null, do nothing
    if (selectedMakeId === null || 0) {
      return;
    }
    // Calling the function to fetch the models
    handleMakeClick(selectedMakeId);
  }, [selectedMakeId]);

  useEffect(() => {
    // If the selectedMakeId is null, do nothing
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
    notification.destroy();
    // If the selectedFuelId is null, do nothing
    if (selectedFuelId === null || 0) {
      return;
    }
    console.log('Selected Fuel ID',selectedFuelId)

    // Add selectedModelId into the URL as a query parameter
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
    notification.destroy();
    setSelectedFuelId(id); 
  };
 
  

  const handleShowIds = () => {
        
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
    <ServicePrice city={selectedCityId} model={selectedModelId} fuel={selectedFuelId} />
  </div>

  );
};

export default ServiceSelect;