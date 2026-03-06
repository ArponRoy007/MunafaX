import React from "react";

function RightSection({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container mt-5 p-3 p-md-5 border-top">
      <div className="row align-items-center">
        {/* order-2 order-md-1 ensures the text drops BELOW the image on mobile */}
        <div className="col-12 col-md-6 p-3 p-md-5 order-2 order-md-1">
          <h1 className="mb-4">{productName}</h1>
          <p className="text-muted" style={{ lineHeight: "1.8", fontSize: "1.1em" }}>
            {productDescription}
          </p>
          <div className="mt-4">
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 text-center p-3 p-md-5 order-1 order-md-2">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;