import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero" style={{ backgroundColor: "#387ed1", color: "white" }}>
      <div className="d-flex justify-content-between align-items-center px-3 px-md-5 pt-5 pb-3" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="#track" style={{ color: "white", textDecoration: "underline" }}>Track Tickets</a>
      </div>
      
      <div className="row px-3 px-md-5 pb-5">
        <div className="col-12 col-md-6 p-3">
          <h1 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <div className="input-group mb-4">
            <input 
              type="text" 
              className="form-control py-3" 
              placeholder="Eg. how do I activate F&O, why is my order blocked" 
            />
          </div>
          <div className="d-flex flex-wrap gap-3">
            <a href="#link" style={{ color: "white", textDecoration: "underline", fontSize: "14px" }}>Track account opening</a>
            <a href="#link" style={{ color: "white", textDecoration: "underline", fontSize: "14px" }}>Track segment activation</a>
            <a href="#link" style={{ color: "white", textDecoration: "underline", fontSize: "14px" }}>Intraday margins</a>
            <a href="#link" style={{ color: "white", textDecoration: "underline", fontSize: "14px" }}>Kite user manual</a>
          </div>
        </div>
        <div className="col-12 col-md-6 p-3 ps-md-5">
          <h1 className="fs-3 mb-4">Featured</h1>
          <ol style={{ lineHeight: "2.5" }}>
            <li>
              <a href="#featured" style={{ color: "white", textDecoration: "underline" }}>
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a href="#featured" style={{ color: "white", textDecoration: "underline" }}>
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;