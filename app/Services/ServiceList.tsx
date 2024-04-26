
import { useState, useEffect } from 'react';
import { CheckCircleFilled } from '@ant-design/icons';
import { Descriptions } from 'antd';

interface ServiceListProps {
    id: number; 
  }
interface ServiceDetails {
    id: number;
    details: string; 
  }
  
  const ServiceList: React.FC<ServiceListProps> = ({ id }) => {

    // This Function makes list of items in backend and displays them in two columns and tick mark in front of them

    const [itemList, setItemList] = useState<string[]>([]);

    useEffect(() => {
        // Fetch data from API
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}customer/servicelist/getServiceDetails`)
    .then((response) => response.json())
    .then((data) => {
      // Find the details corresponding to the id
      const details = data.find((item: ServiceDetails) => item.id === id);

      // Break the details string into an array of items
      if (details) {
        const items = details.details.split(',');
        setItemList(items);
      }
    });
    }, []);

    return(   
      // This component is responsible for rendering the list of services provided by the company. It fetches the data from the backend and displays it in a two column format with a tick mark in front of each item
        <div>
          <Descriptions column={2} colon={false}>
      {itemList.map((item, index) => (
        <Descriptions.Item key={index} label={<CheckCircleFilled style={{ color: 'green', marginRight: '0px' }} />}>
          <span style={{ fontSize: '10px', opacity: 0.5 }}>{item}</span>
        </Descriptions.Item>
      ))}
    </Descriptions>
          </div>
          )
  
  }
  
  
  export default ServiceList;