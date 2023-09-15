"use client"
import BestDeals from "@/app/components/propreties/BeastDeal";
import { useEffect, useState } from "react";
const dummydata = {
    area:450,
  category: "Apparment",
  address: "24 New Street Miami, OR 24560",
  description: `Get the best villa agency HTML CSS Bootstrap Template for your company website. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably haven't heard of them ugh hella. When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine neutra cardigan hoodie pop-up.`,
  imageUrl: "/assets/images/property-03.jpg",
  
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
};

// Dynamic image URLs
const infoIcons = [
  "/assets/images/info-icon-01.png",
  "/assets/images/info-icon-02.png",
  "/assets/images/info-icon-03.png",
  "/assets/images/info-icon-04.png",
];

export default function Page() {
 
    let [propertyInfo,setPropertyInfo] =useState(dummydata)
useEffect(() => {
  // Perform localStorage action
     let data = localStorage.getItem("property")as string;
    setPropertyInfo( JSON.parse(data))
    
}, []);
  return (
    <>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="breadcrumb">
                <a href="#">Home</a> / Single Property
              </span>
              <h3>Single Property</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="single-property section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="main-image">
                <img src={propertyInfo.imageUrl} alt="" />
              </div>
              <div className="main-content">
                <span className="category">{propertyInfo.category}</span>
                <h4>{propertyInfo.address}</h4>
                <p>{propertyInfo.description}</p>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      {propertyInfo.accordionItems[0].title}
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      {propertyInfo.accordionItems[0].content}
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      {propertyInfo.accordionItems[1].title}{" "}
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      {propertyInfo.accordionItems[1].content}
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      {propertyInfo.accordionItems[2].title}{" "}
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      {propertyInfo.accordionItems[2].content}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="info-table">
                <ul>
                  <li>
                    <img
                      src={infoIcons[0]}
                      alt=""
                      style={{ maxWidth: "52px" }}
                    />
                    <h4>
                      {propertyInfo.area} 
                      <br />
                      <span>Total Flat Space</span>
                    </h4>
                  </li>
                  <li>
                    <img
                      src={infoIcons[1]}
                      alt=""
                      style={{ maxWidth: "52px" }}
                    />
                    <h4>
                      Contract
                      <br />
                      <span>Contract Ready</span>
                    </h4>
                  </li>
                  <li>
                    <img
                      src={infoIcons[2]}
                      alt=""
                      style={{ maxWidth: "52px" }}
                    />
                    <h4>
                      Payment
                      <br />
                      <span>Payment Process</span>
                    </h4>
                  </li>
                  <li>
                    <img
                      src={infoIcons[3]}
                      alt=""
                      style={{ maxWidth: "52px" }}
                    />
                    <h4>
                      Safety
                      <br />
                      <span>24/7 Under Control</span>
                    </h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    <BestDeals/>
    </>
  );
}
