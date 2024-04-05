'use client';

import React, { useState, useEffect } from 'react';

import "./Navbar.css";
import Link from "next/link";
import Hamburger from "hamburger-react";


import { Select } from "antd";
const { Option } = Select;



interface DataItem {
  id: number;
  name: string;
}

 const Navbar = () => {

  

  //  State to store the city data
  const [menuOpen, setMenuOpen] = useState(false);
  const [cities, setCities] = useState<DataItem[]>([]);
  const [selectedCityId, setSelectedCityId] = useState<number | null>(null);


  // Fetch City data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the backend
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}customer/location/getallcities`);
        const data: DataItem[] = await response.json();

        setCities(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      // Get cityId from the URL from local Storage
      const cityId = localStorage.getItem('city');
      if (cityId) {
        setSelectedCityId(parseInt(cityId, 10));

        // Add cityId into the URL as a query parameter
        const url = new URL(window.location.href);
        url.searchParams.set('city', cityId);
        window.history.pushState({}, '', url.toString());
      }
    };

    fetchData();
  }, []);

  //  Log the selected city ID
  useEffect(() => {
    if (!selectedCityId) {
      return;
    }
    console.log('Selected City ID:', selectedCityId);
  }, [selectedCityId]);

  
// Function to handle city change
  const handleCityChange = async (value: string) => {
    const selectedCity = cities.find((city) => city.name === value);
  if (selectedCity) {
    setSelectedCityId(selectedCity.id);

    // Add selectedCity.id into the URL as a query parameter
    const url = new URL(window.location.href);
    url.searchParams.set('city', selectedCity.id.toString());
    window.history.pushState({}, '', url.toString());

    // Store selectedCity.id in session storage
    localStorage.setItem('city', selectedCity.id.toString());
  };
}

  return (
    <nav className="flex max-container padding-container sticky top-0 z-30 py-4 bg-ablue px-2">
        <div className="right-0 lg:hidden">
         
          
        <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select Your City"
        optionFilterProp="children"
        filterOption={(input, option) =>
          (option?.children as unknown as string)
            .toLowerCase()
            .includes(input.toLowerCase())
        }
        onChange={handleCityChange}
      >
        {cities.map((city) => (
          <Option key={city.id} value={city.name}>
            {city.name}
          </Option>
        ))}
      </Select>
    
        </div>
      
      <div className="menu px-16" onClick={() => setMenuOpen(!menuOpen)}>
        <Hamburger  size={100}/>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Services">Services</Link>
        </li>
        {/* <li>
          <Link href="/Contact">Contact</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar