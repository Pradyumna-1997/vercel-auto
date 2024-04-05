
import Services from "@/components/Services";
import React from 'react';
import ServiceSelect from "./ServiceSelect";


export default function ServicesTab () {
  
    return (
      
      
      <h1 className= "font-bold text-ablue text-2xl">
        <ServiceSelect /> 
        <Services/>
      </h1>
    );
  }