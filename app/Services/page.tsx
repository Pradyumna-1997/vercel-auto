
import Services from "@/components/Services";
import React from 'react';
import ServiceSelect from "./ServiceSelect";


export default function ServicesTab () {
  
    return (

      <h1 className= "font-bold text-ablue text-2xl">
        {/* The Service Select calls Service Prive after Car being chosen */}
        <ServiceSelect /> 
        {/* This is a constant description that can be changed later*/}
        <Services/>
      </h1>
    );
  }