import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 p-3 p-md-5 border-top">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center p-3 p-md-5">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
        <div className="col-12 col-md-6 p-3 p-md-5">
          <h1 className="mb-4">{productName}</h1>
          <p className="text-muted" style={{ lineHeight: "1.8", fontSize: "1.1em" }}>
            {productDescription}
          </p>
          <div className="d-flex gap-4 mt-4">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo <i className="fa fa-long-arrow-right"></i>
            </a>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>
          <div className="d-flex gap-4 mt-4">
            <a href={googlePlay}>
              <img src="/media/images/google-play-badge.svg" alt="Google Play Badge" />
            </a>
            <a href={appStore}>
              <img src="/media/images/appstore-badge.svg" alt="App Store Badge" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;