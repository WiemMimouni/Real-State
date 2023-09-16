import React from 'react'
import Card from '../properties/Card';

export default function Properties() {
    const propertyData = [
      {
        id: 1,
        imageUrl: "/assets/images/property-01.jpg",
        category: "Luxury Villa",
        price: "$2.264.000",
        address: "18 Old Street Miami, OR 97219",
        bedrooms: 8,
        bathrooms: 8,
        area: "545m2",
        floor: 3,
        parking: "6 spots",
        filters: ["adv"],
        description: `This luxury villa is perfect for those who seek the ultimate in comfort and style. With 8 spacious bedrooms and 8 bathrooms, it offers ample space for a large family or group of friends. The total area of 545m2 ensures that you'll have plenty of room to relax and entertain.

    The villa is located on the 3rd floor, providing stunning views of the surrounding area. You'll have 6 parking spots available for your convenience, making it easy to accommodate your vehicles.

    Whether you're looking for a permanent residence or a vacation home, this luxury villa is a perfect choice. Don't miss out on the opportunity to own this piece of paradise!`,
        accordionItems: [
          {
            title: "Best useful links ?",
            content: `VillaAgency is committed to providing you with the best resources and links to make your property search easy and efficient. Our team of experts is here to assist you at every step of the way.`,
          },
          {
            title: "How does this work ?",
            content: `Finding your dream property with VillaAgency is a simple process. You can explore our listings, schedule visits, and our dedicated team will guide you through the contract and payment process.`,
          },
          {
            title: "Why is Villa the best ?",
            content: `VillaAgency has a reputation for excellence and customer satisfaction. We prioritize safety and provide 24/7 security for your peace of mind. Choose VillaAgency for your real estate needs.`,
          },
        ],
      },
      {
        id: 2,
        imageUrl: "/assets/images/property-02.jpg",
        category: "Luxury Villa",
        price: "$1.180.000",
        address: "54 New Street Florida, OR 27001",
        bedrooms: 6,
        bathrooms: 5,
        area: "450m2",
        floor: 3,
        parking: "8 spots",
        filters: ["str"],
        description: `Welcome to this stunning luxury villa in a prime location! With 6 bedrooms and 5 bathrooms, this villa offers both space and elegance. The total area of 450m2 ensures that you'll have room to spare for all your needs.

    Situated on the 3rd floor, this villa provides breathtaking views of the surroundings. You'll have 8 parking spots at your disposal, making it convenient for you and your guests.

    Whether you're looking for a peaceful retreat or a stylish home, this luxury villa has it all. Make it yours today!`,
        accordionItems: [
          {
            title: "Best useful links ?",
            content: `VillaAgency is committed to providing you with the best resources and links to make your property search easy and efficient. Our team of experts is here to assist you at every step of the way.`,
          },
          {
            title: "How does this work ?",
            content: `Finding your dream property with VillaAgency is a simple process. You can explore our listings, schedule visits, and our dedicated team will guide you through the contract and payment process.`,
          },
          {
            title: "Why is Villa the best ?",
            content: `VillaAgency has a reputation for excellence and customer satisfaction. We prioritize safety and provide 24/7 security for your peace of mind. Choose VillaAgency for your real estate needs.`,
          },
        ],
      },
      {
        id: 3,
        imageUrl: "/assets/images/property-03.jpg",
        category: "Luxury Villa",
        price: "$1.460.000",
        address: "26 Mid Street Portland, OR 38540",
        bedrooms: 5,
        bathrooms: 4,
        area: "225m2",
        floor: 3,
        parking: "10 spots",
        filters: ["adv", "rac"],
        description: `Discover this exquisite luxury villa in a charming location! Featuring 5 bedrooms and 4 bathrooms, this villa offers a cozy yet spacious environment. With a total area of 225m2, it's perfect for a family seeking comfort and style.

    Located on the 3rd floor, this villa boasts stunning views of the surrounding area. You'll have access to 10 parking spots, making it convenient for your guests and vehicles.

    Whether you value adventure or relaxation, this luxury villa has something for everyone. Don't wait to make it your own!`,
        accordionItems: [
          {
            title: "Best useful links ? ",
            content: `VillaAgency is committed to providing you with the best resources and links to make your property search easy and efficient. Our team of experts is here to assist you at every step of the way.`,
          },
          {
            title: "How does this work ? ",
            content: `Finding your dream property with VillaAgency is a simple process. You can explore our listings, schedule visits, and our dedicated team will guide you through the contract and payment process.`,
          },
          {
            title: "Why is Villa the best ? ",
            content: `VillaAgency has a reputation for excellence and customer satisfaction. We prioritize safety and provide 24/7 security for your peace of mind. Choose VillaAgency for your real estate needs.`,
          },
        ],
      },
      {
        id: 4,
        imageUrl: "/assets/images/property-04.jpg",
        category: "Apartment",
        price: "$584.500",
        address: "12 Hope Street Portland, OR 12650",
        bedrooms: 4,
        bathrooms: 3,
        area: "125m2",
        floor: "25th",
        parking: "2 cars",
        filters: ["str"],
        description: `Welcome to this stylish apartment on the 25th floor with breathtaking views! This apartment offers 4 bedrooms, 3 bathrooms, and a total area of 125m2, providing a comfortable living space.

    You'll have parking for 2 cars, making city living convenient. Whether you're a family or a professional, this apartment offers the perfect balance of style and functionality.

    Enjoy the city skyline from your window and make this apartment your urban sanctuary!`,
        accordionItems: [
          {
            title: "Best useful links ? ",
            content: `VillaAgency is committed to providing you with the best resources and links to make your property search easy and efficient. Our team of experts is here to assist you at every step of the way.`,
          },
          {
            title: "How does this work ? ",
            content: `Finding your dream property with VillaAgency is a simple process. You can explore our listings, schedule visits, and our dedicated team will guide you through the contract and payment process.`,
          },
          {
            title: "Why is Villa the best ? ",
            content: `VillaAgency has a reputation for excellence and customer satisfaction. We prioritize safety and provide 24/7 security for your peace of mind. Choose VillaAgency for your real estate needs.`,
          },
        ],
      },
      {
        id: 5,
        imageUrl: "/assets/images/property-05.jpg",
        category: "Penthouse",
        price: "$925.600",
        address: "34 Hope Street Portland, OR 42680",
        bedrooms: 4,
        bathrooms: 4,
        area: "180m2",
        floor: "38th",
        parking: "2 cars",
        filters: ["rac", "str"],
        description: `Indulge in luxury with this penthouse on the 38th floor! Featuring 4 bedrooms and 4 bathrooms, this penthouse offers elegance and comfort. With a total area of 180m2, you'll enjoy spacious living.

    You'll have parking for 2 cars, making it convenient for city living. Whether you're an urban professional or a couple seeking a lavish lifestyle, this penthouse is the epitome of sophistication.

    Elevate your living experience and make this penthouse your urban oasis!`,
        accordionItems: [
          {
            title: "Best useful links ? ",
            content: `VillaAgency is committed to providing you with the best resources and links to make your property search easy and efficient. Our team of experts is here to assist you at every step of the way.`,
          },
          {
            title: "How does this work ? ",
            content: `Finding your dream property with VillaAgency is a simple process. You can explore our listings, schedule visits, and our dedicated team will guide you through the contract and payment process.`,
          },
          {
            title: "Why is Villa the best ? ",
            content: `VillaAgency has a reputation for excellence and customer satisfaction. We prioritize safety and provide 24/7 security for your peace of mind. Choose VillaAgency for your real estate needs.`,
          },
        ],
      },
      {
        id: 6,
        imageUrl: "/assets/images/property-06.jpg",
        category: "Modern Condo",
        price: "$450.000",
        address: "22 Hope Street Portland, OR 16540",
        bedrooms: 3,
        bathrooms: 2,
        area: "165m2",
        floor: "26th",
        parking: "3 cars",
        filters: ["rac", "adv"],
        description: `Experience modern living in this stylish condo on the 26th floor! With 3 bedrooms and 2 bathrooms, this condo offers a contemporary lifestyle. The total area of 165m2 ensures comfort and convenience.

    You'll have parking for 3 cars, making it ideal for families or those who value space. Whether you're an adventurer or a tech enthusiast, this condo caters to your needs.

    Embrace the future of living and make this condo your high-tech haven!`,
        accordionItems: [
          {
            title: "Best useful links ? ",
            content: `VillaAgency is committed to providing you with the best resources and links to make your property search easy and efficient. Our team of experts is here to assist you at every step of the way.`,
          },
          {
            title: "How does this work ? ",
            content: `Finding your dream property with VillaAgency is a simple process. You can explore our listings, schedule visits, and our dedicated team will guide you through the contract and payment process.`,
          },
          {
            title: "Why is Villa the best ? ",
            content: `VillaAgency has a reputation for excellence and customer satisfaction. We prioritize safety and provide 24/7 security for your peace of mind. Choose VillaAgency for your real estate needs.`,
          },
        ],
      },
    ];
  return (
    <div className="properties section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <div className="section-heading text-center">
              <h6>| Properties</h6>
              <h2>We Provide The Best Property You Like</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {propertyData.map((property) => (
            <Card key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}
