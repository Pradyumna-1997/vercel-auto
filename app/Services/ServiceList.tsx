
import { useState, useEffect } from 'react';
import { CheckCircleFilled } from '@ant-design/icons';
import { Descriptions } from 'antd';

interface ServiceListProps {
    id: number; // or number, depending on what type your id is
  }
interface ServiceDetails {
    id: number;
    details: string; // replace with the actual type of your details
  }
  
  const ServiceList: React.FC<ServiceListProps> = ({ id }) => {

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