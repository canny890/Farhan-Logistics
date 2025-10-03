import React from 'react';
import { Service, Vehicle, Testimonial, RouteInfo } from './types';

// Icons
const ContainerHandlingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 8v10a2 2 0 01-2 2H8a2 2 0 01-2-2V8m12 0h2a2 2 0 012 2v8a2 2 0 01-2 2h-2m-4-12V4m0 4h.01M8 4h8a2 2 0 012 2v2H6V6a2 2 0 012-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12L8 16h8l-4-4z" />
    </svg>
);

const CraneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        <path d="M18 21h-9" strokeLinecap="round" />
        <path d="M12 3L4 14" strokeLinecap="round" />
    </svg>
);

const ShippingLineIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18M5 6l2-3h10l2 3M4 10v10a2 2 0 002 2h12a2 2 0 002-2V10" />
        <path d="M8 18h2m4 0h2" />
    </svg>
);

const GeneralTransportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16h2a2 2 0 002-2V7a2 2 0 00-2-2h-3.382a1 1 0 00-.94.66L11 11" />
  </svg>
);

// Navigation
export const NAV_LINKS: RouteInfo[] = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About Us' },
  { path: '/services', name: 'Services' },
  { path: '/fleet', name: 'Fleet' },
  { path: '/contact', name: 'Contact' },
];

// Data
export const SERVICES: Service[] = [
  {
    icon: <ContainerHandlingIcon />,
    title: 'Container Handling',
    description: 'Professional container handling services with care and precision.',
    details: 'We provide expert container handling services including loading, unloading, and secure transportation of all container types (20ft, 40ft, High-Cube) across Pakistan.'
  },
  {
    icon: <CraneIcon />,
    title: 'Trailer on Rent',
    description: 'Flexible and reliable trailer rental solutions for all your needs.',
    details: 'Our modern fleet of trailers is available for rent with professional drivers and comprehensive support for your transportation requirements.'
  },
  {
    icon: <ShippingLineIcon />,
    title: 'Shipping Line Agent',
    description: 'Expert coordination with shipping lines for smooth operations.',
    details: 'As experienced shipping line agents, we handle all aspects of shipping coordination, documentation, and logistics management.'
  },
  {
    icon: <GeneralTransportIcon />,
    title: 'General Transport',
    description: 'Comprehensive transport solutions for all types of cargo.',
    details: 'We offer reliable general transport services for all your goods, ensuring safe and timely delivery across Pakistan.'
  },
  {
    icon: <CraneIcon />,
    title: 'Crane & Trailer Services',
    description: 'Modern cranes and trailers for heavy-lifting and oversized cargo.',
    details: 'Our diverse fleet includes mobile cranes and a variety of trailers (flatbed, low-bed) to handle any heavy-lifting or oversized cargo challenge. We provide rental and operational services for construction projects, industrial machinery, and more.'
  },
  {
    icon: <ShippingLineIcon />,
    title: 'Shipping Line Services',
    description: 'Seamless coordination with major shipping lines for your cargo.',
    details: 'We act as your logistics partner, managing all coordination with shipping lines to ensure your import/export processes are smooth and hassle-free. From documentation to port clearance, we handle it all.'
  },
    {
    icon: <GeneralTransportIcon />,
    title: 'General Transport & Trading',
    description: 'Reliable transport for all kinds of goods and general trading.',
    details: 'Beyond specialized services, we are general traders and provide robust transport solutions for all kinds of goods. Our nationwide network ensures timely and secure delivery for any cargo, large or small.'
  },
  
];

export const FLEET: Vehicle[] = [
  {
    name: 'Warehouse Management Fleet',
    image: '/assets/warehouse-management.jpg',
    specs: {
      type: 'Warehouse Equipment',
      capacity: 'Custom Solutions',
      services: 'Inventory management, storage solutions, order fulfillment',
      idealFor: 'Warehousing, distribution centers, logistics hubs',
    },
  },
  {
    name: 'Transport Operator Fleet',
    image: '/assets/transport-operator.jpg',
    specs: {
      type: 'Mixed Fleet',
      capacity: 'Various',
      vehicles: '50+',
      idealFor: 'Comprehensive transport solutions, long-haul operations',
    },
  },
  {
    name: 'Heavy-Duty Crane Trailer',
    image: '/assets/crane-trailer.jpg',
    specs: {
      type: 'Hydraulic Crane Trailer',
      capacity: '100-250 Tons',
      boomLength: '60m',
      idealFor: 'Heavy lifting, construction sites, industrial projects',
    },
  },
  {
    name: 'General Trading Fleet',
    image: '/assets/general-traders.jpg',
    specs: {
      type: 'Multi-Purpose Trailers',
      capacity: 'Various',
      cargoTypes: 'General goods, construction materials, consumer products',
      idealFor: 'Trading companies, distributors, manufacturers',
    },
  },
  {
    name: 'Container Handling Equipment',
    image: '/assets/container-handling.jpg',
    specs: {
      type: 'Reach Stacker',
      capacity: '45 Tons',
      stackHeight: '4 High',
      idealFor: 'Port operations, container yards, logistics hubs',
    },
  },
  {
    name: 'Shipping Line Fleet',
    image: '/assets/shipping-line.jpg',
    specs: {
      type: 'Dedicated Transport',
      capacity: 'Various',
      services: 'Port-to-door, customs clearance, documentation',
      idealFor: 'Shipping line partners, import/export businesses',
    },
  },
  {
    name: '40ft Container Trailer',
    image: '/assets/40ft-container-trailer.jpg',
    specs: {
      type: 'Container Trailer',
      capacity: '40ft Containers',
      maxLoad: '30 Tons',
      idealFor: 'Standard shipping containers, general cargo transport',
    },
  },
  {
    name: '20ft Flatbed Trailer',
    image: '/assets/20ft-flatbed-trailer.jpeg',
    specs: {
      type: 'Flatbed Trailer',
      capacity: '20ft Cargo',
      maxLoad: '25 Tons',
      idealFor: 'Oversized loads, construction materials, machinery',
    },
  },
  {
    name: 'Lowbed Trailer',
    image: '/assets/lowbed-trailer.jpg',
    specs: {
      type: 'Lowbed Trailer',
      capacity: '50-100 Tons',
      maxLoad: '100 Tons',
      idealFor: 'Heavy machinery, construction equipment, transformers',
    },
  },
  
  {
    name: 'Side Curtain Trailer',
    image: '/assets/curtainsider-trailer.jpg',
    specs: {
      type: 'Curtainsider',
      capacity: '24 Pallets',
      length: '45ft',
      idealFor: 'General cargo, palletized goods, fast loading/unloading',
    },
  },
  {
    name: 'Heavy Haulage Trailer',
    image: '/assets/heavy-haulage.jpg',
    specs: {
      type: 'Modular Trailer',
      capacity: '200+ Tons',
      axles: '8-12',
      idealFor: 'Oversized and overweight cargo, industrial equipment',
    },
  },
  {
    name: 'Bulk Cargo Trailer',
    image: '/assets/bulk-cargo-trailer.jpg',
    specs: {
      type: 'Tipper Trailer',
      capacity: '40 Cubic Meters',
      unloading: 'Hydraulic',
      idealFor: 'Construction materials, grains, and bulk cargo',
    },
  },
  
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Farhan Logistics is our go-to partner for container transport from the port. Their service is efficient, reliable, and absolutely critical to our import business.',
    name: 'Imran Sheikh',
    company: 'Director, S.I. Traders',
  },
  {
    quote: 'We hired a crane and a low-bed trailer for our project site. The equipment was top-notch and their operator was highly professional. They made a complex job seem easy.',
    name: 'Salman Baig',
    company: 'Project Manager, Apex Construction',
  },
  {
    quote: 'Their ability to coordinate with shipping lines and manage our cargo has saved us countless headaches. Farhan Logistics is a truly dependable logistics specialist.',
    name: 'Nida Aslam',
    company: 'Logistics Head, Global Exports Co.',
  },
];