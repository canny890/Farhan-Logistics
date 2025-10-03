import React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
}

export interface Vehicle {
  name: string;
  image: string;
  specs: {
    type: string;
    capacity: string;
    maxLoad?: string;
    temperature?: string;
    compartments?: string;
    length?: string;
    maxHeight?: string;
    axles?: string;
    unloading?: string;
    idealFor: string;
    // Additional properties for fleet specifications
    vehicles?: string;
    boomLength?: string;
    cargoTypes?: string;
    stackHeight?: string;
    services?: string;
  };
}

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
}

export interface RouteInfo {
  path: string;
  name: string;
}
