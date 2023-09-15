"use client"
import Link from 'next/link';
import React from 'react'
type Property= {
  id: number;
  imageUrl: string;
  category: string;
  price: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  floor: string | number;
  parking: string;
  filters: string[];
  description: string;
  accordionItems: {
    title: string;
    content: string;
  }[];
}
type CardProps = {
  property:Property;
};
export default function Card({ property }: CardProps) {
  return (
    <div
      key={property.id}
      className={`col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 ${property.filters.join(
        " "
      )}`}
    >
      <div className="item">
        <a href="property-details.html">
          <img src={property.imageUrl} alt="" />
        </a>
        <span className="category">{property.category}</span>
        <h6>{property.price}</h6>
        <h4>
          <a href="property-details.html">{property.address}</a>
        </h4>
        <ul>
          <li>
            Bedrooms: <span>{property.bedrooms}</span>
          </li>
          <li>
            Bathrooms: <span>{property.bathrooms}</span>
          </li>
          <li>
            Area: <span>{property.area}</span>
          </li>
          <li>
            Floor: <span>{property.floor}</span>
          </li>
          <li>
            Parking: <span>{property.parking}</span>
          </li>
        </ul>
        <div
          className="main-button"
          onClick={() =>
            localStorage.setItem("property", JSON.stringify(property))
          }
        >
          <Link href={`/properties/${property.id}`}>Schedule a visit</Link>
        </div>
      </div>
    </div>
  );
}